import React from "react";
import "../../styles/Dashboard.css";
import { Link } from "react-router-dom";
import SidebarElement from "./SidebarElement";

function Dashboard(props) {
  return (
    <div className="dashboard-container">
      <div className="side-pane">
        <Link to="/">
          <div className="logo-container">
            <img src={"./img/logo.svg"} alt="logo" width="15%" />
            <img src={"./img/banner.svg"} alt="banner" width="75%" />
          </div>
        </Link>
        <h2
          style={{ color: "#dfdfdf", paddingLeft: "5%", paddingBottom: "10%" }}
        >
          {props.type}
        </h2>
        <div className="sidebar">
          {props.features.map((item, i) => {
            return (
              <SidebarElement
                feature={item}
                active={props.active}
                setActive={props.setActive}
              />
            );
          })}
        </div>
      </div>
      {
        props.dataVis[
          props.features.findIndex((feature) => {
            return feature === props.active;
          })
        ]
      }
    </div>
  );
}

export default Dashboard;
