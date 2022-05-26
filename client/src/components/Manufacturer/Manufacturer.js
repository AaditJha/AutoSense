import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import CarSales from "./CarSales";
import Overview from "./Overview";
import "../../styles/Manufacturer.css";

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
    <div className="container">
      <Dashboard
        type="Manufacturer"
        active={active}
        setActive={setActive}
        features={features}
      />
      {active === features[0] ? <Overview /> : ""}
      {active === features[1] ? <CarSales /> : ""}
    </div>
  );
}

export default Manufacturer;
