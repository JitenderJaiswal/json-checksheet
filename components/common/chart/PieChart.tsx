// PieChart.js

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LineController,
  ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { GraphHead } from '../GraphHeading';
import { generateRandomColors } from './helper/color';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  LineController,
  LinearScale,
  ArcElement
);
const PieChart = ({
  borderTitle,
  width,
  height,
  margin,
  labels,
  datas,
  headTitle,
  hoverOffset,
  position,
  marginTop,
}: any) => {
  const backgroundColors = generateRandomColors(datas?.length);
  const data = {
    labels: labels,
    datasets: [
      {
        label: headTitle,
        data: datas,
        backgroundColor: backgroundColors,
        hoverOffset: hoverOffset,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: {
        position: position,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return `${tooltipItem.label}: ${tooltipItem.formattedValue}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <GraphHead style={{ width, margin, height, marginTop }}>
        <p>{borderTitle}</p>
        <Pie data={data} options={options} />
      </GraphHead>
    </div>
  );
};

export default PieChart;
