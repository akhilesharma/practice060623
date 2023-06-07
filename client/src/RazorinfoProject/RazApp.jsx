import React from "react";
import Dataone from "./Dataone";
import Datatwo from "./Datatwo";
import "../RazorinfoProject/Style.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

export default function RazApp() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route  path="/dataone" element={<Dataone/>} />
          <Route  path="/datatwo/:id" element={<Datatwo/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


