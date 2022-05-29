import React from "react";
import FeatureItem from "./FeatureItem";

function Features() {
  return (
    <>
      <FeatureItem
        title="Interactive Overview"
        body="With the help of MongoDB embedded charts, get an interactive description of the dataset with various filters and graphs to look into."
      />
      <FeatureItem
        title="Car Resale Value Predictor"
        body="With the help of Autotrain, developed a regression model to predict the resale value of a car depending upon various parameters."
      />
      <FeatureItem
        title="Additional Market Shares Info"
        body="Scraped the monthly sales data of cars in India to get a deeper insight on the market as well as looking into what sells in the recent times"
      />
      <FeatureItem
        title="Detailed Information on Cars"
        body="Get the accurate and detailed information for a given car model"
      />
      <FeatureItem
        title="Parts Compatibility"
        body="Look into what pair of parts are in high demand and their compatibility through the Heatmaps"
      />
      
    </>
  );
}

export default Features;
