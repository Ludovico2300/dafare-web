import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/create"}>Create</Link>
        <Link to={"/spots"}>Spots</Link>
      </header>
    </div>
  );
}
