import React from "react";

import ChartBar from "./ChartBar/ChartBar";
import "./Chart.css";

const Chart = (props) => {
   let values = props.dataPoints.map((DP)=> DP.value);
   let max = Math.max(...values);

  return (
    <section className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          label={dataPoint.label}
          key={dataPoint.label}
          maxValue={max}
        />
      ))}
    </section>
  );
};

export default Chart;
