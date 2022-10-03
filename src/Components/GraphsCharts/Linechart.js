import React from "react";
import Chart from "react-apexcharts";

function Linechart() {
  const series = [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 23, 25, 356],
    },
    {
      name: "Laptops",
      data: [10, 41, 355, 21, 39, 72, 49, 81, 78, 45, 21, 67],
    },
  ];

  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        <Chart
          type="line"
          width={573}
          height={303}
          series={series}
          options={{
            legend: {
              position: "top",
              horizontalAlign: "right",
            },
            colors: ["#165DFF", "#B2FFD6"],

            chart: {
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default Linechart;
