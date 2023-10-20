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
          <Menu toggleHeroVisibility={toggleHeroVisibility} />
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
      <div className="md:hidden">{showMobileMenu && <Menu />}</div>
      {loading && <Loader />}
    </nav>
  );
}

export default HeaderPrueba;