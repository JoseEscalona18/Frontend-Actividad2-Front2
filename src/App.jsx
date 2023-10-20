import { useState } from 'react'
import Header from './components/Header'
import TablaProductos from '../../ActividadFront2/src/Components/TablaProductos'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <TablaProductos/>
    </>
  )
}

export default App
