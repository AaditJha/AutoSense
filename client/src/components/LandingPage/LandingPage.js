import React from "react";
import "../../styles/LandingPage.css";
import { Button, IconButton, makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
import Car3D from "./Car3D/Car3D";
import Navbar from "../Navbar/Navbar";
import Features from "./Features/Features";
import Services from "./Services/Services";
import Sections from "./Sections";
import About from "./About";
import Contact from "./Contact";
import { Link as ExternLink } from "react-router-dom";
import FadeIn from "../FadeIn";

const useStyles = makeStyles({
  start: {
    background: "#6cc3cf",
    border: 0,
    borderRadius: 5,
    fontSize: "x-large",
    textTransform: "none",
    fontWeight: "bold",
    color: "#fff",
    padding: "20px 30px",
    margin: "0 2% 0 2%",
    "&:hover": {
      background: "#a1a1a1",
    },
  },
});

function LandingPage(props) {
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
  const classes = useStyles();
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

        <div id="home-section" className="title-container">
          <div className="title-items">
            <h1 className="landing-title">
              Making sense of your Automotive Data
            </h1>
            <h2 style={{ color: "#dfdfdf" }}> with AutoSense</h2>
            <h2 className="sub-text">You're a . . . </h2>
            <ExternLink to="/manufacturer" style={{ textDecoration: "none" }}>
              <Button className={classes.start}>Manufacturer</Button>
            </ExternLink>
            <ExternLink to="/consumer" style={{ textDecoration: "none" }}>
              <Button className={classes.start}>Consumer</Button>
            </ExternLink>
            <Link
              className="link-services"
              to="services-section"
              smooth={true}
              offset={-10}
              duration={500}
            >
              What's this?
            </Link>
          </div>
          <div>
            <Car3D />
          </div>
        </div>
        <Sections
          id="services-section"
          title="Getting Started with AutoSense"
          subTitle="Choose the profile that fits you:"
          section={<Services />}
        />
        <FadeIn
          render={
            <Sections
              id="features-section"
              title="Analyse your data better"
              subTitle="With Autosense, you can:"
              section={<Features />}
            />
          }
        />
        <FadeIn
          render={
            <Sections
              id="about-section"
              title="About AutoSense"
              subTitle="Microsoft Engage 2022"
              section={<About />}
            />
          }
        />
        <FadeIn
          render={
            <Sections
              id="contact-section"
              title="Meet the Developer"
              subTitle="Any question or remark? Just write me a message!"
              section={<Contact />}
            />
          }
        />
      </>
    </>
  );
}

export default LandingPage;
