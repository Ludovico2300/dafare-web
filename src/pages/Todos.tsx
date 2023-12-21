import React from "react";
import Create from "./Create";
import TodosList from "./TodosList";

export default function Todos() {
  return (
    <div className="">
      <Create />
      <TodosList />
    </div>
  );
}
