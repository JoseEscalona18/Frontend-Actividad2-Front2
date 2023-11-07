import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext(); // Exporta el contexto

const API = import.meta.env.VITE_DECODE_URL;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Crear una función que haga la petición al back-end
  const getDecodedData = async () => {
    // Configurar las opciones de la petición
    const options = {
      // Especificar el método GET
      method: "GET",
      // Especificar la ruta del back-end
      url: API,
      // Enviar la cookie con el token
      withCredentials: true,
    };

    // Hacer la petición usando axios
    try {
      // Esperar la respuesta del back-end
      const response = await axios(options);
      // Obtener los datos decodificados del back-end
      const data = response.data.data;
      // Hacer algo con los datos, por ejemplo mostrarlos en la consola
      console.log(data);
      setUser(data);
    } catch (error) {
      // Manejar el posible error, por ejemplo mostrarlo en la consola
      console.error(error);
    }
  };

  
  useEffect(() => {
    // Llamar a la función getDecodedData
    getDecodedData();
  }, []); // El array vacío indica que solo se ejecuta una vez al montar el componente

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
