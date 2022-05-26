import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import CarSales from "../Manufacturer/CarSales";


function Consumer() {
  const features = [
    "Car Sales",
    "About A Car",
    "Compare Cars",
    "Used Car Price Predictor",
    "Car Recommender",
  ];
  const [active, setActive] = React.useState(features[0]);
  return (
    <div className="container">
      <Dashboard
        type="Consumer"
        active={active}
        setActive={setActive}
        features={features}
      />
      {active === features[0] ? <CarSales /> : ""}
    </div>
  );
}

export default Consumer;
