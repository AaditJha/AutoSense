import React from "react";
import ChartNoFilter from "../Charts/ChartNoFilter";
import SelectGraph from "./SelectGraph";

function BuildACar(props) {
  const [graphopt, setGOpt] = React.useState(0);
  const [scrollVal, setScrollVal] = React.useState(0);
  const graphChartId = [
    "629071af-eb12-4ad5-84ce-23cfd86c01ae",
    "d5006039-b17b-4bb3-9540-46b1423fa9aa",
    "788b0113-5bc4-434c-afc1-593f901e325e",
    "5414c9a2-92a2-44b8-be02-8a3a0ec50207",
    "79085bb1-c327-4c58-932d-f54d35185bd5",
  ];
  window.onload = function () {
    document
      .getElementById("graph-container")
      .addEventListener("scroll", (e) => setScrollVal(e.target.scrollTop));
  };
  React.useEffect(() => {
    document.getElementById("graph-container").scrollTo(0, scrollVal);
  }, [graphopt]);

  return (
    <div id="graph-container" className="graph-container">
      <ChartNoFilter
        sdk={props.sdk}
        chartId={graphChartId[graphopt]}
        width="100%"
        height="75vh"
        dark={true}
      />
      <SelectGraph
        val={graphopt}
        label="Compatibility b/w"
        options={[
          { val: 0, label: "Gears - Seaters" },
          { val: 1, label: "Fuel Type - Fuel Capacity" },
          { val: 2, label: "Drivetrain - Gear" },
          { val: 3, label: "Valves per cylinder - Cylinder" },
          { val: 4, label: "Mileage - Fuel Capacity" },
        ]}
        setVal={setGOpt}
      />
    </div>
  );
}

export default BuildACar;
