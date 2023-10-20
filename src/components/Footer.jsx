import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
<footer class="p-4 bg-verdeo md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
        <img className=" animate-bounce h-32 inline mr-4"src="./uvm.png" alt="" />
      </a>
      <p class="my-6 text-white dark:text-gray-400">Tu tienda favorita en el la venta de productos electrónicos</p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-white" >
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 hover:text-rojo ">About</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 hover:text-rojo">Premium</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 hover:text-rojo ">Campaigns</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 hover:text-rojo">Blog</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 hover:text-rojo">Affiliate Program</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 hover:text-rojo">FAQs</a>
          </li>
          <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
      </ul>
      <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023-2023 <a href="#" class="hover:underline">UVM™</a>. All Rights Reserved.</span>
  </div>
</footer>
    
    )
  }
}
