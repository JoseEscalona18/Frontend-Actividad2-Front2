import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:4000';

function TablaProductos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API)
      .then(response => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          setData([]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  const eliminarProducto = (id) => {
    axios.delete(API, { data: { serial: id } })
      .then(response => {
        setData(data.filter(producto => producto.serial !== id));
      })
      .catch(error => {
        console.error('Error al eliminar el producto:', error);
      });
  };

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg items-center flex flex-col'>
      <h1 className='text-lg'>Tabla de Productos</h1>
      {data.length > 0 ? (
        <table className='sm:text-xs md:text-sm text-left text-gray-500 dark:text-gray-400 mb-6 mx-auto'>
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-center'>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Serial</th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Nombre</th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Descripción</th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Precio</th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Cantidad</th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Categoría</th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map(producto => (
            <tr key={producto.serial} id={producto.serial}>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">{producto.serial}</td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">{producto.nombre}</td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">{producto.descripcion}</td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">{producto.precio}</td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">{producto.cantidad}</td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">{producto.categoria}</td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">
              <div className="flex items-center">
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg mr-2"
                  onClick={() => editarProducto(producto)}
                >
                  Editar
                </button>
                <button
                  className="text-white bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg"
                  onClick={() => eliminarProducto(producto.serial)}
                >
                  Eliminar
                </button>
              </div>
            </td>
            </tr>
          ))}
          </tbody>
        </table>
      ) : (
          <div className="flex items-center justify-center">
            <table className="sm:text-xs md:text-sm text-left text-gray-500 dark:text-gray-400 mb-6 mx-auto">
              <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr className="text-center">
                  <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Serial</th>
                  <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Nombre</th>
                  <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Descripción</th>
                  <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Precio</th>
                  <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Cantidad</th>
                  <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Categoría</th>
                  <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center" colSpan="7">No hay productos agregados</td>
                </tr>
              </tbody>
            </table>
          </div>
      )}
    </div>
  );
}

export default TablaProductos;