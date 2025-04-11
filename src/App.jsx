import Header from "./components/Header"
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import NaoExclusivo from "./pages/NaoExclusivo"
import Social from "./pages/Social"
import Login from "./pages/Login"
import { Outlet } from "react-router-dom"



function App() {


  return (
    <div className="overflow-hidden">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
