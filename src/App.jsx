
import { useState } from 'react';
import Hero from './components/Hero';
import HeaderPrueba from './components/Header/HeaderPrueba';
import Footer from './components/Footer';
import ProductosL from './components/ProductosL';
import './App.css';
import TablaProductos from './components/Tabla'
import AgregarProductos from './components/crearProduct'
import dotenv from 'dotenv'

  // El componente App es el componente principal de la aplicación.


function App() {
  const [count, setCount] = useState(0);
     // El estado count y la función setCount se declaran utilizando el hook useState, pero no se utilizan en el código proporcionado.


    const [showHero, setShowHero] = useState(true);
    const [showProductos, setShowProductos] = useState(true);
    const [showTabla, setShowTabla] = useState(false);
    const [showCrear, setShowCrear] = useState(false);

     // Los estados showHero, showProductos, showTabla y showCrear se utilizan para controlar la visibilidad de diferentes componentes en la aplicación.


  
     // La función toggleVisibility se activa cuando se realiza una acción específica y se encarga de mostrar la TablaProductos y AgregarProductos, mientras oculta el Hero y ProductosL.
    const toggleVisibility = () => {
      setShowHero(false);
      setShowProductos(false);
      setShowTabla(true)
      setShowCrear(true)
    };
      // La función toggleVisibility2 se activa cuando se realiza otra acción específica y se encarga de mostrar el Hero y ProductosL, mientras oculta la TablaProductos y AgregarProductos.

    const toggleVisibility2 = () => {
      setShowHero(true);
      setShowProductos(true);
      setShowTabla(false)
      setShowCrear(false)
    };



    return (
      <>
        {/* El componente HeaderPrueba se renderiza y se le pasan las funciones toggleVisibility y toggleVisibility2 como propiedades. */}

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