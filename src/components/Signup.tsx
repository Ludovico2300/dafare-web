import { useState } from "react";
import useAuthFirebase from "../hooks/useAuthFirebase";

export function Singup() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signup } = useAuthFirebase();

  return (
    <div
      style={{
        margin: "0 2rem",
        height: "30rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ fontWeight: "bold" }}>Email</h1>
      <input
        placeholder="Email"
        type="text"
        name="email"
        required
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h1>Username</h1>
      <input
        placeholder="Username"
        type="text"
        name="username"
        required
        className="input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <h1>Password</h1>
      <input
        placeholder="Password"
        type="password"
        name="pass"
        required
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        style={{
          padding: "7px",
          fontSize: "2rem",
          backgroundColor: "transparent",
          border: "3px solid black",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        value="Signup"
        className="signin"
        onSubmit={() => signup(email, password, username)}
        onClick={() => signup(email, password, username)}
      >
        Signup
      </button>
    </div>
  );
}
