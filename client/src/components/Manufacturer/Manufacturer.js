import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Overview from "./Overview";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import CarSales from "./CarSales";
import BuildACar from "./BuildACar";
import AboutACar from "./AboutACar";

function Manufacturer() {
  const features = [
    "Overview",
    "Car Sales",
    "Parts Compatibility",
    "About A Car",
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
        <Overview sdk={sdk} />,
        <CarSales sdk={sdk} />,
        <BuildACar sdk={sdk} />,
        <AboutACar />,
      ]}
    />
  );
}

export default Manufacturer;
