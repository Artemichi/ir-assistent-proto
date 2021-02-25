import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { well9500, well9501, well9502 } from "./testdata/composite_data";

const AnalysisChart = () => {
  const d9500 = well9500.map(p => [p.tg, p.depth]);
  const d9501 = well9501.map(p => [p.tg, p.depth]);
  const d9502 = well9502.map(p => [p.tg, p.depth]);

  const options = {
    title: {
      text: "",
    },
    credits: { enabled: false },
    yAxis: {
      title: {
        text: "Глубина",
      },
    },
    chart: { height: 900 },
    series: [
      {
        color: "green",
        name: 9500,
        type: "bar",
        data: d9500,
      },
      {
        color: "blue",
        name: 9501,
        type: "bar",
        data: d9501,
      },
      {
        color: "red",
        name: 9502,
        type: "bar",
        data: d9502,
      },
    ],
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AnalysisChart;
