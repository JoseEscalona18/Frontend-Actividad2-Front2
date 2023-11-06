import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {


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
          to="/Crear"
          className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
          onClick={props.toggleTablaVisibility}
        >
          Inicio
        </Link>
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-white hover:bg-rojo focus:outline-none focus:text-white focus:bg-rojo"
        onClick={props.toggleHeroVisibility} // Llama a la función de toggleHeroVisibility
      >
        Inventario
      </a>

      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
        onClick={props.toggleLVisibility} // Llama a la función de toggleTablaVisibility

      >
        Login
      </a>

      
      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
        onClick={props.toggleRVisibility} // Llama a la función de toggleTablaVisibility

      >
        Registro
      </a>

      <a
        href="#"
        className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
        onClick={props.toggleRVisibility} // Llama a la función de toggleTablaVisibility

      >
        Logout
      </a>
    </div>
  );
};

export default Menu;