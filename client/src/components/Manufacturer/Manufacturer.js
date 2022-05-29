import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Overview from "./Overview";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import CarSales from "./CarSales";
import BuildACar from "./BuildACar";
import AboutACar from "./AboutACar";
import SimilarCars from "./SimilarCars";

function Manufacturer() {
  const features = [
    "Overview",
    "Car Sales",
    "Build A Car",
    "About A Car",
    "Similar Cars",
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
        <SimilarCars />,
      ]}
    />
  );
}

export default Manufacturer;
