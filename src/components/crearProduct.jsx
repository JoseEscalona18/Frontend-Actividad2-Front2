import React, { useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:4000';

function AgregarProductos() {
    // Estado local para almacenar los valores de los campos del formulario
  const [serial, setSerial] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [categoria, setCategoria] = useState('');
  const [imagen, setImagen] = useState('');

    // Estado local para mostrar la respuesta del servidor y controlar la visualización del mensaje
  const [respuesta, setRespuesta] = useState('');
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const producto = {
      serial,
      nombre,
      descripcion,
      cantidad,
      precio,
      categoria,
      imagen,
    };

    try {
            // Envío de la solicitud POST al backend para agregar el producto
      const response = await axios.post(`${API}`, producto);
      setRespuesta(response.data); 
      setMostrarMensaje(true); 

            // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
      setTimeout(() => {
        setMostrarMensaje(false); 
      }, 3000);
    } catch (error) {
      console.error(error);
      setRespuesta('Ocurrió un error al agregar el producto');
    }
  };

  return (
    //Formulario en cuestión
    <div>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mb-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-semibold tracking-tight text-gray-900">Agregar Producto</h1>
        </div>
        <form className="mt-8 space-y-6 flex flex-col" onSubmit={handleSubmit}>
        <label>
          Serial:
          <input
            type="text"
            value={serial}
            className='w-full rounded-lg'
            onChange={(e) => setSerial(e.target.value)}
          />
        </label>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            className='w-full rounded-lg'
            onChange={(e) => setNombre(e.target.value)}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            value={descripcion}
            className='w-full rounded-lg'
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </label>
        <label>
          Cantidad:
          <input
            type="number"
            value={cantidad}
            className='w-full rounded-lg'
            onChange={(e) => setCantidad(e.target.value)}
          />
        </label>
        <label>
          Precio:
          <input
            type="number"
            value={precio}
            className='w-full rounded-lg'
            onChange={(e) => setPrecio(e.target.value)}
          />
        </label>
        <label>
          Categoría:
          <input
            type="text"
            value={categoria}
            className='w-full rounded-lg'
            onChange={(e) => setCategoria(e.target.value)}
          />
        </label>
        <label>
          Foto(URL):
          <input
            type="text"
            value={imagen}
            className='w-full rounded-lg'
            onChange={(e) => setImagen(e.target.value)}
          />
        </label>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-verdeo hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Agregar Producto
            </button>
          </div>
        </form>
                  {/* Mostrar mensaje de respuesta del servidor si está activado */}

        {mostrarMensaje && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mt-6 rounded">
            <p className="text-sm font-bold">{respuesta}</p>
          </div>
        )}
      </div>
    </div>
        
    </div>
    
  );
}

export default AgregarProductos;




