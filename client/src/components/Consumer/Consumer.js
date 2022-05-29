import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import CarSales from "../Manufacturer/CarSales";
import AboutACar from "../Manufacturer/AboutACar";
import UsedCar from "./UsedCar";

function Consumer() {
  const features = [
    "Car Sales",
    "About A Car",
    "Used Cars",
  ];
  const [active, setActive] = React.useState(features[0]);
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-microsoft-engage-2022-hhrfb",
  });

  return (
    <Dashboard
      type="Consumer"
      active={active}
      setActive={setActive}
      features={features}
      dataVis={[
        <CarSales sdk={sdk}/>,
        <AboutACar/>,
        <UsedCar/>,
      ]}
    />
  );
}

export default Consumer;
