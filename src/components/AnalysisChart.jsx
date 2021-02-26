import React from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AnalysisChart = ({ categories, series }) => {
  console.log(categories, series);
  const options = {
    title: {
      text: "",
    },
    credits: { enabled: false },
    xAxis: {
      categories: categories,
    },
    yAxis: {
      title: {
        text: "Процент влияние",
      },
    },
    legend: { enabled: false },
    chart: { height: 900 },
    plotOptions: {
      series: {
        stacking: "normal",
      },
    },
    series: series,
  };
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AnalysisChart;
