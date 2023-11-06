import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Crear from './pages/Crear'


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/Inventario' element={<Crear />} />

        </Routes>
    </BrowserRouter>
  );
};

export default App;