import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Movie = () => {
  const [name, setName] = useState("");
  const [newMovie, setNewMovie] = useState("");
  const [timeWhen, setTimeWhen] = useState("");
  const [explain, setExplain] = useState("");
  const [error, setError] = useState("");

  // const serviceId = "service_4l29dbr";
  // const templateId = "template_z7h4igi";
  // const publicKey = "n4ujIUIPuO0ayrSQh";

  const ListMovies = ["Amaran", "Sanam teri Kasam", "Fifty shades of Grey"];

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!name && !newMovie) {
      setError("Select a movie.");
      return;
    }

    if (!timeWhen) {
      setError("Select the time");
      return;
    }

    if (timeWhen === "Not Free Today") {
      alert("Selected option not valid!");
      return;
    }

    if (timeWhen === "Not Sure") {
      alert("STFU and select properly! 😤");
      return;
    }

    setError("");

    const dateInfo = {
      movieSelected: name || newMovie,
      timeWhen,
      explain: timeWhen === "Let’s See" ? explain : null,
    };

    localStorage.setItem("movieInfo", JSON.stringify(dateInfo));

    try {
      const templateParams = {
        movie: dateInfo.movieSelected,
        time: dateInfo.timeWhen,
        thoughts: dateInfo.explain,
      };

      const result = await emailjs.send(
        import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY,
      );

      console.log("Email sent successfully", result);
    } catch (error) {
      console.error("Error sending email", error);
    }

    navigate("/Submitted");
  };

  const handleSelect = (e) => {
    setName(e.target.value);
    setNewMovie("");
  };

  const handleInput = (e) => {
    setNewMovie(e.target.value);
    setName("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 p-8">
      <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-700">Kya dekhe? 🎬</h2>
        <select
          onChange={handleSelect}
          value={name}
          className="w-full p-3 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="">Select a Movie</option>
          {ListMovies.map((name, index) => (
            <option value={name} key={index}>
              {name}
            </option>
          ))}
        </select>
        <input
          type="text"
          onChange={handleInput}
          value={newMovie}
          placeholder="Add if u hav one in ur mind"
          className="w-full p-3 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-4"
        />
        <select
          onChange={(e) => setTimeWhen(e.target.value)}
          value={timeWhen}
          className="w-full p-3 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 mt-4"
        >
          <option value="">Select a Time</option>
          <option value="Today">Today</option>
          <option value="Not Free Today">Not Free Today</option>
          <option value="Let’s See">Let’s See</option>
          <option value="Not Sure">Not Sure</option>
        </select>

        {timeWhen === "Let’s See" && (
          <input
            type="text"
            placeholder="Write your thoughts..."
            value={explain}
            onChange={(e) => setExplain(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg text-gray-700 mt-4"
          />
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 mt-6"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Movie;
