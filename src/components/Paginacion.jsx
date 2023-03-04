import { Link } from "react-router-dom"

const Paginacion = ({total, paginaActual, setPaginaActual}) => {

    let paginacion = []
    if(paginaActual === total && total > 8) {
        for(let i = paginaActual - 7; i < paginaActual + 7 && i <= total; i++) {
            paginacion = [...paginacion, i]
        }
    } else if(total <= 8) {
        for(let i = 1; i <= total; i++) {
            paginacion = [...paginacion, i]
        }
    } else if(paginaActual === 1 || paginaActual < 4) {
        for(let i = paginaActual; i < paginaActual + 7 && i <= total; i++) {
            paginacion = [...paginacion, i]
        }
    } else {
        for(let i = paginaActual - 3; i < paginaActual + 4 && i <= total; i++) {
            paginacion = [...paginacion, i]
        }
    }

    const cambiarPagina = e => {
        setPaginaActual(+e.target.innerText)
    }

    const retroceder = () => {
        if(paginaActual < 8) {
            setPaginaActual(1)
        } else {
            setPaginaActual(paginaActual - 7)
        }
    }

    const avanzar = () => {
        if(paginaActual > total - 8) {
            setPaginaActual(total)
        } else {
            setPaginaActual(paginaActual + 8)
        }
    }
    
  return (
    <div className="flex gap-3 mt-8 flex-wrap max-w-sm mx-auto items-center justify-center">
        <ul className="inline-flex items-center -space-x-px">
            <li
                onClick={retroceder}
            >
                <Link 
                    to='#' 
                    className='block px-3 py-2 ml-0 leading-tight bg-white hover:bg-green-500 border-2 border-green-300 rounded-l-lg hover:text-white'
                >
                    <span className="sr-only">Previous</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                </Link>
            </li>

            {paginacion.map(pagina => (
                <li
                    onClick={cambiarPagina}
                    key={pagina}
                >
                    <Link 
                        to='#' 
                        className={`${paginaActual === pagina ? 'bg-green-500 text-white' : ''} hover:bg-green-500 px-3 py-2 leading-tight border border-green-300 hover:text-white`}
                    >
                        {pagina}
                    </Link>
                </li>
            ))}

            <li
                onClick={avanzar}
            >
                <Link 
                    href="#"                     
                    className='block px-3 py-2 ml-0 leading-tight bg-white hover:bg-green-500 border-2 border-green-300 rounded-r-lg hover:text-white'
                >
                    <span className="sr-only">Next</span>
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Paginacion
