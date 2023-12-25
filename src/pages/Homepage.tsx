import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/todos"}>
          <img
            src={process.env.PUBLIC_URL + `/img/12.webp`}
            alt=""
            width={200}
          />
        </Link>
        <Link to={"/vediamolo"}>
          <img
            src={process.env.PUBLIC_URL + `/img/1.webp`}
            alt=""
            width={200}
          />
        </Link>
      </header>
    </div>
  );
}
