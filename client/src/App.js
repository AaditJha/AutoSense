import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Manufacturer from "./components/Manufacturer/Manufacturer";
import Consumer from "./components/Consumer/Consumer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/manufacturer" element={<Manufacturer />} />
        <Route path="/consumer" element={<Consumer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
