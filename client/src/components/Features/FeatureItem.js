import React from "react";
import "../../styles/Features.css"
import { Box } from "@material-ui/core";
import test from "../../img/test.png";

export default function FeatureItem(props) {
  return (
    <Box className="feature-item">
      <img src={test} alt="test" width="100px" />
      <div className="feature-text">
        <h2
          style={{ color: "#303030", paddingBottom: "10px", fontSize: "18px" }}
        >
          {props.title}
        </h2>
        <p style={{ fontSize: "15px" }}>
          {props.body}
        </p>
      </div>
    </Box>
  );
}
