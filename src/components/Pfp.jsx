import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_USER_URL;

const PFP = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const obtenerDatosUsuario = async () => {
      try {
        const response = await axios.get(API, { withCredentials: true });
        console.log(response);
        setUserData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    obtenerDatosUsuario();
  }, []);

  if (!userData) {
    return <div>Cargando...</div>;
  }

  // Aquí puedes mostrar los datos del usuario, por ejemplo:
  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <p>Nombre: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* Otros datos del usuario */}
    </div>
  );
};

export default PFP;