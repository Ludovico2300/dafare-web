import { useState } from "react";
import useAuthFirebase from "../hooks/useAuthFirebase";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useAuthFirebase();

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
      <h1>Email</h1>
      <input
        placeholder="Email"
        type="text"
        name="email"
        required
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        value="Login"
        className="signin"
        onSubmit={() => login(email, password)}
        onClick={() => login(email, password)}
      >
        Login
      </button>
    </div>
  );
}
