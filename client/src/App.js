import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Features from "./components/Features/Features";
import Services from "./components/Services/Services";
import Sections from "./components/Commons/Sections";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Sections
        id="services-section"
        title="Getting Started with AutoSense"
        subTitle="Choose the profile that fits you:"
        section={<Services />}
      />
      <Sections
        id="feature-section"
        title="Analyse your data better"
        subTitle="With Autosense, you can:"
        section={<Features />}
      />
      <Sections
        id="about-section"
        title="About AutoSense"
        subTitle="Microsoft Engage 2022"
        section={<About />}
      />
    </>
  );
};

export default App;
