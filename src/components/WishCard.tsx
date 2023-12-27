import React from "react";
import { databaseData } from "../firebase.config";
import Swal from "sweetalert2";
import { Wish } from "../type.def";
import useDatabaseFirebaseDesires from "../hooks/useDatabaseFirebaseDesires";

type WishProps = {
  wish: Wish;
};

const WishCard: React.FC<WishProps> = ({ wish }) => {
  const { updateDatabase } = useDatabaseFirebaseDesires();
  const randomImage = Math.floor(Math.random() * 14) + 1;

  const handleToggleCompletion = async () => {
    const randomImage = Math.floor(Math.random() * 14) + 1;

    try {
      updateDatabase(databaseData, "/desires/", wish.id, {
        title: wish.title,
        from: wish.from,
        completed: !wish.completed,
        id: wish.id,
      });
      Swal.fire({
        title: wish.completed ? "Ancora da fare..." : "Completato!!!",
        imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
        imageWidth: 200,
      });
    } catch (error: any) {
      Swal.fire({
        title: "C'è stato un errore...",
        imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
        imageWidth: 200,
        text: error.message,
      });
    }
  };

  const handleEdit = async () => {
    const randomImage = Math.floor(Math.random() * 14) + 1;
    try {
      const inputValue = wish.title;
      Swal.fire({
        title: "Modifica il desiderio!",
        input: "text",
        inputLabel: "Nuova descrizione:",
        inputValue,
        imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
        imageWidth: 200,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "Inserisci il nuovo desiderio!";
          } else {
            updateDatabase(databaseData, "/desires/", wish.id, {
              title: value,
              from: wish.from,
              completed: wish.completed,
              id: wish.id,
            });
          }
        },
      });
    } catch (error: any) {
      Swal.fire({
        title: "C'è stato un errore...",
        imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
        imageWidth: 200,
        text: error.message,
      });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg my-4">
      <div className="px-3 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Edit button with SVG icon */}
            <img
              onClick={handleEdit}
              src={process.env.PUBLIC_URL + `/img/${randomImage}.webp`}
              alt=""
              className="w-1/6"
            />
            {/* Title */}
            <div className="font-bold text-xl pl-1">{wish.title}</div>
          </div>
          {/* Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={wish.completed}
              onChange={handleToggleCompletion}
              className="form-checkbox h-5 w-5 text-indigo-600 mr-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishCard;
