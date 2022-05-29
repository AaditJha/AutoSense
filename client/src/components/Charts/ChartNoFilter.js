import React, { useRef, useState, useEffect } from "react";

function ChartNoFilter(props) {
  const chartDiv = useRef(null);
  const [chart,setChart] = useState(
    props.sdk.createChart({
      chartId: props.chartId,
      height: props.height,
      width: props.width,
      theme: props.dark ? "dark" : "light",
      showAttribution: false,
    })
  );
  useEffect(() => {
    setChart(props.sdk.createChart({
      chartId: props.chartId,
      height: props.height,
      width: props.width,
      theme: props.dark ? "dark" : "light",
      showAttribution: false,
    }));
  }, [props.chartId]);
  useEffect(() => {
    if (chart.options.chartId !== props.chartId) {
      console.log(chart);
    }
    chart
      .render(chartDiv.current)
      .catch((err) => console.log("Error during Charts rendering.", err));
  }, [chart]);
  return <div ref={chartDiv} style={{ padding: "1%" }} />;
}

export default ChartNoFilter;
