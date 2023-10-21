import React from 'react';

const Loader = () => {
  // Evitar el desplazamiento de la página mientras se muestra el Loader
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-verdeo">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-100"></div>
    </div>
  );
};

export default Loader;