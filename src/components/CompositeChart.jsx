import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { well9500, well9501, well9502 } from "./testdata/composite_data";

const CompositeChart = () => {
  const d9500 = well9500.map(p => [p.tg, p.depth]);
  const d9501 = well9501.map(p => [p.tg, p.depth]);
  const d9502 = well9502.map(p => [p.tg, p.depth]);
  const composite_well = well9502.map(p => [p.tg * 0.88, p.depth]);

  const options = {
    title: {
      text: "Композиция",
    },
    credits: { enabled: false },
    yAxis: {
      reversed: true,
      title: {
        text: "Глубина",
      },
    },
    chart: { height: 900 },
    series: [
      {
        color: "red",
        name: 9500,
        type: "line",
        data: d9500,
        opacity: 0.4,
      },
      {
        color: "red",
        name: 9501,
        type: "line",
        opacity: 0.4,
        data: d9501,
      },
      {
        color: "red",
        name: 9502,
        type: "line",
        opacity: 0.4,
        data: d9502,
      },
      {
        color: "#00ff0d",
        name: "Composite",
        type: "line",
        data: composite_well,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default CompositeChart;
