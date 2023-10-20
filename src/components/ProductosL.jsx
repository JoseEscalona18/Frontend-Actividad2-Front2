import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:4000';

const ProductCard = ({ imagen, title, description, availableQuantity, price }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 font-[Barlow]">
      <img className="p-8 rounded-t-lg" src={imagen} alt="product image" />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <p className="text-gray-600 dark:text-gray-400">Available: {availableQuantity}</p>
        <div className="flex flex-col sm:flex-row items-center justify-between mt-2.5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
          <a href="#" className="mt-2 sm:mt-0 text-white bg-verdeo hover:bg-rojo focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ver más
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(API)
      .then(response => {
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          setProducts([]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="flex justify-center font-[Barlow]">
      <div>
        <div className="bg-verdeo rounded-lg p-4 mx-4 sm:mx-28 mb-8">
          <h2 className="text-white text-3xl font-bold text-center">Productos en Venta</h2>
        </div>
        <div className="container mx-auto mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.serial}
                imagen={product.imagen}
                title={product.nombre}
                description={product.descripcion}
                availableQuantity={product.cantidad}
                price={product.precio}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;