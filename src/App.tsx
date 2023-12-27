import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Todos from "./pages/Todos";
import Vediamolo from "./pages/Vediamolo";
import Desideri from "./pages/Desideri";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/vediamolo" element={<Vediamolo />} />
        <Route path="/desires" element={<Desideri />} />
        {/* <Route path="*" element={<NoPage />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
