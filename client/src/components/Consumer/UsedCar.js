import { ThemeProvider } from "@emotion/react";
import {
  Button,
  createTheme,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function UsedCar() {
  const [owner, setOwner] = React.useState("First Owner");
  const [dealer, setDealer] = React.useState("Dealer");
  const [fuel, setFuel] = React.useState("CNG");
  const [transmission, setTransmission] = React.useState("Manual");
  const [age, setAge] = React.useState(0);
  const [kms, setkms] = React.useState(0);
  const [seats, setSeats] = React.useState(1);
  const [engine, setEngine] = React.useState(1000);
  const [mil, setMil] = React.useState(0);
  const [torque, setTorque] = React.useState(0);
  const [pow, setPow] = React.useState(0);
  const [result, setResult] = React.useState(false);
  const [predicted, setPredicted] = React.useState(0);

  async function predictPrice(e) {
    e.preventDefault();
    const param = {
      owner: owner,
      dealer: dealer,
      fuel: fuel,
      transmission: transmission,
      how_old: age,
      km_driven: kms,
      seats: seats,
      EngineCC: engine,
      mileage_conv: mil,
      torque_conv: torque,
      max_power_conv: pow,
    };
    const response = await fetch("http://localhost:5000/used", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    })
    if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const res = await response.json();
      setPredicted(res['price'])
    setResult(true);
  }
  return (
    <ThemeProvider theme={darkTheme}>
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
          {result ? (
            <>
              <h1
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                The predicted price is
              </h1>
              <h1
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                ₹{predicted}
              </h1>
              <Button onClick={() => setResult(false)}>Go Back</Button>
            </>
          ) : (
            <>
              <h1
                style={{
                  color: "#fff",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                Predict the Price of your used car
              </h1>
              <form
                onSubmit={predictPrice}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1%",
                  }}
                >
                  <TextField
                    variant="outlined"
                    label="Car age in years (Max 30)"
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    InputProps={{
                      inputProps: {
                        min: 0,
                        max: 30,
                      },
                    }}
                    sx={{ width: "45%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Kms driven (Max 1M)"
                    type="number"
                    value={kms}
                    onChange={(e) => setkms(e.target.value)}
                    required
                    InputProps={{
                      inputProps: {
                        min: 0,
                        max: 1000000,
                      },
                    }}
                    sx={{ width: "45%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1%",
                  }}
                >
                  <TextField
                    variant="outlined"
                    label="Number of Seats (Max 14)"
                    type="number"
                    required
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                    InputProps={{
                      inputProps: {
                        min: 0,
                        max: 14,
                      },
                    }}
                    sx={{ width: "45%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Engine CC (Max 4K)"
                    type="number"
                    required
                    value={engine}
                    onChange={(e) => setEngine(e.target.value)}
                    InputProps={{
                      inputProps: {
                        min: 0,
                        max: 4000,
                      },
                    }}
                    sx={{ width: "45%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1%",
                  }}
                >
                  <TextField
                    variant="outlined"
                    label="Mileage"
                    type="number"
                    required
                    value={mil}
                    onChange={(e) => setMil(e.target.value)}
                    InputProps={{
                      inputProps: {
                        min: 0,
                        max: 34,
                      },
                    }}
                    sx={{ width: "45%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Torque"
                    type="number"
                    required
                    value={torque}
                    onChange={(e) => setTorque(e.target.value)}
                    InputProps={{
                      inputProps: {
                        min: 0,
                        max: 789,
                      },
                    }}
                    sx={{ width: "45%" }}
                  />
                  <TextField
                    variant="outlined"
                    label="Max Power"
                    type="number"
                    required
                    value={pow}
                    onChange={(e) => setPow(e.target.value)}
                    InputProps={{
                      inputProps: {
                        min: 0,
                        max: 789,
                      },
                    }}
                    sx={{ width: "45%" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1%",
                  }}
                >
                  <Select
                    variant="outlined"
                    onChange={(e) => setOwner(e.target.value)}
                    value={owner}
                    sx={{ width: "45%" }}
                  >
                    <MenuItem value={"First Owner"}>First Owner</MenuItem>
                    <MenuItem value={"Second Owner"}>Second Owner</MenuItem>
                    <MenuItem value={"Third Owner"}>Third Owner</MenuItem>
                    <MenuItem value={"Fourth & Above Owner"}>
                      Fourth & Above Owner
                    </MenuItem>
                    <MenuItem value={"Test Drive Car"}>Test Drive Car</MenuItem>
                  </Select>

                  <Select
                    variant="outlined"
                    onChange={(e) => setDealer(e.target.value)}
                    value={dealer}
                    sx={{ width: "45%" }}
                  >
                    <MenuItem value={"Dealer"}>Dealer</MenuItem>
                    <MenuItem value={"Individual"}>Individual</MenuItem>
                    <MenuItem value={"Trustmark Dealer"}>
                      Trustmark Dealer
                    </MenuItem>
                  </Select>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1%",
                  }}
                >
                  <Select
                    variant="outlined"
                    onChange={(e) => setFuel(e.target.value)}
                    value={fuel}
                    sx={{ width: "45%" }}
                  >
                    <MenuItem value={"CNG"}>CNG</MenuItem>
                    <MenuItem value={"Diesel"}>Diesel</MenuItem>
                    <MenuItem value={"LPG"}>LPG</MenuItem>
                    <MenuItem value={"Petrol"}>Petrol</MenuItem>
                  </Select>

                  <Select
                    variant="outlined"
                    onChange={(e) => setTransmission(e.target.value)}
                    value={transmission}
                    sx={{ width: "45%" }}
                  >
                    <MenuItem value={"Automatic"}>Automatic</MenuItem>
                    <MenuItem value={"Manual"}>Manual</MenuItem>
                  </Select>
                </div>
                <Button type="submit">Get Prediction</Button>
              </form>
            </>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default UsedCar;
