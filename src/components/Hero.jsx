import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Loader from "./Header/Loader";

const Hero = () => {
    const { user, loggedIn, logout } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const toggleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <section className="bg-white dark:bg-gray-900 font-[Barlow]">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* Contenido principal */}
        <div className="mr-auto place-self-center lg:col-span-7">
          {/* Título */}
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Tienda UVM
          </h1>
          {/* Descripción */}
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Ahora puedes comprar productos electrónicos desde tu universidad
            favorita.
          </p>
          {/* Botones */}

          {!user && (
            <>
              <Link
                to="/Registro   "
                className={`block md:inline-block px-5 mx-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-rojo hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ${
                  location.pathname === "/Login" ? "hidden" : ""
                }`}
                onClick={toggleLoading}
              >
                Registro
              </Link>

              <Link
                to="/Login"
                className={`block md:inline-block px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-rojo hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ${
                  location.pathname === "/Login" ? "hidden" : ""
                }`}
                onClick={toggleLoading}
              >
                Login
              </Link>
            </>
          )}
        </div>
        {/* Imagen */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </div>
      {loading && <Loader />}

    </section>
  );
};

export default Hero;
