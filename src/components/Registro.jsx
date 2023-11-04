import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        email,
        password,
      });

      // Si el registro fue exitoso, puedes hacer algo aquí, como redireccionar a una página de éxito o mostrar un mensaje al usuario.

      console.log(response.data);
    } catch (error) {
      setError('Ocurrió un error al registrar el usuario');
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-green-200 p-8 rounded-lg shadow-lg w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold mb-6">Registro</h2>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-medium mb-2" htmlFor="confirmPassword">
            Confirmar Contraseña
          </label>
          <input
            className={`w-full p-2 border rounded-md ${
              passwordsMatch ? 'border-gray-300' : 'border-red-500'
            }`}
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setPasswordsMatch(true);
            }}
            required
          />
          {!passwordsMatch && (
            <p className="text-red-500 text-sm mt-1">
              Las contraseñas no coinciden.
            </p>
          )}
        </div>
        {error && (
          <div className="text-red-500 text-sm mb-4">{error}</div>
        )}
        <button
          className="bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600"
          type="submit"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;