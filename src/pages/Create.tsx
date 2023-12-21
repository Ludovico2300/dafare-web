import React, { useState } from "react";
import { databaseData } from "../firebase.config";
import useDatabaseFirebase from "../hooks/useDatabaseFirebase";

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
    try {
      writeToDatabase(databaseData, "/todos/", todos.length, {
        title: title,
        from: from,
        completed: completed,
        id: todos.length,
      });
      alert("Success");
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <div className="bg-white h-1/2 w-3/5 mx-auto p-2 flex flex-col items-center justify-around border-4 border-black rounded-2xl">
      <div className="flex flex-col items-center justify-between space-y-4 w-3/5 mx-auto">
        <div className="flex items-center justify-around w-full">
          {/* FORM SECTION */}
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-bold mb-2">Titolo</h1>
            <input
              className="border border-black p-2 rounded-md"
              placeholder="Title"
              type="text"
              name="title"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            {/* "From" field */}
            <h1 className="text-xl font-bold mt-2">Da chi?</h1>
            <div className="flex space-x-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="from"
                  value="Ludovico"
                  checked={from === "Ludovico"}
                  onChange={() => setFrom("Ludovico")}
                  className="mr-2"
                />
                Ludovico
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
                Nicole
              </label>
              {/* Add other options as needed */}
            </div>

            {/* "Completed" field */}
            <div className="mt-2">
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
          </div>
        </div>

        {/* BUTTON DIV SECTION */}
        <div className="flex items-center justify-around w-full">
          <button
            className="bg-gray-300 text-black py-2 px-4 rounded-md cursor-pointer"
            onClick={resetForm}
          >
            Reset
          </button>

          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md cursor-pointer"
            onClick={handleAddPost}
          >
            Aggiungi
          </button>
        </div>
      </div>
    </div>
  );
}
