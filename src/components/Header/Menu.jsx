import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = (props) => {
  const location = useLocation();
  const isTokenPresent = document.cookie.includes('token=');

  const handleLogout = () => {
    // Eliminar la cookie (si estás utilizando cookies para almacenar el token de autenticación)
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Limpiar el almacenamiento local (localStorage o sessionStorage)
    localStorage.removeItem("token");
    // O
    // sessionStorage.removeItem("token");

    // Realizar cualquier otra limpieza o redireccionamiento necesario después de cerrar sesión
  };

  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700 font-[Barlow]">
      <Link
        to="/"
        className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
        onClick={props.toggleLVisibility}
      >
        Inicio
      </Link>

      {isTokenPresent && (
        <Link
        to="/Inventario"
        className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
        onClick={props.toggleLVisibility}
      >
        Inventario
      </Link>

      )}

      
      {!isTokenPresent && (
        <>
          <Link
            to="/Login"
            className={`block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo ${
              location.pathname === '/Login' ? 'hidden' : ''
            }`}
            onClick={props.toggleLVisibility}
          >
            Login
          </Link>

          <Link
            to="/Registro"
            className={`block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo ${
              location.pathname === '/Registro' ? 'hidden' : ''
            }`}
            onClick={props.toggleLVisibility}
          >
            Registro
          </Link>
        </>
      )}

      {isTokenPresent && (
        <Link
          to="/Login"
          className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
          onClick={handleLogout}
        >
          Logout
        </Link>
      )}
      {isTokenPresent && (
         <Link
         to="/Pfp"
         className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
         onClick={props.toggleLVisibility}
       >
         Perfil
       </Link>
      )}

     
    </div>
  );
};

export default Menu;