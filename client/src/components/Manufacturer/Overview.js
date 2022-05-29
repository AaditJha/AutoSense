import React, { useEffect } from "react";
import "../../styles/Dashboard.css";
import ChartNoFilter from "../Charts/ChartNoFilter";
import SelectGraph from "./SelectGraph";
function Overview(props) {
  const [graph2opt, setG2Opt] = React.useState(0);
  const [graph3opt, setG3Opt] = React.useState(5);
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
      
    </div>
  );
}

export default Overview;
