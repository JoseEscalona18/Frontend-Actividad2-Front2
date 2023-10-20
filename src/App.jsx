import { useState } from 'react'
import Hero from './components/Hero'
import HeaderPrueba from './components/Header/HeaderPrueba'
import Footer from './components/Footer'
import ProductosL from './components/ProductosL'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderPrueba></HeaderPrueba>
    <Hero></Hero>

    <ProductosL></ProductosL>
    <Footer></Footer>
    
    </>
  )
}

export default App
