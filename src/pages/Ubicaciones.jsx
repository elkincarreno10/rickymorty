import { useState, useEffect } from "react"
import axios from "axios"
import CardUbicacion from "../components/CardUbicacion"
import Paginacion from "../components/Paginacion"

const Ubicaciones = () => {

  const [ paginaActual, setPaginaActual ] = useState(1)
  const [ ubicaciones, setUbicaciones ] = useState([])
  const [ total, setTotal ] = useState(1)


  useEffect(() => {
    const obtenerUbicaciones = async () => {
      try {
        const { data } = await axios(`https://rickandmortyapi.com/api/location?page=${paginaActual}`)
        setTotal(data.info.pages)
        setUbicaciones(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerUbicaciones()
  }, [paginaActual])

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ubicaciones.map(ubicacion => (
            <CardUbicacion
              key={ubicacion.id}
              ubicacion={ubicacion}
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

export default Ubicaciones
