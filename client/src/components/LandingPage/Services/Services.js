import React from "react";
import ServiceItem from "./ServiceItem";
import manufacturer from "../../../img/manufacturer.png";
import consumer from "../../../img/consumer.png";

function Services() {
  return (
    <>
      <ServiceItem
        icon={manufacturer}
        title="Manufacturer"
        body="You are working in the Automotive Industry 
        and would like to get some insight on the dataset."
        listItems={[
          "Get a detailed analysis of dataset",
          "Get the sales analysis of various features",
          "Find the compatibility of car parts",
          "Get a detailed information about a model",
        ]}
      />
      <ServiceItem
        icon={consumer}
        title="Consumer"
        body="You are looking to buy a car
        and would like to get some insight on the dataset."
        listItems={[
          "Get the latest information on the cars selling in the market",
          "Get a detailed information about a car model",
          "Predict the market value of your used car",
        ]}
      />
    </>
  );
}

export default Services;
