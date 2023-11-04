import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
<footer class="p-4 bg-verdeo md:p-8 lg:p-10 dark:bg-gray-800 font-[Barlow]">
  <div class="mx-auto max-w-screen-xl text-center">
      {/* Logo */}
      <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
        <img className=" animate-bounce h-32 inline mr-4"src="./uvm.png" alt="" />
      </a>
      {/* Descripción */}
      <p className="my-6 text-white dark:text-gray-400">Tu tienda favorita en la venta de productos electrónicos</p>
      {/* Enlaces */}
      <ul class="flex flex-wrap justify-center items-center mb-6 text-white" >
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 hover:text-rojo ">Inicio</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 hover:text-rojo">Inventario</a>
          </li>
          <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 hover:text-rojo ">Contacto</a>
          </li>

      </ul>
      {/* Derechos de autor */}
      <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023-2023 <a href="#" class="hover:underline">UVM™</a>. All Rights Reserved.</span>
  </div>
</footer>
    
    )
  }
}
