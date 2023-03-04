import { useState, useEffect } from "react"
import axios from "axios"
import CardPersonaje from "../components/CardPersonaje"
import ModalPersonajes from "../components/ModalPersonajes"
import useFavoritos from "../hooks/useFavoritos"

const Favoritos = () => {

  const { favoritos } = useFavoritos()

  const [ personajes, setPersonajes ] = useState([])
  const [ cargando, setCargando ] = useState(true)

  const [ activarModal, setActivarModal ] = useState(false)
  const [ personaje, setPersonaje ] = useState({
    id: '',
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    location: '',
    image: ''
  })

  const modal = () => {
    setActivarModal(!activarModal)
  }

  useEffect(() => {
    const obtenerpersonajes = async () => {
      try {
        if(favoritos.length === 1) {
          const { data } = await axios(`https://rickandmortyapi.com/api/character/${favoritos[0]}`)
          setCargando(false)
          return setPersonajes([data])
        } else if (favoritos.length > 1) {
          const { data } = await axios(`https://rickandmortyapi.com/api/character/${favoritos}`)
          setCargando(false)
          return setPersonajes(data)
        }
        return setCargando(false)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerpersonajes()
  }, [])

  if(cargando) return 'cargando...'

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {personajes.map(personaje => (
            <CardPersonaje
              key={personaje.id}
              personaje={personaje}
              modal={modal}
              setPersonaje={setPersonaje}
            />
          ))}
        </div>
        {!personajes.length ? (
            <div className="text-center text-xl font-bold text-green-700">
              <p>No hay personajes favoritos aún, selecciona tus personaje sfavoritos y aquí podrás encontrarlos</p>
            </div>
          ) : ''}
        <ModalPersonajes 
          activarModal={activarModal} 
          setActivarModal={setActivarModal} 
          personaje={personaje} 
          personajes={personajes} 
          setPersonajes={setPersonajes} 
        />
      </>
    )
}

export default Favoritos
