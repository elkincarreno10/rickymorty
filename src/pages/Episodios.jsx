import { useState, useEffect } from "react"
import axios from "axios"
import CardEpisodio from "../components/CardEpisodio"
import Paginacion from "../components/Paginacion"

const Episodios = () => {

  const [ paginaActual, setPaginaActual ] = useState(1)
  const [ episodios, setEpisodios ] = useState([])
  const [ total, setTotal ] = useState(1)


  useEffect(() => {
    const obtenerEpisodios = async () => {
      try {
        const { data } = await axios(`https://rickandmortyapi.com/api/episode?page=${paginaActual}`)
        setTotal(data.info.pages)
        setEpisodios(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerEpisodios()
  }, [paginaActual])

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {episodios.map(episodio => (
            <CardEpisodio
              key={episodio.id}
              episodio={episodio}
            />
          ))}
        </div>
        <Paginacion
          total={total}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
        />
      </>
    )
}

export default Episodios