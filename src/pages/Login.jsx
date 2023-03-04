import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"
import { generarToken } from "../helpers"
import axios from "axios"

const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ alerta, setAlerta ] = useState({})

    const navigate = useNavigate()

    const handleSubmit = async e => {
        e.preventDefault()

        if([email, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
            return
        }

        const { data: usuarios } = await axios('../src/login.json')

        const usuario = usuarios.filter(user => user.email === email)

        if(!usuario[0]) {
            setAlerta({
                msg: 'El usuario no existe',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
            return
        }

        if(usuario[0].password !== password) {
            setAlerta({
                msg: 'Password Incorrecto',
                error: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000);
            return
        }

        localStorage.setItem('token', `${generarToken()},${usuario[0].nombre}`)
        return navigate('/app/personajes')
    }

  return (
    <div className='bg-gradient-to-bl from-green-300 to-green-600 max-w-xl my-auto p-12 shadow-lg shadow-green-900 rounded-lg text-center'>
        <h2 className='text-5xl font-extrabold mb-6'>Inicia Sesión</h2>
        {alerta.msg && (
            <Alerta alerta={alerta} />
        )}
        <form
            onSubmit={handleSubmit}
        >
            <legend className='mt-3 mb-4 font-bold text-center text-slate-700'>Ingresa para interectuar con todos los personajes de Rick y Morty</legend>
            <div className='flex items-center my-3 space-x-3'>
                <label htmlFor="email" className='flex-0 text-lg font-bold'>Email:</label>
                <input 
                    id='email'
                    type="email" 
                    className='py-2 px-4 rounded-lg flex-1 bg-green-200 outline-none focus:outline-green-800 placeholder:text-gray-500'
                    placeholder='Ingresa tu Email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className='flex items-center my-3 space-x-3'> 
                <label htmlFor="password" className='flex-0 text-lg font-bold'>Password:</label>
                <input 
                    id='password'
                    type="password" 
                    className='py-2 px-4 rounded-lg flex-1 bg-green-200 outline-none focus:outline-green-800 placeholder:text-gray-500'
                    placeholder='Ingresa tu Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <input 
                type="submit" 
                className='bg-black mt-4 px-8 py-2 rounded text-white cursor-pointer hover:bg-slate-900 uppercase'
                value='Iniciar Sesión'
            />
        </form>
    </div>
  )
}

export default Login
