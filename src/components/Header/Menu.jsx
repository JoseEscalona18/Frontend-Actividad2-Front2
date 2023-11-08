import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Menu = (props) => {
  const location = useLocation();
  const isTokenPresent = document.cookie.includes("token=");
  const { user, loggedIn, logout } = useContext(AuthContext);

  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700 font-[Barlow]">
      <Link
        to="/"
        className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
        onClick={props.toggleLVisibility}
      >
        Inicio
      </Link>

      {user?.rol === "admin" && (
        <>
          <Link
            to="/Inventario"
            className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
            onClick={props.toggleLVisibility}
          >
            Inventario
          </Link>

          <Link
            to="/Admin"
            className={`block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo ${
              location.pathname === "/Registro" ? "hidden" : ""
            }`}
            onClick={props.toggleLVisibility}
          >
            Admin
          </Link>
        </>
      )}

      {!isTokenPresent && (
        <>
          <Link
            to="/Login"
            className={`block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo ${
              location.pathname === "/Login" ? "hidden" : ""
            }`}
            onClick={props.toggleLVisibility}
          >
            Login
          </Link>

          <Link
            to="/Registro"
            className={`block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo ${
              location.pathname === "/Registro" ? "hidden" : ""
            }`}
            onClick={props.toggleLVisibility}
          >
            Registro
          </Link>
        </>
      )}

      {isTokenPresent && loggedIn && (
        <Link
          to="/"
          className="block md:inline-block px-3 py-2 rounded-md text-white bg-verdeo focus:outline-none focus:text-white focus:bg-verdeo"
          onClick={logout} // Utilizar la función logout para realizar el logout
        >
          Logout
        </Link>
      )}
      {isTokenPresent && loggedIn && (
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
