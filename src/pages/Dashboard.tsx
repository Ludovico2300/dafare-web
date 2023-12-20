import React from "react";
import { Link } from "react-router-dom";
import useAuthFirebase from "../hooks/useAuthFirebase";
import { Login } from "../components/Login";
import Signout from "../components/Signout";
import { Singup } from "../components/Signup";

export default function Dashboard() {
  const { currentUser } = useAuthFirebase();

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-white h-full w-full flex flex-col items-center justify-center">
        {currentUser?.email ? (
          <>
            <div className="text-6xl underline">
              Benvenuto {currentUser.displayName}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                width: "30%",
              }}
            >
              {currentUser.email === "ludovicocolucci@gmail.com" && (
                <Link
                  to={"/create"}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    margin: "1rem",
                    padding: "7px",
                    fontSize: "2rem",
                    backgroundColor: "transparent",
                    border: "3px solid black",
                    borderRadius: "10px",
                  }}
                >
                  Create
                </Link>
              )}

              <Signout />
            </div>
          </>
        ) : (
          <>
            <div style={{ fontSize: "5rem", margin: "1rem" }}>
              Effettua l'accesso!
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
              }}
            >
              <Login />
              <div
                style={{
                  height: "100%",
                  width: "1rem",
                  background: "black",
                  border: "solid 1px black",
                  borderRadius: "5px",
                }}
              ></div>
              <Singup />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
