import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Features from "./components/Features/Features";
import Services from "./components/Services/Services";
import Sections from "./components/Commons/Sections";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import { IconButton, makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";

function App() {
  const [active, setActive] = React.useState(false);
  const changeActive = () => {
    if (window.scrollY >= 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  React.useEffect(() => {
    changeActive();
    window.addEventListener("scroll", changeActive);
  });

  return (
    <>
      <div className={active ? "scroll-up-active" : "scroll-up"}>
        <Link to="home-section" smooth={true} duration={500} offset={-70}>
          <IconButton aria-label="scroll-up" size="large">
            <img src="./img/scroll_up.svg" alt="scroll-up" />
          </IconButton>
        </Link>
      </div>
      <>
        <Navbar active={active} />
        <LandingPage id="home-section" />
        <Sections
          id="services-section"
          title="Getting Started with AutoSense"
          subTitle="Choose the profile that fits you:"
          section={<Services />}
        />
        <Sections
          id="features-section"
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
        <Sections
          id="contact-section"
          title="Meet the Developer"
          subTitle="Any question or remark? Just write me a message!"
          section={<Contact />}
        />
      </>
    </>
  );
}

export default App;
