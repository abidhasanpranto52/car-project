import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/err/404-error-not-found-page-lost.png'
import "animate.css";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-center animate__animated  animate__zoomIn">
      <div className=''>
      <img src={error} className='h-full w-60 md:w-auto' />
      </div>
      <p className="text-gray-600 text-lg mb-4">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorPage;
