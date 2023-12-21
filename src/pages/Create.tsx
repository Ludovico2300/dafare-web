import React, { useState } from "react";
import { databaseData } from "../firebase.config";
import useDatabaseFirebase from "../hooks/useDatabaseFirebase";
import Swal from "sweetalert2";

export default function Create() {
  const { todos, writeToDatabase } = useDatabaseFirebase();
  const [title, setTitle] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const resetForm = () => {
    setTitle("");
    setFrom("");
    setCompleted(false);
  };

  const handleAddPost = async () => {
    const randomImage = Math.floor(Math.random() * 15) + 1;

    try {
      // Write to the database
      writeToDatabase(databaseData, "/todos/", todos.length, {
        title: title,
        from: from,
        completed: completed,
        id: todos.length,
      });

      // Show success alert
      Swal.fire({
        title: "Aggiunto!",
        imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
        imageWidth: 200,
        text: "Hai aggiunto la ricompensa alla lista!",
      });
    } catch (error: any) {
      // Show error alert
      Swal.fire({
        title: "C'è stato un errore...",
        imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
        imageWidth: 200,
        text: error.message,
      });
    }
  };

  return (
    <div className="container mx-auto mt-10 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-2/3">
        <div className="flex flex-col items-center space-y-6">
          {/* Image Section */}
          <img
            src={process.env.PUBLIC_URL + `/img/12.webp`}
            alt=""
            className="w-1/2 mb-4"
          />

          {/* Title Input */}
          <div className="w-full mb-4">
            <label className="text-xl font-bold mb-2">Titolo</label>
            <input
              className="w-full border border-black p-2 rounded-md"
              placeholder="Inserisci la ricompensa..."
              type="text"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* "From" Radio Buttons */}
          <div className="w-full mb-4">
            <label className="text-xl font-bold mb-2">Da chi?</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="from"
                  value="Ludovico"
                  checked={from === "Ludovico"}
                  onChange={() => setFrom("Ludovico")}
                  className="mr-2"
                />
                Ludovico😠
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="from"
                  value="Nicole"
                  checked={from === "Nicole"}
                  onChange={() => setFrom("Nicole")}
                  className="mr-2"
                />
                Nicole😾
              </label>
            </div>
          </div>

          {/* "Completed" Checkbox */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="completed"
                checked={completed}
                onChange={() => setCompleted(!completed)}
                className="mr-2"
              />
              Completato
            </label>
          </div>

          {/* Button Section */}
          <div className="flex items-center space-x-4">
            {/* Reset Button */}
            <button
              className="bg-gray-300 text-black py-2 px-4 rounded-md cursor-pointer"
              onClick={resetForm}
            >
              Reset
            </button>

            {/* Add Button */}
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer"
              onClick={handleAddPost}
            >
              Aggiungi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
