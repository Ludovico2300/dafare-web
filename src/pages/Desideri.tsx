import React from "react";
import CreateWish from "../components/CreateWish";
import DesiresList from "../components/DesiresList";

export default function Desideri() {
  return (
    <div className="bg-[#6F8FAF] pt-2">
      <CreateWish />
      <DesiresList />
    </div>
  );
}
