import React from "react";
import TodoCard from "./TodoCard";
import useDatabaseFirebase from "../hooks/useDatabaseFirebase";
import { Todo } from "../type.def";

const TodosList: React.FC = () => {
  const { todos } = useDatabaseFirebase();

  const renderTodoCards = (filteredTodos: Todo[]) => {
    return todos ? (
      filteredTodos.map((todo: Todo) => <TodoCard key={todo.id} todo={todo} />)
    ) : (
      <div className="text-gray-500">Non c'è nulla...</div>
    );
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-transparent flex flex-col items-center">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Da Fare</h1>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Da Ludo Orcoide😠</h3>
          {renderTodoCards(
            todos?.filter(
              (todo: Todo) => !todo.completed && todo.from === "Ludovico"
            )
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Da Nicole Bellissima Mia Prencipesa😾
          </h3>
          {renderTodoCards(
            todos?.filter(
              (todo: Todo) => !todo.completed && todo.from === "Nicole"
            )
          )}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">Fatti</h1>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Da Ludo Orcoide😠</h3>
          {renderTodoCards(
            todos?.filter(
              (todo: Todo) => todo.completed && todo.from === "Ludovico"
            )
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">
            Da Nicole Bellissima Mia Prencipesa😾
          </h3>
          {renderTodoCards(
            todos?.filter(
              (todo: Todo) => todo.completed && todo.from === "Nicole"
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TodosList;
