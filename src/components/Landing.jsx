import React from 'react'
import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  const nextPage = () => {
    navigate("/Movie");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200">
      <h1 className="text-4xl font-bold text-pink-600">💖 Movie night 🎥🍿 with me ? 💖</h1>
      <p className="mt-4 text-lg text-gray-600">(Chup chap han bol , busy visy bola tho sahi nahi hoga..) </p>
      <button
        onClick={nextPage}
        className="mt-6 px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition duration-200"
      >
        Choose Movie
      </button>
    </div>
  );
}

export default Landing