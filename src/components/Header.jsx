import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"

const Header = ({nombre}) => {

  const [ menu, setMenu ] = useState(true)

  const navigate = useNavigate()
  const location = useLocation()

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const mostrarMenu = () => {
    setMenu(!menu)
  }

  return (
    <header className="bg-green-400 p-4">
        <div className="max-w-4xl flex flex-col gap-5 md:gap-0 md:flex-row md:justify-between mx-auto items-center">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <Link to='/app/personajes'>
                  <img className="w-20" src="../img/logo.png" alt="Logo de la app" />
              </Link>
              <p className="text-base font-bold">Bienvenido: <span className="font-extrabold text-yellow-900">{nombre}</span></p>
            </div>

            <img className='block w-10 md:hidden cursor-pointer' src="../img/menu.png" alt="Menú" onClick={mostrarMenu} />

            <nav className={`${menu ? 'hidden' : 'flex'} md:flex flex-col md:flex-row text-center gap-3 md:gap-6 items-center`}>
                <Link className={`${location.pathname === '/app/personajes' ? 'text-gray-700 border-b border-gray-700' : ''} hover:text-gray-700 text-sm font-bold uppercase`} to='/app/personajes'>Personajes</Link>
                <Link className={`${location.pathname === '/app/ubicaciones' ? 'text-gray-700 border-b border-gray-700' : ''} hover:text-gray-700 text-sm font-bold uppercase`} to='/app/ubicaciones'>Ubicaciones</Link>
                <Link className={`${location.pathname === '/app/episodios' ? 'text-gray-700 border-b border-gray-700' : ''} hover:text-gray-700 text-sm font-bold uppercase`} to='/app/episodios'>Episodios</Link>
                <Link className={`${location.pathname === '/app/favoritos' ? 'border-b border-gray-700' : ''}`} to='/app/favoritos'>
                  <svg version="1.0" className='w-7'viewBox="0 0 1280.000000 1181.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,1181.000000) scale(0.100000,-0.100000)"
                    fill="#e5ff00" stroke="none">
                      <path d="M6327 11292 c-60 -180 -161 -489 -227 -687 -65 -198 -233 -709 -373 -1135 -141 -426 -367 -1114 -503 -1527 l-248 -753 -2358 0 c-1297 0 -2358 -3 -2358 -7 0 -5 170 -130 378 -279 207 -149 1057 -758 1887 -1353 831 -596 1518 -1091 1528 -1100 20 -19 55 94 -420 -1346 -187 -570 -344 -1047 -628 -1910 -141 -429 -286 -869 -322 -978 -36 -109 -63 -201 -60 -204 7 -6 -236 -180 1912 1362 1012 726 1855 1331 1872 1343 l33 23 762 -548 c2447 -1758 3053
                      -2191 3056 -2188 2 2 -46 153 -106 337 -61 183 -216 655 -346 1048 -511 1556 -712 2168 -811 2470 -145 440 -185 563 -185 575 0 6 855 623 1900 1373 1045 750 1900 1368 1900 1373 0 5 -909 10 -2357 11 l-2356 3 -164 500 c-90 275 -272 826 -403 1225 -131 399 -383 1166 -560 1705 -177 539 -325 983 -329 987 -4 5 -55 -139 -114 -320z"/>
                    </g>
                  </svg>
                </Link>
                <button
                  onClick={cerrarSesion}
                  className='text-white text-sm font-bold uppercase bg-green-800 p-3 rounded-lg hover:bg-green-900'
                >Cerrar Sesión</button>
            </nav>
        </div>
    </header>
  )
}

export default Header
