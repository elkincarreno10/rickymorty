import { useState, useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const LayoutPrincipal = () => {

    const [ nombre, setNombre ] = useState('')
    const [cargando, setCargando] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token) {
            return navigate('/')
        }
        setNombre(token.split(',')[1])
        setCargando(false)
    }, [])

    if(cargando) return '...cargando'

  return (
    <>
        <Header nombre={nombre} />
        <main className="max-w-4xl mx-5 lg:mx-auto my-10">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default LayoutPrincipal
