import React, { useState } from "react";
import Chart from "react-apexcharts";
import Linechart from "./Linechart";

function Dough() {
  const datas = [
    {
      label: "In Escrow",
      value: "63",
      rate: "10.4",
    },
    {
      label: "Funds Released",
      value: "47",
      rate: "2.2",
    },
    {
      label: "Funds Disputed",
      value: "10",
      rate: "7.4",
    },
  ];
  const [ddata, setDdata] = useState([80, 30]);
  const labels = ["open", "disputed"];
  return (
    <div>
      <div className="shadow-xl rounded-lg w-[533px] px-[37px] py-[27px] ">
        <div className="my-auto">
          <h1 className="text-2xl font-bold ">Funds Status</h1>
          <h1 className="text-xs ">For this month</h1>
          <React.Fragment>
            <div className="flex justify-center">
              <Chart
                type="donut"
                width={198}
                height={198}
                series={ddata}
                options={{
                  labels: ["open", "disputed"],

                  fill: {
                    colors: ["#3A57E8", "#B2FFD6", "#B8BAC8"],
                  },
                  legend: {
                    show: false,
                  },
                  plotOptions: {
                    pie: {
                      donut: {
                        labels: {
                          show: true,
                          total: {
                            show: true,
                            showAlways: true,
                            //formatter: () => '343',
                            fontSize: "11px",
                            color: "black",
                          },
                          value: {
                            show: true,
                            fontSize: "29px",
                            fontFamily: "Helvetica, Arial, sans-serif",
                            fontWeight: 400,
                            color: "black",
                            offsetY: 16,
                            formatter: function (val) {
                              return val;
                            },
                          },
                        },
                      },
                    },
                  },

                  dataLabels: {
                    enabled: false,
                  },
                }}
              />
            </div>
          </React.Fragment>
          <div className="flex justify-around">
            {datas.map((data) => (
              <div>
                <h1 className="text-sm">{data.label}</h1>
                <h2 className="text-[10.31px]">
                  <span className="text-[28px] font-bold">{data.value}K </span>
                  USD
                </h2>
                <p className="text-[10.31px]">
                  <span className="text-green-700">{data.rate}%</span>from last
                  month
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Linechart />
    </div>
  );
}
export default Dough;
