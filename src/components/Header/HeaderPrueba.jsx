// HeaderPrueba.jsx
import React, { useState } from 'react';
import Menu from './Menu';
import Loader from './Loader';

function HeaderPrueba(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleHeroVisibility = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      props.toggleVisibility();
    }, 3000);
  };

  const toggleTablaVisibility = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      props.toggleVisibility2();
    }, 3000);
  };

  const toggleLVisibility = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      props.toggleLVisibility();
    }, 3000);
  };

  const toggleRVisibility = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      props.toggleRVisibility();
    }, 3000);
  };

  // El componente HeaderPrueba representa la barra de navegación en la parte superior de la página.

  // El estado showMobileMenu se utiliza para mostrar o ocultar el menú en dispositivos móviles cuando se hace clic en el botón de menú.

  // La función toggleHeroVisibility se activa cuando se hace clic en un elemento del menú y se encarga de mostrar un componente adicional (no mostrado en el código proporcionado). También activa el Loader durante 3 segundos para simular una carga.

  // La función toggleTablaVisibility se activa cuando se hace clic en otro elemento del menú y se encarga de mostrar otro componente (no mostrado en el código proporcionado). También activa el Loader durante 3 segundos para simular una carga.


  return (
    <nav className="bg-verde">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600 font-[Barlow]">
        <div className="flex-shrink-0 font-bold tracking-wider">
          <img
            className="h-12 inline mr-4 hover:cursor-pointer animate-pulse"
            src="./uvm.png"
            alt=""
          />
          Tienda UVM
        </div>
        <div className="hidden md:block">
          <Menu toggleHeroVisibility={toggleHeroVisibility} toggleTablaVisibility={toggleTablaVisibility} toggleLVisibility={toggleLVisibility} toggleRVisibility={toggleRVisibility} />
          

        </div>
        <button
          type="button"
          className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">{showMobileMenu && <Menu toggleHeroVisibility={toggleHeroVisibility} toggleTablaVisibility={toggleTablaVisibility} toggleLVisibility={toggleLVisibility} toggleRVisibility={toggleRVisibility} />}</div>
      {/* El bloque de código anterior representa el menú desplegable para dispositivos móviles. Se muestra solo cuando showMobileMenu es verdadero. */}
      {loading && <Loader />}
      {/* El componente Loader se muestra si loading es verdadero, lo que indica que se está realizando una carga. */}

    </nav>
  );
}

export default HeaderPrueba;