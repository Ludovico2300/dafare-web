import React from "react";
import CreateTodo from "../components/CreateTodo";
import TodosList from "../components/TodosList";

export default function Todos() {
  return (
    <div className="bg-[#6F8FAF] pt-2">
      <CreateTodo />
      <TodosList />
    </div>
  );
}
