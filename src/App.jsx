import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Inicio from './Components/Rutas/Inicio'
import Juegos from './Components/Rutas/Juegos'
import GiftCards from './Components/Rutas/GiftCards'
import RandomKeys from './Components/Rutas/RandomKeys'
import Soporte from './Components/Rutas/Soporte'
import Carrito from './Components/Rutas/Carrito'
import ProductDetails from './Components/Contenido/ProductDetails'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/Juegos' element={<Juegos/>}/>
        <Route exact path='/GiftCards' element={<GiftCards/>}/>
        <Route exact path='/RandomKeys' element={<RandomKeys/>}/>
        <Route exact path='/Soporte' element={<Soporte/>}/>
        <Route exact path='/Carrito' element={<Carrito/>}/>
        <Route exact path='/:categoria/:id' element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
