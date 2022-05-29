import React, { useEffect } from "react";
import "../../styles/Dashboard.css";
import ChartNoFilter from "../Charts/ChartNoFilter";
import SelectGraph from "./SelectGraph";
function Overview(props) {
    const [graph2opt, setG2Opt] = React.useState(0);
    const [scrollVal, setScrollVal] = React.useState(0);
    const graph2ChartiId = [
        "20a691f2-3497-4091-835c-513a23f4db5a",
        "d518f20e-8f48-4bc0-959d-b539eed31de2",
        "c40fe83f-d68f-4248-b8ed-efbdccff1d40",
        "188a75f1-646f-47c4-b525-1aad4b830440",
        "941da636-2e51-4496-81c3-be0d13f86e11",
    ];
    const graph2 = ["", "", "", "", ""];
    graph2ChartiId.forEach((id, i) => {
        graph2[i] = (
            <ChartNoFilter
            sdk={props.sdk}
            chartId={id}
            width="100%"
            height="75vh"
            dark={true}
            />
            );
        });
        window.onload = function(){
            document.getElementById('graph-container').addEventListener("scroll",e=>setScrollVal(e.target.scrollTop))
        }
        useEffect(() => {
            document.getElementById('graph-container').scrollTo(0,scrollVal)
        }, [graph2opt])
  return (
    <div id="graph-container" className="graph-container">
      <ChartNoFilter
        sdk={props.sdk}
        chartId="628fc370-3de7-4473-8bb1-4d88cbe89058"
        width="100%"
        height="75vh"
        dark={true}
      />
      {/* The only way i could make it work */}
      {graph2opt == 0 && graph2[0]}
      {graph2opt == 1 && graph2[1]}
      {graph2opt == 2 && graph2[2]}
      {graph2opt == 3 && graph2[3]}
      {graph2opt == 4 && graph2[4]}
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
    </div>
  );
}

export default Overview;
