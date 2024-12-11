import React from 'react';

const NotFound = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col justify-center items-center text-center">
      <div className="bg-white p-12 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
          404
        </h1>
        <p className="text-2xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="mt-6 text-lg text-blue-500 hover:text-blue-700 transition-colors duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
