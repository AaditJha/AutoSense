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
        listItems={['Test1','Test2','Test3']}
      />
      <ServiceItem
        icon={consumer}
        title="Consumer"
        body="You are looking to buy a car
        and would like to get some insight on the dataset."
        listItems={['Test1','Test2']}
      />
    </>
  );
}

export default Services;
