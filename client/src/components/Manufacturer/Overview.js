import React, { useEffect } from "react";
import "../../styles/Dashboard.css";
import ChartNoFilter from "../Charts/ChartNoFilter";
import ChartWithFilter from "../Charts/ChartWithFilter";
import SelectGraph from "./SelectGraph";
function Overview(props) {
  const [graph2opt, setG2Opt] = React.useState(0);
  const [graph3opt, setG3Opt] = React.useState(5);
  const [graph4opt, setG4Opt] = React.useState(13);
  const [graph5opt, setG5Opt] = React.useState(18);
  const [scrollVal, setScrollVal] = React.useState(0);
  const graph2ChartiId = [
    "20a691f2-3497-4091-835c-513a23f4db5a",
    "d518f20e-8f48-4bc0-959d-b539eed31de2",
    "c40fe83f-d68f-4248-b8ed-efbdccff1d40",
    "188a75f1-646f-47c4-b525-1aad4b830440",
    "941da636-2e51-4496-81c3-be0d13f86e11",

    "26fd735d-fcdf-48a8-8741-4a5206aaf205",
    "628fcf6f-f02d-455a-8d20-1fd5ad3c7777",
    "1473aec0-7f5d-4a7a-aae6-20b9b5307642",
    "c8a8c528-ac48-4100-b3ce-61d6eebb2d1c",
    "b9e6fa1e-598a-415d-aaa0-752fe567143a",
    "ad27f14d-8228-4047-b5f5-c6159d4e9419",
    "f8f14a51-9867-43ce-bdea-c4a578e4acab",
    "30a79098-3189-49ef-a720-a7aba1c7a640",

    "7566f8fb-be07-48c0-8514-77411cd55739",
    "628fd3dd-df81-4233-8896-6ee49b67a19b",
    "18b4e1ae-e061-46bc-858a-0f39ff584cbd",
    "85775b5a-762c-401c-ab67-2a3f3af2f7c2",
    "87e3462d-0c5a-409b-a6cd-785258d603fe",

    "628fd4b7-7033-484d-8ee5-163290f71120",
    "cb673726-43cc-4a17-874b-a62d41190607",
    "31f03a20-917a-4d04-9882-ea24e2222597",
    "d60fb4f8-051c-4303-bbb7-f4f6ee890997",
    "7eaf4a4a-4ac1-4821-844d-87742c6dfb4e",
  ];
  window.onload = function () {
    document
      .getElementById("graph-container")
      .addEventListener("scroll", (e) => setScrollVal(e.target.scrollTop));
  };
  useEffect(() => {
    document.getElementById("graph-container").scrollTo(0, scrollVal);
  }, [graph2opt]);

  return (
    <div id="graph-container" className="graph-container">
      <ChartNoFilter
        sdk={props.sdk}
        chartId="628fc370-3de7-4473-8bb1-4d88cbe89058"
        width="100%"
        height="75vh"
        dark={true}
      />
      <ChartNoFilter
        sdk={props.sdk}
        chartId={graph2ChartiId[graph2opt]}
        width="100%"
        height="75vh"
        dark={true}
      />
      <SelectGraph
        val={graph2opt}
        label="Price v/s"
        options={[
          { val: 0, label: "Make" },
          { val: 1, label: "Body Type" },
          { val: 2, label: "Seating Capacity" },
          { val: 3, label: "Drivetrain" },
          { val: 4, label: "Mileage" },
        ]}
        setVal={setG2Opt}
      />
      <ChartNoFilter
        sdk={props.sdk}
        chartId={graph2ChartiId[graph3opt]}
        width="100%"
        height="75vh"
        dark={true}
      />
      <SelectGraph
        val={graph3opt}
        label="Heatmaps"
        options={[
          { val: 5, label: "Cost- Seaters & Fuel" },
          { val: 6, label: "Cost- Cylinders & Fuel" },
          { val: 7, label: "Cost- Fuel Capacity & Make" },
          { val: 8, label: "Mileage- Fuel" },
          { val: 9, label: "Mileage- Fuel v2" },
          { val: 10, label: "Volume- Car Type" },
          { val: 11, label: "Weight- Fuel Capacity & Type" },
          { val: 12, label: "Weight- Car Type" },
        ]}
        setVal={setG3Opt}
      />
      <ChartNoFilter
        sdk={props.sdk}
        chartId={graph2ChartiId[graph4opt]}
        width="100%"
        height="75vh"
        dark={true}
      />
      <SelectGraph
        val={graph4opt}
        label="Frequency of"
        options={[
          { val: 13, label: "Car Brands" },
          { val: 14, label: "Volume of Car" },
          { val: 15, label: "Showroom Price" },
          { val: 16, label: "Fuel Capacity" },
          { val: 17, label: "Weight" },
        ]}
        setVal={setG4Opt}
      />
      <ChartNoFilter
        sdk={props.sdk}
        chartId={graph2ChartiId[graph5opt]}
        width="100%"
        height="75vh"
        dark={true}
      />
      <SelectGraph
        val={graph5opt}
        label="Types of"
        options={[
          { val: 18, label: "Body Type" },
          { val: 19, label: "Drivetrain" },
          { val: 20, label: "Fuel" },
          { val: 21, label: "Gear count" },
          { val: 22, label: "Cup Holder" },
        ]}
        setVal={setG5Opt}
      />
    </div>
  );
}

export default Overview;
