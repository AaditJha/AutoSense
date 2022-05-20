import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutPage from "./components/AboutPage/AboutPage";
const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <AboutPage />
    </>
  );
};

export default App;
