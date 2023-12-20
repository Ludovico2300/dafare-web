import React from "react";
import useAuthFirebase from "../hooks/useAuthFirebase";

export default function Signout() {
  const { signout } = useAuthFirebase();

  return (
    <div className="conteiner-singup">
      <div className="form">
        <div className="button-container">
          <button
            style={{
              padding: "7px",
              fontSize: "2rem",
              backgroundColor: "transparent",
              border: "3px solid black",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            value="singup"
            onClick={signout}
          >
            Signout
          </button>
        </div>
      </div>
    </div>
  );
}
