import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import CarSales from "../Manufacturer/CarSales";
import AboutACar from "../Manufacturer/AboutACar";
import UsedCar from "./UsedCar";
import SimilarCars from "../Manufacturer/SimilarCars";

function Consumer() {
  const features = [
    "Car Sales",
    "About A Car",
    "Similar Cars",
    "Used Cars",
    "Budget Predictor",
  ];
  const [active, setActive] = React.useState(features[3]);
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
        <SimilarCars/>,
        <UsedCar/>,
        <AboutACar/>,
      ]}
    />
  );
}

export default Consumer;
