import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FavoritosProvider } from "./context/FavoritosProvider"

import LayoutLogin from "./layouts/LayoutLogin"
import LayoutPrincipal from "./layouts/LayoutPrincipal"

import Login from "./pages/Login"
import Personajes from "./pages/Personajes"
import Ubicaciones from "./pages/Ubicaciones"
import Episodios from "./pages/Episodios"
import Favoritos from "./pages/Favoritos"

function App() {

  return (
    <BrowserRouter>
      <FavoritosProvider>
        <Routes>
          
          <Route path='/' element={<LayoutLogin />}>
            <Route index element={<Login />} />
          </Route>

          <Route path='/app' element={<LayoutPrincipal />}>
            <Route path='personajes' element={<Personajes />} />
            <Route path='ubicaciones' element={<Ubicaciones />} />
            <Route path='episodios' element={<Episodios />} />
            <Route path='favoritos' element={<Favoritos />} />
          </Route>
          
        </Routes>
      </FavoritosProvider>
    </BrowserRouter>
  )
}

export default App
