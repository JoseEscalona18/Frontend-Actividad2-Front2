import React, { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_USERS_URL;

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Lógica para obtener los datos de los usuarios desde el backend
    axios
      .get(API)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="sm:text-xs md:text-sm text-left text-gray-500 dark:text-gray-400 mb-6 mx-auto">
        <thead className="text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center">
            <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
              Nombre
            </th>
            <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
              Apellido
            </th>
            <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
              Correo
            </th>
            <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
              Contraseña
            </th>
            <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
              Descripción
            </th>
            <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
              Teléfono
            </th>
            <th scope="col" className="sm:p-2 md:px-6 md:py-3 text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">
                {user.nombre}
              </td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">
                {user.apellido}
              </td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">
                {user.correo}
              </td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">
                {user.contraseña}
              </td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">
                {user.descripcion}
              </td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">
                {user.telefono}
              </td>
              <td className="sm:p-2 md:px-6 md:py-3 text-center">
                <div className="flex items-center">
                  <button className="text-white bg-verdeo hover:bg-blue-800 px-4 py-2 rounded-lg mr-2">
                    Editar
                  </button>
                  <button className="text-white bg-red-700 hover:bg-red-800 px-4 py-2 rounded-lg">
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;