# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Objetivo: Desarrollar una aplicación web utilizando React con Vite como bundler, que se conecte a un backend para realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre el inventario de una tienda. La aplicación deberá funcionar como un SPA (Single Page Application).

Requerimientos:

- [1] Página de inicio: Al cargar la aplicación, se mostrará una lista productos disponibles en el inventario de la tienda. Cada producto deberá mostrar su nombre, descripción, precio, cantidad disponible e imagen representativa.

- [2] Crear Producto: Se debe proporcionar un formulario para crear una nuevo producto. El formulario deberá contener campos para ingresar el nombre, descripción, precio, cantidad inicial, imagen y categoría. Al enviar el formulario, se deberá guardar en el backend y mostrarla en la lista.


- [3] Actualizar: Cada producto en la lista deberá tener la opción de ser editada. Al hacer clic en el producto, se mostrará un formulario similar al de creación, pero con los campos prellenados con la información del producto seleccionada. Se deberá permitir modificar los campos de nombre, descripción, precio, cantidad, imagen, categoría e ingredientes relacionados. Al enviar el formulario de actualización, se deberán guardar los cambios en el backend y reflejarlos en la lista.


- [3] Eliminar: Cada producto en la lista deberá tener la opción de ser eliminada. Al hacer clic en la opción de eliminación, se mostrará una confirmación y, en caso de aceptarla, se eliminará tanto del backend como de la lista.


- [4] Búsqueda: Se deberá proporcionar un campo de búsqueda en la página de inicio, donde los usuarios puedan buscar el producto por su nombre, descripción o categoría. Al realizar la búsqueda, se deberán mostrar solo las que coincidan con los términos ingresados.


- [5] Listado: Se deberá proporcionar una sección en la página de inicio donde se muestre un listado disponibles en la tienda. Cada producto deberá mostrar su nombre, cantidad disponible y una descripción breve


# OJO:

Utilizar una base de datos para almacenar y recuperar los datos de las notas (por ejemplo, MongoDB).

El backend debe esta desarrollado en Nodejs


# [6] Recomendaciones:

- Utiliza componentes de React para modularizar y reutilizar el código

- Crea un repositorio distinto para el backend

- Utiliza algún método de comunicación con el backend, como fetch o axios, para realizar las operaciones CRUD.

- Organiza tu código siguiendo buenas prácticas de estructura y nomenclatura.

- Diseña una interfaz de usuario atractiva y temática, utilizando elementos visuales relacionados con ventas y con producto.

- Considera agregar funcionalidades adicionales, como la posibilidad de filtrar los productos por categoría o ver detalles completos de un producto al hacer clic en ella.

- Considerar usar librerias UI orientadas a componente de react. Sugerencias:

    * React-Bootstrap
    * MDB React
    * React-Strap
    * Chakra UI
    * Material UI

# A ENTREGAR: 

- Figma con todo el diseño UI UX de la App.
- Vídeo con cámara Explicando el código y donde se utilizan los hooks y para que se usan, los problemas encontrados funcionamiento de la actividad e inicio. MAX: 15min 
- Código en github con todos los commits en ambos repos. Evitar subir el repositorio con commits dummy
- El Código debe estar documentado, es decir comentada las lineas mas importantes para que cualquier desarrollador entienda los procesos. 
- El repositorio debe tener un README  donde explique como ejecutar el proyecto paso a paso, sea el frontend o el backend. 
- Se va evaluar: UI UX, reutilización de componentes, optimización de código, comentaros dentro del código, readme repositorio. 