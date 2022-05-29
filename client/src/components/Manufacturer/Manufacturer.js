import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Overview from "./Overview";
import TestChart from "./TestChart";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

function Manufacturer() {
  const features = [
    "Overview",
    "Car Sales",
    "Build A Car",
    "About A Car",
    "Compare Cars",
  ];
  const [active, setActive] = React.useState(features[0]);
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-microsoft-engage-2022-hhrfb",
  });

  return (
    <Dashboard
      type="Manufacturer"
      active={active}
      setActive={setActive}
      features={features}
      dataVis={[
        <Overview sdk={sdk}/>,
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
        <TestChart height={'600px'} width={'800px'} chartId={'629049de-cb9e-43fc-89a4-564855371890'}/>
      ]}
    />
  );
}

export default Manufacturer;
