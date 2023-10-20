import React, { Component } from 'react'

const TablaProductos = (producto) => {
    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState(null);
    const [nombre, setNombre] = useState('');
    const [color, setColor] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
  
    useEffect(() => {
      const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
      setProductos(productosGuardados);
    }, []);
  
  
    useEffect(() => {
      if (productoEditar !== null) {
        const producto = productos[productoEditar];
        setNombre(producto.nombre);
        setColor(producto.color);
        setDescripcion(producto.descripcion);
        setPrecio(producto.precio);
      }
    }, [productoEditar]);
  
    const guardarProducto = (e) => {
      e.preventDefault();
      const nuevosProductos = [...productos];
      nuevosProductos[productoEditar] = { nombre, color, descripcion, precio };
      setProductos(nuevosProductos);
      localStorage.setItem('productos', JSON.stringify(nuevosProductos));
      setProductoEditar(null); // Cerrar el formulario de edición
      limpiarFormulario(); // Limpiar los campos del formulario
    };
  
    const eliminarProducto = (index) => {
      const nuevosProductos = [...productos];
      nuevosProductos.splice(index, 1);
      setProductos(nuevosProductos);
      localStorage.setItem('productos', JSON.stringify(nuevosProductos));
    };
  
    const limpiarFormulario = () => {
      setNombre('');
      setColor('');
      setDescripcion('');
      setPrecio('');
    };
  
    const actualizarTabla = () => {
      const productosGuardados = JSON.parse(localStorage.getItem('productos')) || [];
      setProductos(productosGuardados);
    };
  
    if (productoEditar !== null) {
      return (
  <div className="bg-gray-500 dark:bg-gray-800 p-6 rounded-lg shadow-md mx-auto max-w-md">
      <h2 className="text-lg text-white font-semibold mb-4">Editar Producto</h2>
    <form onSubmit={guardarProducto}>
      <div className="mb-4">
        <label className="block text-white  mb-1" htmlFor="nombre">
          Nombre:
        </label>
        <input
          id="nombre"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-1" htmlFor="color">
          Color:
        </label>
        <input
          id="color"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-1" htmlFor="descripcion">
          Descripcion:
        </label>
        <input
          id="descripcion"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="text"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white mb-1" htmlFor="precio">
          Precio:
        </label>
        <input
          id="precio"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
      </div>
      <button
        className="text-white bg-blue-700 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 transition duration-300"
        type="submit"
      >
        Guardar
      </button>
    </form>
  </div>
      );
    }
}

export default class Tabla extends Component {
  render() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg items-center flex flex-col">
        <table className="sm:text-xs md:text-sm text-left text-gray-500 dark:text-gray-400 mb-6 mx-auto">
          <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3">
                Producto
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3">
                Color
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3">
                Descripcion
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3">
                Precio
              </th>
              <th scope="col" className="sm:p-2 md:px-6 md:py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="sm:p-2 md:px-6 md:py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {producto.nombre}
                </th>
                <td className="sm:p-2 md:px-6 md:py-3">{producto.color}</td>
                <td className="sm:p-2 md:px-6 md:py-3">{producto.descripcion}</td>
                <td className="sm:p-2 md:px-6 md:py-3">{producto.precio}</td>
                <td className="sm:p-2 md:px-6 md:py-3 text-right gap-1 flex flex-col">
                  <button className= "sm:p-2 md:px-6 md:py-3 text-white bg-blue-700 hover:bg-cyan-800 font-bold rounded-md shadow-lg transform hover:scale-105 transition duration-300"onClick={() => setProductoEditar(index)}>Editar</button>
                  <button className='sm:p-2 md:px-6 md:py-3 text-white bg-red-700 hover:bg-cyan-800 font-bold rounded-md shadow-lg transform hover:scale-105 transition duration-300' onClick={() => eliminarProducto(index)}>Eliminar</button>
                </td>
  
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={actualizarTabla} className="text-white bg-blue-700 hover:bg-cyan-800 font-bold mb-4 py-2 px-4 rounded-md shadow-lg transform hover:scale-105 transition duration-300">
    Actualizar tabla
  </button>
  
      </div>
    )
  }
}
