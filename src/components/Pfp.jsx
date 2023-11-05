import React, { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import axios from 'axios';

const API = import.meta.env.VITE_USER_URL


const ProfileComponent = () => {
  const [usuario, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(API, { withCredentials: true });
        console.log(response)
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
      <div className="bg-gray-200 rounded-lg p-6 mb-8">
        <h1 className="text-4xl font-bold text-black">{usuario.name}</h1>
      </div>
      <div className="bg-white rounded-lg p-8 w-96">
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-semibold text-1d555b">Nombre</h2>
          <button className="ml-auto flex items-center text-1d555b">
            <FiEdit className="mr-1" /> Editar
          </button>
        </div>
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-semibold text-1d555b">Apellido</h2>
          <button className="ml-auto flex items-center text-1d555b">
            <FiEdit className="mr-1" /> Editar
          </button>
        </div>
        <div className="flex items-center mb-6">
          <h2 className="text-3xl font-semibold text-1d555b">Descripción</h2>
          <button className="ml-auto flex items-center text-1d555b">
            <FiEdit className="mr-1" /> Editar
          </button>
        </div>
        <div className="flex items-center">
          <h2 className="text-3xl font-semibold text-1d555b">Teléfono</h2>
          <button className="ml-auto flex items-center text-1d555b">
            <FiEdit className="mr-1" /> Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;