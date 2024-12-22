import React from 'react';
import { Link } from "react-router-dom";

const Submitted = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 p-8 flex items-center justify-center">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6 text-center">
        <h2 className="text-4xl font-semibold text-gray-700">
          🎉 Time par aajana hehe
        </h2>
        <p className="text-gray-500 text-lg">
          Aapka selection is on the way to reach me.
        </p>

        <div className="mt-4">
          <Link
            to="/"
            className="w-full py-3 px-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600"
          >
            Back to Movie Selection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
