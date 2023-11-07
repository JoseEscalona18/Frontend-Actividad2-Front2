import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hero from "./components/Hero";
import HeaderPrueba from './components/Header/HeaderPrueba';
import Footer from './components/Footer';
import ProductosL from './components/ProductosL';
import TablaProductos from './components/Tabla'
import AgregarProductos from './components/crearProduct'
import Login from './components/Login'
import Registro from './components/Registro'
import Pfp from './components/Pfp'
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider, { AuthContext } from './context/AuthProvider';


const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
    <HeaderPrueba></HeaderPrueba>
        <Routes>

        <Route path='/' element={<div><Hero/><ProductosL/></div>} />
        

        <Route element = {<ProtectedRoute/>}>
        <Route path='/Inventario' element={<div><TablaProductos/><AgregarProductos/></div>} />


        </Route>
            <Route path='/Login' element={<div><Login/></div>} />
            <Route path='/Registro' element={<div><Registro/></div>} />
            <Route path='/Pfp' element={<div><Pfp/></div>} />


        </Routes>
        <Footer></Footer>
    </BrowserRouter>
    </AuthProvider>
    
  );
};

export default App;