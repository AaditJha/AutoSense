import React from "react";
import "../../../styles/Services.css";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ServiceItem(props) {
  return (
    <Box className="service-item">
        <img src={props.icon} alt="icon" width="100px" className="icon" />
      <Link to="/manufacturer" style={{textDecoration: "none"}}>
        <h1 className="service-title">{props.title}</h1>
        <p>{props.body}</p>
        <br />
        <p>With AutoSense, you can: </p>
        <hr />
        <ul style={{ padding: "5%" }}>
          {props.listItems.map((item, i) => (
            <li>{item}</li>
          ))}
        </ul>
    </Link>
      </Box>
  );
}
