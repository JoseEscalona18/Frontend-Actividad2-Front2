
import { useState } from 'react';
import Hero from './components/Hero';
import HeaderPrueba from './components/Header/HeaderPrueba';
import Footer from './components/Footer';
import ProductosL from './components/ProductosL';
import './App.css';
import TablaProductos from './components/Tabla'

function App() {
  const [count, setCount] = useState(0);

    const [showHero, setShowHero] = useState(true);
    const [showProductos, setShowProductos] = useState(true);
  
    const toggleVisibility = () => {
      setShowHero(false);
      setShowProductos(false);
    };
  
    return (
      <>
        <HeaderPrueba toggleVisibility={toggleVisibility} />
        {showHero && <Hero />}
        {showProductos && <ProductosL />}
        <TablaProductos></TablaProductos>

        <Footer />
      </>
  );
}

export default App;