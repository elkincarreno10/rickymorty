import { Outlet } from "react-router-dom"

const LayoutLogin = () => {
  return (
    <main
        className="h-screen flex items-center justify-center bg-gradient-to-bl from-green-50 to-green-300"
    > 
        <Outlet />
    </main>
  )
}

export default LayoutLogin
