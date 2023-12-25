import React from "react";
import { ToView } from "../type.def";
import { databaseData } from "../firebase.config";
import Swal from "sweetalert2";
import useDatabaseFirebaseViews from "../hooks/useDatabaseFirebaseViews";

type ToviewProps = {
  toview: ToView;
};

const ToviewCard: React.FC<ToviewProps> = ({ toview }) => {
  const { updateDatabase } = useDatabaseFirebaseViews();

  const randomImage = Math.floor(Math.random() * 14) + 1;

  const handleToggleCompletion = async () => {
    const randomImage = Math.floor(Math.random() * 14) + 1;

    try {
      updateDatabase(databaseData, "/toview/", toview.id, {
        title: toview.title,
        link: toview.link,
        started: !toview.started,
        id: toview.id,
      });
      Swal.fire({
        title: toview.started ? "Ancora da vedere..." : "Visto!!!",
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
      const inputValue = toview.title;
      Swal.fire({
        title: "Modifica il titolo!",
        input: "text",
        inputLabel: "Nuovo titolo:",
        inputValue,
        imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
        imageWidth: 200,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "Inserisci la nuova ricomprensa!";
          } else {
            updateDatabase(databaseData, "/toview/", toview.id, {
              title: value,
              link: toview.link,
              started: toview.started,
              id: toview.id,
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
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <img
              onClick={handleEdit}
              src={process.env.PUBLIC_URL + `/img/${randomImage}.webp`}
              alt=""
              className="w-1/6"
            />

            {/* Title */}
            <div className="font-bold text-xl pl-1">
              <a href={toview.link}>
                {toview.title}
                {toview.link && "*"}
              </a>
            </div>
          </div>
          {/* Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={toview.started}
              onChange={handleToggleCompletion}
              className="form-checkbox h-5 w-5 text-indigo-600 mr-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToviewCard;
