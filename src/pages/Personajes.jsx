import { useState, useEffect } from "react"
import axios from "axios"
import CardPersonaje from "../components/CardPersonaje"
import Paginacion from "../components/Paginacion"
import ModalPersonajes from "../components/ModalPersonajes"

const Personajes = () => {

  const [ paginaActual, setPaginaActual ] = useState(1)
  const [ personajes, setPersonajes ] = useState([])
  const [ total, setTotal ] = useState(1)
  const [ parametro, setParametro ] = useState('')

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
    const obtenerPersonajes = async () => {
      try {
        const { data } = await axios(`https://rickandmortyapi.com/api/character?page=${paginaActual}&status=${parametro}`)
        setTotal(data.info.pages)
        setPersonajes(data.results)
        setActivarModal(false)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerPersonajes()
  }, [paginaActual, parametro])


  const buscar = async e => {
    setParametro(e.target.parentElement.firstChild.value)
  }

    return (
      <>
        <div className="mb-10 flex justify-center gap-4">
          <select name="buscador" className="bg-gray-300 rounded-lg p-1">
            <option value="">-- Todos --</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <img className="w-6 cursor-pointer" src="../src/img/lupa.png" alt="Buscador" onClick={buscar} />
        </div>
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
        <Paginacion
          total={total}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
        />
        <ModalPersonajes activarModal={activarModal} setActivarModal={setActivarModal} personaje={personaje} />
      </>
    )
}

export default Personajes
