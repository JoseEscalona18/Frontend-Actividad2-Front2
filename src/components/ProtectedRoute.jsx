import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const ProtectedRoute = ({ element, requiredRole }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Si el usuario no está autenticado, redirigirlo a la página de inicio de sesión
    return <Navigate to="/Login" />;
  }

  if (requiredRole && user.rol !== requiredRole) {
    // Si el usuario no tiene el rol requerido, redirigirlo a una página de acceso no autorizado
    return <Navigate to="/Unauthorized" />;
  }

  return <Route element={element} />;
};

export default ProtectedRoute;