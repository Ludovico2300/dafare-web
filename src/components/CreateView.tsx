import React, { useState } from "react";
import { databaseData } from "../firebase.config";
import Swal from "sweetalert2";
import useDatabaseFirebaseViews from "../hooks/useDatabaseFirebaseViews";

export default function CreateView() {
  const { toview, writeToDatabase } = useDatabaseFirebaseViews();
  const [title, setTitle] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [started, setStarted] = useState<boolean>(false);

  const resetForm = () => {
    setTitle("");
    setLink("");
    setStarted(false);
  };

  const handleAddPost = async () => {
    const randomImage = Math.floor(Math.random() * 14) + 1;

    try {
      if (title) {
        // Write to the database
        writeToDatabase(databaseData, "/toview/", toview.length, {
          title: title,
          link: link,
          started: started,
          id: toview.length,
        });

        // Show success alert
        Swal.fire({
          title: "Aggiunto!",
          imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
          imageWidth: 200,
          text: "Vediamolo assieme!",
        });
        resetForm();
      } else {
        // Show error alert
        Swal.fire({
          title: "C'è stato un errore...",
          imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
          imageWidth: 200,
          text: "Inserisci il titolo!",
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
      <div className="bg-white p-8 rounded-lg shadow-md w-4/5">
        <div className="flex flex-col items-center space-y-6">
          {/* Image Section */}
          <img
            src={process.env.PUBLIC_URL + `/img/1.webp`}
            alt=""
            className="w-1/2 mb-4"
          />

          {/* Title Input */}
          <div className="w-full mb-4">
            <label className="text-xl font-bold mb-2">Titolo</label>
            <input
              className="w-full border border-black p-2 rounded-md"
              placeholder="Inserisci il titolo..."
              type="text"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* "From" Radio Buttons */}
          <div className="w-full mb-4">
            <label className="text-xl font-bold mb-2">Link</label>
            <div className="flex space-x-4">
              <input
                className="w-full border border-black p-2 rounded-md"
                placeholder="Inserisci il link..."
                type="text"
                name="link"
                required
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </div>
          </div>

          {/* "Completed" Checkbox */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="started"
                checked={started}
                onChange={() => setStarted(!started)}
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
            <li>
              * indica che è presente un link, premi sul titolo per aprirlo!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
