import React from "react";
import { Todo } from "../type.def";
import useDatabaseFirebase from "../hooks/useDatabaseFirebase";
import { databaseData } from "../firebase.config";
import Swal from "sweetalert2";

type TodoProps = {
  todo: Todo;
};

const TodoCard: React.FC<TodoProps> = ({ todo }) => {
  const { updateDatabase } = useDatabaseFirebase();

  const handleToggleCompletion = async () => {
    const randomImage = Math.floor(Math.random() * 14) + 1;

    try {
      updateDatabase(databaseData, "/todos/", todo.id, {
        title: todo.title,
        from: todo.from,
        completed: !todo.completed,
        id: todo.id,
      });
      Swal.fire({
        title: todo.completed ? "Ancora da fare..." : "Completato!!!",
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
      const inputValue = todo.title;
      Swal.fire({
        title: "Modifica la ricompensa!",
        input: "text",
        inputLabel: "Nuova descrizione:",
        inputValue,
        imageUrl: process.env.PUBLIC_URL + `/img/${randomImage}.webp`,
        imageWidth: 200,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) {
            return "Inserisci la nuova ricomprensa!";
          } else {
            updateDatabase(databaseData, "/todos/", todo.id, {
              title: value,
              from: todo.from,
              completed: todo.completed,
              id: todo.id,
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
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            {/* Edit button with SVG icon */}
            <button onClick={handleEdit} className="mr-2">
              {/* Edit SVG icon */}
              <svg
                fill="none"
                height="24"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
            {/* Title */}
            <div className="font-bold text-xl">{todo.title}</div>
          </div>
          {/* Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggleCompletion}
              className="form-checkbox h-5 w-5 text-indigo-600 mr-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
