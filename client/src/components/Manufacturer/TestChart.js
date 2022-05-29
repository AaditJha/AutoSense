import React, { useEffect, useRef, useState } from "react";
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TestChart = ({ chartId, height, width }) => {
  const [filter, setFilter] = React.useState({});

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  const sdk = new ChartsEmbedSDK({
    baseUrl: "https://charts.mongodb.com/charts-microsoft-engage-2022-hhrfb",
  });
  const chartDiv = useRef(null);
  const [rendered, setRendered] = useState(false);
  const [chart] = useState(
    sdk.createChart({
      chartId: chartId,
      height: height,
      width: width,
      theme: "dark",
      showAttribution: false,
    })
  );

  useEffect(() => {
    chart
      .render(chartDiv.current)
      .then(() => setRendered(true))
      .catch((err) => console.log("Error during Charts rendering.", err));
  }, [chart]);

  useEffect(() => {
    if (rendered) {
      chart.setFilter(filter).catch(err => console.log("Error while filtering.", err));
    }
  }, [chart, filter, rendered]);

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Month</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Month"
            onChange={handleChange}
          >
            <MenuItem value={{}}>All</MenuItem>
            <MenuItem value={{month:"22/04 April 2022"}}>April 2022</MenuItem>
            <MenuItem value={{month:"22/03 March 2022"}}>March 2022</MenuItem>
            <MenuItem value={{month:"22/02 February 2022"}}>February 2022</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <div ref={chartDiv} />
    </>
  );
};

export default TestChart;
