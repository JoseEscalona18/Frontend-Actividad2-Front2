import React from 'react';

const Menu = (props) => {
  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
        onClick={props.toggleTablaVisibility} // Llama a la función showComponents al hacer clic

      >
        Inicio
      </a>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-rojo focus:outline-none focus:text-white focus:bg-rojo"
        onClick={props.toggleHeroVisibility}
      >
        Inventario
      </a>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-rojo focus:outline-none focus:text-white focus:bg-rojo"
      >
        Crear
      </a>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-rojo focus:outline-none focus:text-white focus:bg-rojo"
      >
        Contacto
      </a>
    </div>
  );
};

export default Menu;