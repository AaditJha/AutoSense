import React from "react";
import "../../styles/About.css";

function About() {
  return (
    <>
      <div className="about-body">
        <div className="text-body">
          <b>AutoSense</b> is a data analysis based web-application which
          analyzes a dataset (
          <b>
            <a
              href="https://github.com/AaditJha/AutoSense/blob/main/CSVs/cars_engage_2022.csv"
              target="_blank"
              style={{ textDecoration: "none" }}
              tabIndex="1"
            >
              Sample
            </a>
          </b>
          ) on the <b>Automotive Industry</b> and provides relevant insights
          about the Automative Industry.
          <br />
          <br />
          Dive deep inside the project's source code here:
          <br />
          <a
            href="https://github.com/AaditJha/AutoSense"
            target="_blank"
          >
            {" "}
            <img
              src="./img/github.png"
              alt="github-logo"
              width="60%"
              style={{ paddingLeft: "30%" }}
            />
          </a>
        </div>
        <a
          href="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif"
          target="_blank"
        >
          <img src="./img/analytics.webp" alt="gif" className="gif" />
        </a>
      </div>
      <div className="text-body">
        AutoSense was developed as a part of the <b>Microsoft Engage 2022 </b>
        Summer Mentorship Program under the <br />
        Data Analysis Track.
      </div>
      <div className="about-body">
        <img src="./img/ms.png" alt="ms-logo" width="25%" />
        <img src="./img/engage.png" alt="engage-logo" width="20%" />
      </div>
      <div className="text-body">
        Be a part of my journey and see how I developed this website.
        <img src="./img/timeline.svg" alt="timeline" width="100%" style={{paddingTop:"2%"}}/>
      </div>
    </>
  );
}

export default About;
