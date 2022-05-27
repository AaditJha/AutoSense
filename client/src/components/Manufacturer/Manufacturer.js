import React from "react";
import Dashboard from "../Dashboard/Dashboard";

function Manufacturer() {
  const features = [
    "Overview",
    "Car Sales",
    "Build A Car",
    "About A Car",
    "Compare Cars",
  ];
  const [active, setActive] = React.useState(features[0]);
  return (
    <Dashboard
      type="Manufacturer"
      active={active}
      setActive={setActive}
      features={features}
      dataVis={[
        <iframe
          style={{
            width: "100%",
            height: "100vh",
            background: "#262626",
            border: "none",
          }}
          src="https://charts.mongodb.com/charts-microsoft-engage-2022-hhrfb/embed/dashboards?id=cb107ac7-4bfa-45a3-8c6a-fc2e6be5ca45&theme=dark&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
        />,
        <iframe
          style={{
            width: "100%",
            height: "100vh",
            background: "#262626",
            border: "none",
          }}
          src="https://charts.mongodb.com/charts-microsoft-engage-2022-hhrfb/embed/dashboards?id=1f52f4e3-6336-4cee-82e3-644fbd20e3c1&theme=dark&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
        ></iframe>,
        <iframe
          style={{
            width: "100%",
            height: "100vh",
            background: "#262626",
            border: "none",
          }}
          src="https://charts.mongodb.com/charts-microsoft-engage-2022-hhrfb/embed/dashboards?id=bb545667-dbfe-41a2-93fd-d1207353d7cd&theme=dark&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
        ></iframe>,
      ]}
    />
  );
}

export default Manufacturer;
