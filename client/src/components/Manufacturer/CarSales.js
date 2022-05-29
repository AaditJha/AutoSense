import React from "react";
import "../../styles/Dashboard.css";
import ChartNoFilter from "../Charts/ChartNoFilter";
import ChartWithFilter from "../Charts/ChartWithFilter";
import SelectGraph from "./SelectGraph";

function CarSales(props) {
  const def = "all";
  const [monthFilter, setMonthFilter] = React.useState(def);
  const [makeFilter, setMakeFilter] = React.useState(def);
  const [model1, setModel1] = React.useState(def);
  const [model2, setModel2] = React.useState(def);
  const [monthsOpt, setMonthsOpt] = React.useState([]);
  const [makeOpt, setMakeOpt] = React.useState([]);
  const [modelOpt, setModelOpt] = React.useState([]);
  function getMonthFilter() {
    if (monthFilter === "all") return {};
    return { month: monthFilter };
  }
  function getMakeFilter() {
    if (makeFilter === "all") return {};
    return { make: makeFilter };
  }
  function getModelFilter() {
    if (model1 === "all" || model2 == "all") return {};
    return { model: { $in: [model1, model2] } };
  }

  async function getMonthOptions() {
    const response = await fetch(`http://localhost:5000/months/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const res = await response.json();
    const monthsJson = [];
    monthsJson.push({ val: "all", label: "All" });
    for (var i = res.length - 1; i >= 0; i--) {
      const item = res[i];
      const monthyear = item.split(" ");
      monthsJson.push({
        val: item,
        label: monthyear[1].concat(" ", monthyear[2]),
      });
    }
    setMonthsOpt(monthsJson);
  }

  async function getMakeOptions() {
    const response = await fetch(`http://localhost:5000/make/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const res = await response.json();
    const makeJson = [];
    makeJson.push({ val: "all", label: "All" });
    res.forEach((item, i) => {
      makeJson.push({
        val: item,
        label: item,
      });
    });
    setMakeOpt(makeJson);
  }

  async function getModelOptions() {
    const response = await fetch(`http://localhost:5000/model/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const res = await response.json();
    const modelJson = [];
    modelJson.push({ val: "all", label: "All" });
    res.forEach((item, i) => {
      modelJson.push({
        val: item,
        label: item,
      });
    });
    setModelOpt(modelJson);
  }

  React.useEffect(() => {
    getMonthOptions();
    getMakeOptions();
    getModelOptions();
  }, []);

  return (
    <div className="graph-container">
      <ChartWithFilter
        sdk={props.sdk}
        chartId="629049de-cb9e-43fc-89a4-564855371890"
        width="100%"
        height="75vh"
        dark={true}
        filter={getMonthFilter()}
      />
      <SelectGraph
        val={monthFilter}
        label="Month"
        options={monthsOpt}
        setVal={setMonthFilter}
      />
      <ChartWithFilter
        sdk={props.sdk}
        chartId="6290562a-cb9e-4954-8db0-5648553d1d5f"
        width="100%"
        height="75vh"
        dark={true}
        filter={getMakeFilter()}
      />
      <SelectGraph
        val={makeFilter}
        label="Make"
        options={makeOpt}
        setVal={setMakeFilter}
      />
      <ChartWithFilter
        sdk={props.sdk}
        chartId="6290580f-5392-4a29-8eb3-f9c6d270bfc2"
        width="100%"
        height="75vh"
        dark={true}
        filter={getModelFilter()}
      />
      <SelectGraph
        val={model1}
        label="Model 1"
        options={modelOpt}
        setVal={setModel1}
      />
      <SelectGraph
        val={model2}
        label="Model 2"
        options={modelOpt}
        setVal={setModel2}
      />
      <ChartWithFilter
        sdk={props.sdk}
        chartId="6290588c-df81-4759-8cfb-6ee49bba5578"
        width="100%"
        height="75vh"
        dark={true}
        filter={getMonthFilter()}
      />
      <SelectGraph
        val={monthFilter}
        label="Month"
        options={monthsOpt}
        setVal={setMonthFilter}
      />
      <ChartNoFilter
        sdk={props.sdk}
        chartId={"629063ff-3de7-47ad-8c5e-4d88cb4dbf61"}
        width="100%"
        height="75vh"
        dark={true}
      />
    </div>
  );
}

export default CarSales;
