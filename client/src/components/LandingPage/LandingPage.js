import React from "react";
import "../../styles/LandingPage.css";
import { Button, makeStyles } from "@material-ui/core";
import Car3D from "../Car3D/Car3D";
import { Link } from "react-scroll";

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
  const classes = useStyles();
  return (
    <div id={props.id} className="title-container">
      <div clasName="title-items">
        <h1 className="landing-title">Making sense of your Automotive Data</h1>
        <h2 style={{ color: "#dfdfdf" }}> with AutoSense</h2>
        <h2 className="sub-text">You're a . . . </h2>
        <Button className={classes.start}>Manufacturer</Button>
        <Button className={classes.start}>Consumer</Button>
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
  );
}

export default LandingPage;
