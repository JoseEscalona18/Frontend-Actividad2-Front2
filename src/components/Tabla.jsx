import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:4000';

function TablaProductos() {
    // Estado para almacenar los datos de los productos
  const [data, setData] = useState([]);
    // Estado para almacenar el producto seleccionado para editar
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    // Estado para almacenar la versión editada del producto
  const [edicionProducto, setEdicionProducto] = useState(null);

  const [isLoading, setIsLoading] = useState(false); // Nuevo estado para indicador de carga

  // Evitar el desplazamiento de la página mientras se muestra el Loader
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    fetchData(); // Llama a fetchData al cargar el componente, cargando los datos
  }, []);

  // Obtener los datos de los productos desde la API
  const fetchData = () => {
    setIsLoading(true); // Inicia el indicador de carga
    axios
      .get(API)
      .then(response => {
        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          setData([]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })
      .finally(() => {
        setIsLoading(false); // Finaliza el indicador de carga
      });
  };

  // Eliminar un producto
  //Esta función se utiliza para eliminar un producto del backend. Realiza una solicitud DELETE a la API, pasando el serial del producto que se desea elimina
  const eliminarProducto = id => {
    axios
      .delete(API, { data: { serial: id } })
      .then(response => {
        setData(data.filter(producto => producto.serial !== id));
      })
      .catch(error => {
        console.error('Error al eliminar el producto:', error);
      });
  };

    // Editar un producto
    //Esta función se utiliza para establecer el producto seleccionado como el producto que se va a editar. Recibe como argumento el objeto del producto seleccionado y lo asigna al estado edicionProducto para su edición.
  const editarProducto = producto => {
    setEdicionProducto({ ...producto });
    setProductoSeleccionado(producto);
  };

  // Actualizar un producto editado
  //Esta función se utiliza para enviar una solicitud PUT al backend para actualizar el producto editado. Utiliza el estado edicionProducto para obtener los datos actualizados del producto. La solicitud PUT se realiza a la API con el serial del producto y los datos actualizados. Si la solicitud es exitosa, 
  //llama a la función fetchData para actualizar los datos de la tabla y restablece los estados productoSeleccionado y edicionProducto a 
  //sus valores iniciales. En caso de error, muestra un mensaje de error en la consola.
  const actualizarProducto = () => {
    axios
      .put(`${API}`, { serial: edicionProducto.serial, datosActualizados: edicionProducto })
      .then(response => {
        fetchData(); // Actualiza los datos de la tabla
        setProductoSeleccionado(null);
        setEdicionProducto(null); 
      })
      .catch(error => {
        console.error('Error al actualizar el producto:', error);
      });
  };

  // Manejar los cambios en los campos de edición del producto
  const handleInputChange = event => {
    const { name, value } = event.target;
    setEdicionProducto({ ...edicionProducto, [name]: value });
  };

  return (
    /* Encabezado */
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg items-center flex flex-col mb-8 mt-8 font-[Barlow]'>
      <div className="bg-verdeo rounded-lg p-4 mx-32 sm:mx-28 mb-8">
        <h2 className="text-white text-3xl font-bold text-center">Inventario/Crear</h2>
      </div>
      <button
  type="button"
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  onClick={fetchData}
>
  Actualizar tabla
</button>
        {productoSeleccionado && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-white rounded-lg p-8 max-w-md">
              <h3 className="text-2xl font-bold mb-4">Editar Producto</h3>
              <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                  Nombre:
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={edicionProducto.nombre}
                  onChange={handleInputChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="descripcion">
                  Descripción:
                </label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  value={edicionProducto.descripcion}
                  onChange={handleInputChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">
                  Precio:
                </label>
                <input
                  type="number"
                  id="precio"
                  name="precio"
                  value={edicionProducto.precio}
                  onChange={handleInputChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantidad">
                  Cantidad:
                </label>
                <input
                  type="number"
                  id="cantidad"
                  name="cantidad"
                  value={edicionProducto.cantidad}
                  onChange={handleInputChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-boldmb-2" htmlFor="categoria">
                  Categoría:
                </label>
                <input
                  type="text"
                  id="categoria"
                  name="categoria"
                  value={edicionProducto.categoria}
                  onChange={handleInputChange}
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-verdeo hover:bg-verdeo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={actualizarProducto}
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setProductoSeleccionado(null)}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
                      className="text-white bg-verdeo hover:bg-blue-800 px-4 py-2 rounded-lg mr-2"
                      onClick={() => editarProducto(producto)}
                    >
                      Editar
                    </button>
                    <button
                      className="text-white bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg"
                      onClick={() => eliminarProducto(producto.serial)}
                    >
                      Eliminar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400">
          No se encontraron productos.
        </div>
      )}
    </div>
    
  );
}

export default TablaProductos;