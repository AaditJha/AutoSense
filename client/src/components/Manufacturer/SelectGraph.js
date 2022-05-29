import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function SelectGraph(props) {
  const handleChange = (event) => {
    props.setVal(event.target.value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="simple-select-label">{props.label}</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={props.val}
            label={props.label}
            onChange={handleChange}
          >
            {props.options.map((item, key) => {
              return <MenuItem value={item.val}>{item.label}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}

export default SelectGraph;
