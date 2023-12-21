import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/todos"}>"me lo segno"</Link>
      </header>
    </div>
  );
}
