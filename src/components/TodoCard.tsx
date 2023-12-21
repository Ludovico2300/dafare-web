import React from "react";
import { Todo } from "../type.def";
import useDatabaseFirebase from "../hooks/useDatabaseFirebase";
import { databaseData } from "../firebase.config";

type TodoProps = {
  todo: Todo;
};

const TodoCard: React.FC<TodoProps> = ({ todo }) => {
  const { updateDatabase } = useDatabaseFirebase();

  const handleToggleCompletion = () => {
    updateDatabase(databaseData, "/todos/", todo.id, {
      title: todo.title,
      from: todo.from,
      completed: !todo.completed,
      id: todo.id,
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg my-4">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="font-bold text-xl">{todo.title}</div>
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
