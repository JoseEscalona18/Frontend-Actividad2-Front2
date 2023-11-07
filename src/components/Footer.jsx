import React, { Component } from "react";

import { Link } from "react-router-dom";

const isTokenPresent = document.cookie.includes('token=');

export default class Footer extends Component {
  render() {
    return (
      <footer className="p-4 bg-verdeo md:p-8 lg:p-10 dark:bg-gray-800 font-[Barlow]">
        <div className="mx-auto max-w-screen-xl text-center font-bold">
          {/* Logo */}
          <a
            href="#"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="h-40 inline " src="./uvm.png" alt="" />
          </a>
          {/* Descripción */}
          <p className="my-6 text-white dark:text-gray-400">
            Tu tienda favorita en la venta de productos electrónicos
          </p>
          {/* Enlaces */}
          <ul className="flex flex-wrap justify-center items-center mb-6 text-white space-x-80">
            {" "}
            {/* Utilizar la clase space-x-6 */}
            <li>
              <Link to="/" className="hover:underline hover:text-rojo">
                Inicio
              </Link>{" "}
            </li>
            <li>
              <Link
                to="/Inventario"
                className="hover:underline hover:text-rojo"
              >
                Inventario
              </Link>
            </li>
            <li>
              <Link to="/Login" className="hover:underline hover:text-rojo">
                Login
              </Link>
            </li>
          </ul>
          {/* Derechos de autor */}
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="#" className="hover:underline">
              UVM™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    );
  }
}
