import { useState } from 'react'
import Hero from './components/Hero'
import HeaderPrueba from './components/Header/HeaderPrueba'
import Footer from './components/Footer'
import ProductosL from './components/ProductosL'
import TablaProductos from './components/Tabla'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderPrueba></HeaderPrueba>
    <Hero></Hero>

    <ProductosL></ProductosL>
    <TablaProductos></TablaProductos>

    <Footer></Footer>
    
    </>
  )
}

export default App
