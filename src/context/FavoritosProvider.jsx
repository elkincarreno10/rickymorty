import { useState, useEffect, createContext } from "react";

const FavoritosContext = createContext()


const FavoritosProvider = ({children}) => {

    const [ favoritos, setFavoritos ] = useState([])

    useEffect(() => {
        if(localStorage.getItem('favoritos')) {
            setFavoritos(JSON.parse(localStorage.getItem('favoritos')))
        }
    }, [])
    
    const agregarFavorito = id => {
        if(favoritos.includes(id)) {
            const nuevosFavoritos = favoritos.filter(favorito => favorito !== id)
            setFavoritos(nuevosFavoritos)
            localStorage.setItem('favoritos', JSON.stringify([...nuevosFavoritos]))
            return
        }
        setFavoritos([...favoritos, id])
        localStorage.setItem('favoritos', JSON.stringify([...favoritos, id]))
    }

    return (
        <FavoritosContext.Provider
            value={{
                favoritos,
                setFavoritos,
                agregarFavorito
            }}
        >{children}</FavoritosContext.Provider>
    )
}

export {
    FavoritosProvider
}

export default FavoritosContext
