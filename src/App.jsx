import Header from "./components/Header"
import Home from "./pages/Home"
import Catalogo from "./pages/Catalogo"
import Social from "./pages/Social"


function App() {


  return (
    <div className="overflow-hidden">
      <Header />
      <Home />
      <Catalogo />
      <Social />
    </div>
  )
}

export default App
