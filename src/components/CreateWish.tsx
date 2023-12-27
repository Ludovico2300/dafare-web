import React, { useState } from "react";
import { databaseData } from "../firebase.config";
import Swal from "sweetalert2";
import useDatabaseFirebaseDesires from "../hooks/useDatabaseFirebaseDesires";

export default function CreateWish() {
  const { desires, writeToDatabase } = useDatabaseFirebaseDesires();
  const [title, setTitle] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const resetForm = () => {
    setTitle("");
    setFrom("");
    setCompleted(false);
  };

  const handleAddPost = async () => {
    const randomImage = Math.floor(Math.random() * 14) + 1;

    try {
      if (title && from) {
        // Write to the database
        writeToDatabase(databaseData, "/desires/", desires.length, {
          title: title,
          from: from,
          completed: completed,
          id: desires.length,
        });

        // Show success alert
        Swal.fire({
          title: "Aggiunto!",
          imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
          imageWidth: 200,
          text: "Hai aggiunto un desiderio alla lista!",
        });
      } else {
        Swal.fire({
          title: "C'è stato un errore...",
          imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
          imageWidth: 200,
          text: "Compila titolo/per chi!",
        });
      }
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
            src={process.env.PUBLIC_URL + `/img/2.webp`}
            alt=""
            className="w-1/2 mb-4"
          />

          {/* Title Input */}
          <div className="w-full mb-4">
            <label className="text-xl font-bold mb-2">Titolo</label>
            <input
              className="w-full border border-black p-2 rounded-md"
              placeholder="Inserisci il desiderio..."
              type="text"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* "From" Radio Buttons */}
          <div className="w-full mb-4">
            <label className="text-xl font-bold mb-2">Per chi?</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="from"
                  value="Ludovico"
                  checked={from === "Ludovico"}
                  onChange={() => setFrom("Ludovico")}
                  className="mr-2"
                  required
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
          <ul className="list-disc">
            <li>Per modificare premi lo sticker!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
