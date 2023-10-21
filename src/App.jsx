
import { useState } from 'react';
import Hero from './components/Hero';
import HeaderPrueba from './components/Header/HeaderPrueba';
import Footer from './components/Footer';
import ProductosL from './components/ProductosL';
import './App.css';
import TablaProductos from './components/Tabla'
import AgregarProductos from './components/crearProduct'

function App() {
  const [count, setCount] = useState(0);

    const [showHero, setShowHero] = useState(true);
    const [showProductos, setShowProductos] = useState(true);
    const [showTabla, setShowTabla] = useState(false);
    const [showCrear, setShowCrear] = useState(false);

  
    const toggleVisibility = () => {
      setShowHero(false);
      setShowProductos(false);
      setShowTabla(true)
      setShowCrear(true)
    };

    const toggleVisibility2 = () => {
      setShowHero(true);
      setShowProductos(true);
      setShowTabla(false)
      setShowCrear(false)
    };



    return (
      <>
        <HeaderPrueba toggleVisibility={toggleVisibility} toggleVisibility2={toggleVisibility2} />
        {showHero && <Hero />}
        {showProductos && <ProductosL />}
        {showTabla && <TablaProductos/>}
        {showCrear && <AgregarProductos/>} 

        
        <Footer />
      </>
  );
}

export default App;