import { Link } from "react-router-dom"

const Footer = () => {

    const today = new Date()

  return (
    <footer className="bg-gray-200 px-4 py-10 w-full">
      <div className="max-w-4xl flex justify-between text-center mx-10 md:mx-auto items-center">
        <nav className="flex flex-col md:flex-row text-center gap-4">
            <Link className="hover:text-gray-700 text-sm font-bold uppercase" to='/app/personajes'>Personajes</Link>
            <Link className="hover:text-gray-700 text-sm font-bold uppercase" to='/app/ubicaciones'>Ubicaciones</Link>
            <Link className="hover:text-gray-700 text-sm font-bold uppercase" to='/app/episodios'>Episodios</Link>
        </nav>
        <p className="font-bold uppercase">copyrigth &#169; <span className="font-extrabold">{today.getFullYear()}</span> Elkin - Todos los derechos reservados</p>
      </div>
    </footer>
  )
}

export default Footer
