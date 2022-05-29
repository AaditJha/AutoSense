import React, { useRef, useState, useEffect } from "react";

function ChartNoFilter(props) {
  const chartDiv = useRef(null);
  const [chart] = useState(
    props.sdk.createChart({
      chartId: props.chartId,
      height: props.height,
      width: props.width,
      theme: props.dark ? "dark" : "light",
      showAttribution: false,
    })
  );
  useEffect(() => {
    chart
      .render(chartDiv.current)
      .catch((err) => console.log("Error during Charts rendering.", err));
  }, [chart]);
  return <div ref={chartDiv} style={{padding:"1%"}} />;
}

export default ChartNoFilter;
