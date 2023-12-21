import React from "react";
import Create from "./Create";
import TodosList from "./TodosList";

export default function Todos() {
  return (
    <div className="bg-[#6F8FAF] pt-2">
      <Create />
      <TodosList />
    </div>
  );
}
