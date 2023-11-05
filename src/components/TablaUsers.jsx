import React, { useEffect, useState } from "react";
import axios from "axios";

const API = import.meta.env.VITE_USERS_URL;
const APIEDIT = import.meta.env.VITE_EDIT_URL;


const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [datosActualizados, setDatosActualizados] = useState({});

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

  const editarUsuario = (usuario) => {
    setUsuarioSeleccionado(usuario);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDatosActualizados({ ...datosActualizados, [name]: value });
  };

  const actualizarUsuario = (event) => {
    event.preventDefault(); // Evita que la página se reinicie por defecto
  
    axios
      .put(APIEDIT, {
        correo: usuarioSeleccionado.correo,
        datosActualizados,
      })
      .then((response) => {
        // Actualiza los datos del usuario en la tabla
        const usuariosActualizados = users.map((usuario) => {
          if (usuario.correo === usuarioSeleccionado.correo) {
            return { ...usuario, ...datosActualizados };
          }
          return usuario;
        });
        setUsers(usuariosActualizados);
  
        // Reinicia los estados
        setUsuarioSeleccionado(null);
        setDatosActualizados({});
  
        console.log(response.data.mensaje);
      })
      .catch((error) => {
        console.error("Error al actualizar el usuario:", error);
      });
  };

  return (
    <div className="overflow-x-auto font-[Barlow]">
      {users.length === 0 ? (
        <p>No hay usuarios disponibles.</p>
      ) : (
        <table className="sm:text-xs md:text-sm text-left text-gray-500 dark:text-gray-400 mb-6 mx-auto">
          <thead className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
            {Array.isArray(users) ? (
              users.map((usuario) => (
                <tr key={usuario.id}>
                  <td className="sm:p-2 md:px-6 md:py-3 text-center">
                    {usuario.nombre}
                  </td>
                  <td className="sm:p-2 md:px-6 md:py-3 text-center">
                    {usuario.apellido}
                  </td>
                  <td className="sm:p-2 md:px-6 md:py-3 text-center">
                    {usuario.correo}
                  </td>
                  <td className="sm:p-2 md:px-6 md:py-3 text-center">
                    {usuario.contraseña}
                  </td>
                  <td className="sm:p-2 md:px-6 md:py-3 text-center">
                    {usuario.descripcion}
                  </td>
                  <td className="sm:p-2 md:px-6 md:py-3 text-center">
                    {usuario.telefono}
                  </td>
                  <td className="sm:p-2 md:px-6 md:py-3 text-center">
                    <div className="flex items-center">
                      <button
                        className="text-white bg-verdeo hover:bg-blue-800 px-4 py-2 rounded-lg mr-2"
                        onClick={() => editarUsuario(usuario)}
                      >
                        Editar
                      </button>
                    {/* Otros botones de acción */}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">Cargando usuarios...</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      {usuarioSeleccionado && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Editar usuario</h2>
          <form>
            <div className="flex flex-col mt-2">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={datosActualizados.nombre || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={datosActualizados.apellido || ""}
                onChange={handleInputChange}
              />
            </div>
            {/* Otros campos del formulario */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={actualizarUsuario}
            >
              Guardar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserTable;