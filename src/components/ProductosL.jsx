import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

import { AuthContext } from '../context/AuthProvider'

//Conexión al Backend a traves de localhost
const API = import.meta.env.VITE_BACKEND_URL

// Componente interno para mostrar la tarjeta de un producto
const ProductCard = ({ imagen, title, description, availableQuantity, price, serial }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [action, setAction] = useState('');

  let { user } = useContext(AuthContext);

  useEffect(() => {
    setAction(isFavorite ? 'Quitar' : 'Agregar');
  }, [isFavorite]);

  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite);
    try {
      await axios.post(API, {
        nombreBoton: 'Favorito',
        idUser: user.id,
        serial: serial,
        action: isFavorite ? 'Quitar' : 'Agregar'
      });

      console.log('Favorito guardado correctamente.');
    } catch (error) {
      console.error('Error al guardar el favorito:', error);
    }
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-[Barlow]">
      <img className="p-8 rounded-t-lg h-96" src={imagen} alt="imagen del producto" />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <p className="text-gray-600 dark:text-gray-400">
          <b>Cantidad:</b> {availableQuantity}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-2.5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
          {document.cookie.includes('token') && (
            <button
              className={`mt-2 sm:mt-0 ${isFavorite ? 'text-yellow-500' : 'text-gray-400'}`}
              onClick={toggleFavorite}
            >
              <FaStar size={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
// Componente principal que muestra la lista de productos
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [buscarText, setBuscar] = useState('');
  const [buscarButton, setButton] = useState('Buscar');
  const [filtro, setFiltro] = useState('Nombre');
  const [categoria, setCategoria] = useState('Computadoras');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const { user } = useContext(AuthContext);
  console.log(user)
  const userId = user ? user.id : null;

  const buscarPost = async (e) => {
    e.preventDefault();

    const buscar = {
      busqueda: buscarText,
      nombreBoton: buscarButton,
      filtro: filtro,
      categoria: categoria
    };

    try {
      const response = await axios.post(`${API}`, buscar);

      setProducts(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Se realiza una solicitud GET al API cuando el componente se monta
    axios.get(`${API}?userId=${userId}`)
      .then(response => {
        // Si la respuesta es un arreglo, se establece como estado del componente
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          // Si la respuesta no es un arreglo, se establece un arreglo vacío como estado
          setProducts([]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="flex justify-center font-[Barlow]">
      <div>
        <div className="bg-verdeo rounded-lg p-4 mx-4 sm:mx-28 mb-8">
          <h2 className="text-white text-3xl font-bold text-center">Productos en Venta</h2>
        </div>

        <div className='pb-8'>
            <form className='flex flex-col gap-2' method='POST' onSubmit={buscarPost}>

            <label className='flex gap-2 items-center'>
              Filtrar Por:
              <select
                value={filtro}
                className="rounded-lg"
                onChange={(e) => setFiltro(e.target.value)}
              >
                <option value="Nombre">Nombre</option>
                <option value="Categoria">Categoria</option>
              </select>
            </label>
            
            <div className='flex gap-2'>

            {filtro === 'Categoria' ? (
              <select
                value={categoria}
                className=" w-full rounded-lg"
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="Computadoras">Computadoras</option>
                <option value="Laptops">Laptops</option>
                <option value="Perifericos">Periféricos</option>
                <option value="Accesorios">Accesorios</option>
                <option value="Telefonos">Teléfonos</option>
              </select>
            ) : (
              <input
                type="text"
                value={buscarText}
                className="w-full rounded-lg"
                onChange={(e) => setBuscar(e.target.value)}
              />
            )}
    
              <button
                  type="submit"
                  value={buscarButton}
                  className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-verdeo hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onChange={(e) => setButton(parseFloat(e.target.value))}
                >
                  Buscar
                </button>

            </div>


            </form>
        </div>

        <div className="container mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* Se itera sobre los productos y se muestra una tarjeta de producto por cada uno */}
            {currentProducts.map((product) => (
              <ProductCard
                key={product.serial}
                imagen={product.imagen}
                title={product.nombre}
                description={product.descripcion}
                availableQuantity={product.cantidad}
                price={product.precio}
                serial={product.serial}
              />
            ))}
          </div>

          <div className="flex flex-col gap-2 items-center mt-5">
            <div className='flex gap2-2'> 
              <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 mr-2 text-sm font-medium text-gray-800 bg-gray-200 rounded"
            >
              Anterior
            </button>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === Math.ceil(products.length / productsPerPage)}
              className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded"
            >
              Siguiente
            </button>
            </div>


          <p className="text-gray-600 text-sm">
            Página {currentPage} de {Math.ceil(products.length / productsPerPage)}
          </p>


        </div>


        </div>
      </div>
    </div>
  );
};

export default ProductList;