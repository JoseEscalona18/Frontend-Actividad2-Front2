import React, { useEffect, useState, useContext } from 'react';
import { FiEdit } from 'react-icons/fi';
import axios from 'axios';
import { AuthContext } from '../context/AuthProvider'
const API = import.meta.env.VITE_USER_URL


const ProfileComponent = () => {
  const [usuario, setUser] = useState(null);


  const [updatedUser, setUpdatedUser] = useState({
    nombre: '',
    apellido: '',
    descripcion: '',
    telefono: ''
  });


  const handleInputChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
    });
  };


  const updateUser = async () => {

    let { user } = useContext(AuthContext);
    const idUser = user.id 

    console.log(user)
    try {
      await axios.put(`${API}/${idUser}`, updatedUser, { withCredentials: true });
      // Realizar acciones adicionales después de la actualización exitosa
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  };


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(API, { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!usuario) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-verde to-rojo rounded-lg">
      <div className="bg-white rounded-lg p-8 w-96">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-semibold text-1d555b">Nombre</h2>
          <input
            type="text"
            name="nombre"
            value={updatedUser.nombre}
            onChange={handleInputChange}
            className="ml-4 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-semibold text-1d555b">Apellido</h2>
          <input
            type="text"
            name="apellido"
            value={updatedUser.apellido}
            onChange={handleInputChange}
            className="ml-4 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-semibold text-1d555b">Dirección</h2>
          <input
            type="text"
            name="direccion"
            value={updatedUser.direccion}
            onChange={handleInputChange}
            className="ml-4 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-semibold text-1d555b">Teléfono</h2>
          <input
            type="text"
            name="telefono"
            value={updatedUser.telefono}
            onChange={handleInputChange}
            className="ml-4 p-2 border border-gray-300 rounded-lg"
          />
        </div>


        <div className="flex justify-center">
          <button
            className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-lg"
            onClick={updateUser}
          >
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;