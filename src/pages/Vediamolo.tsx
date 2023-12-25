import React from "react";
import CreateView from "../components/CreateView";
import ToViewList from "../components/ToViewList";

export default function Vediamolo() {
  return (
    <div className="bg-[#6F8FAF] pt-2">
      <CreateView />
      <ToViewList />
    </div>
  );
}
