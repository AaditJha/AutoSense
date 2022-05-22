import React from "react";
import "../../styles/Commons.css";

function Sections(props) {
  return (
    <div className="sections" id={props.id}>
      <h1 className="title">{props.title}</h1>
      <p className="sub-title">{props.subTitle}</p>
      <div className="section-container">
          {props.section}
      </div>
    </div>
  );
}

export default Sections;
