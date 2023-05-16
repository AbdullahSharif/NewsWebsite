import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import CategoryNews from "./pages/CategoryNews"


function Router() {
  return (
    <>
    <Navbar/>
    
        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
            <Route path={"/*"} element={<CategoryNews/>} />
        </Routes>


    </>
    
  )
}

export default Router
