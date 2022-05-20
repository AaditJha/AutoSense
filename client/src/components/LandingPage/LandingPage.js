import React from "react";
import "./LandingPage.css";
import { Button, makeStyles } from "@material-ui/core";
import Car3D from "../Car3D/Car3D";

const useStyles = makeStyles({
  start: {
    background: "#248aff",
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

function LandingPage() {
  const classes = useStyles();
  return (
    <div className="title-container">
      <div clasName="title-items">
        <h1 className="landing-title">Making sense of your Automotive Data</h1>
        <h2 style={{ color: "#dfdfdf" }}> with AutoSense</h2>
        <div className="sub-text">I'm a </div>
        <Button className={classes.start}>Manager</Button>
        <Button className={classes.start}>Consumer</Button>
      </div>
      <div className="title-items">
        <Car3D />
      </div>
    </div>
  );
}

export default LandingPage;