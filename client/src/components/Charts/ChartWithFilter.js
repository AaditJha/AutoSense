import React, { useRef, useState, useEffect } from "react";

function ChartWithFilter(props) {
  const chartDiv = useRef(null);
  const [chart, setChart] = useState(
    props.sdk.createChart({
      chartId: props.chartId,
      height: props.height,
      width: props.width,
      theme: props.dark ? "dark" : "light",
      showAttribution: false,
    })
  );
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    if (chart.options.chartId !== props.chartId) {
      console.log(chart);
    }
    chart
      .render(chartDiv.current)
      .then(() => setRendered(true))
      .catch((err) => console.log("Error during Charts rendering.", err));
  }, [chart]);

  useEffect(() => {
    setChart(
      props.sdk.createChart({
        chartId: props.chartId,
        height: props.height,
        width: props.width,
        theme: props.dark ? "dark" : "light",
        showAttribution: false,
      })
    );
  }, [props.chartId]);

  useEffect(() => {
    if (rendered) {
      chart
        .setFilter(props.filter)
        .catch((err) => console.log("Error while filtering.", err));
    }
  }, [chart, props.filter, rendered]);

  return <div ref={chartDiv} style={{ padding: "1%" }} />;
}

export default ChartWithFilter;
