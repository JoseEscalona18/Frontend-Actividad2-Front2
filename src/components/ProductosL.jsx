import React from 'react';

const ProductCard = ({ image, title, description, availableQuantity, price }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="p-8 rounded-t-lg" src={image} alt="product image" />
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        <p className="text-gray-600 dark:text-gray-400">Available: {availableQuantity}</p>
        <div className="flex items-center justify-between mt-2.5">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ver más</a>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: '/docs/images/products/product1.png',
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      availableQuantity: 10,
      price: 99.99
    },
    {
      id: 2,
      image: '/docs/images/products/product2.png',
      title: 'Product 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      availableQuantity: 5,
      price: 49.99
    },
    {
        id: 3,
        image: '/docs/images/products/product2.png',
        title: 'Product 3',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        availableQuantity: 5,
        price: 49.99
      },
      {
        id: 4,
        image: '/docs/images/products/product2.png',
        title: 'Product 3',
        description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
        availableQuantity: 5,
        price: 49.99
      },
    // Agrega más productos aquí
  ];


  return (
    <div>
        <div className="bg-verdeo rounded-lg p-4 mx-28 mb-8">
  <h2 className="text-white text-3xl font-bold text-center">Productos en Venta</h2>
</div>
            <div className="container mx-auto mb-12">
      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            availableQuantity={product.availableQuantity}
            price={product.price}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductList;