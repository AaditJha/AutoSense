import { ThemeProvider } from "@emotion/react";
import { createTheme, TextField } from "@mui/material";
import React from "react";
import SelectGraph from "./SelectGraph";

function AboutACar() {
  const [model, setModel] = React.useState("");
  const [modelOpt, setModelOpt] = React.useState([]);
  const [car, setCar] = React.useState({});
  const [rendered, setRendered] = React.useState(false);

  async function getCarDetails() {
    const param = model.split(" ");
    var paramstr = param[0];
    for (var i = 1; i < param.length; i++) paramstr = paramstr + "+" + param[i];
    paramstr = "http://localhost:5000/details/".concat(paramstr);
    const response = await fetch(paramstr);
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const res = await response.json().then(setRendered(true));
    setCar(res);
    console.log(res);
  }

  async function getModelOptions() {
    const response = await fetch(`http://localhost:5000/model-engage/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const res = await response.json();
    const modelJson = [];
    res.forEach((item, i) => {
      modelJson.push({
        val: item,
        label: item,
      });
    });
    setModelOpt(modelJson);
  }

  React.useEffect(() => {
    getModelOptions();
  }, []);

  React.useEffect(() => {
    if (model !== "") {
      getCarDetails();
    }
  }, [model]);

  return (
    <div className="graph-container">
      <div
        style={{
          background: "#21313c",
          width: "100%",
          height: "100%",
          borderRadius: "5px",
          display: "flex",
          padding: "4%",
          justifyContent: "space-evenly",
          flexDirection: "column",
        }}
      >
        <SelectGraph
          val={model}
          label="Select model"
          options={modelOpt}
          setVal={setModel}
        />
        <div
          style={{
            background: "#ededed",
            display: "flex",
            justifyContent: "space-around",
            borderRadius: "5px",
            width: "100%",
            height: "75%",
            padding:"2%"
          }}
        >
          {model === "" ? (
            <img src="./img/car_loading.gif" alt="car-loading" width="50%" />
          ) : rendered ? (<>
              <div style={{display:"flex",flexDirection:"column"}}>
            <h1>{car.make} {car.model}</h1>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <h3>{car.variant}</h3>
            <h3>₹{car["ex-showroom_price"]}</h3>

            </div>

            <br/>
            <h3>Technical Details</h3>
            <p>Engine Displacement: {car.displacement} cc</p>
            <p>Drivetrain: {car.drivetrain}</p>
            <p>Fuel System: {car.fuel_system}</p>
            <p>Cylinders: {car.cylinders}</p>
            <p>Valve Per Cylinders: {car.valves_per_cylinder}</p>
            <p>Fuel Tank Capacity: {car.fuel_tank_capacity} L</p>
            <p>Fuel Type: {car.fuel_type}</p>
            <p>Fuel System: {car.fuel_system}</p>
            </div>
              <div style={{display:"flex",flexDirection:"column"}}>
                <h3>Other Details</h3>
                <p>Type: {car.body_type}</p>
                <p>Seating: {car.seating_capacity} seater</p>
                <p>No of doors: {car.doors}</p>
                <p>No of gears: {car.gears}</p>
                <p>Dimensions: {car.length}mm×{car.width}mm×{car.height}mm</p>
                <p>Weight: {car.kerb_weight} Kg</p>
                <p>No of airbags: {car.number_of_airbags}</p>
                <br/>
                <h3>Mileage</h3>
                <p>City Mileage: {car.city_mileage} km/litre</p>
                <p>Highway Mileage: {car.highway_mileage} km/litre</p>
                <p>Arai Certified Mileage: {car.arai_certified_mileage} km/litre</p>
              </div>    
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutACar;
