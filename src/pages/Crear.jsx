import React from "react";
import Hero from "../components/Hero";
import HeaderPrueba from '../components/Header/HeaderPrueba';
import Footer from '../components/Footer';
import ProductosL from '../components/ProductosL';
import TablaProductos from '../components/Tabla'
import AgregarProductos from '../components/crearProduct'
import Login from '../components/Login'
import Registro from '../components/Registro'

const Crear = () => {
  return (
    <>
    <HeaderPrueba></HeaderPrueba>
    <TablaProductos></TablaProductos>
    <AgregarProductos></AgregarProductos>
      <Footer></Footer>
    </>
  );
};

export default Crear;