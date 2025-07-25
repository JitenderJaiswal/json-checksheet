import React, { useEffect } from 'react';
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
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { GraphHead } from './../GraphHeading';
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
  LinearScale
);
interface IProps {
  xTitle?: any;
  yTitle?: any;
  title?: any;
  datas?: any;
  labels?: any;
  type?: any;
  headTitle?: any;
  borderColor?: any;
  borderWidth?: any;
  fill?: any;
  stepSize?: any;
  borderTitle?: any;
  width?: any;
  margin?: any;
  otherType?: any;
  otherLabel?: any;
  otherData?: any;
  otherFill?: any;
  otherBorderColor?: any;
  otherBorderWidth?: any;
  backgroundColor?: any;
  multiData?: any;
  headTitles?: any;
}

const Chart = ({
  xTitle,
  yTitle,
  datas,
  labels,
  type,
  headTitle,
  borderColor,
  borderWidth,
  fill,
  stepSize,
  borderTitle,
  width,
  margin,
  otherType,
  otherLabel,
  otherData,
  otherFill,
  otherBorderColor,
  otherBorderWidth,
  backgroundColor,
  multiData,
  headTitles,
}: IProps) => {
  let backgroundColors;
  if (multiData) {
    backgroundColors = generateRandomColors(datas?.length);
  }
  const options = {
    plugins: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: '',
      },
    },
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: xTitle,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: stepSize,
        },
        title: {
          display: true,
          text: yTitle,
        },
      },
    },
  };
  const datasets = [];
  if (multiData) {
    for (let i = 0; i < datas.length; i++) {
      datasets.push({
        type: type,
        label: headTitles[i],
        fill: fill,
        borderColor: backgroundColors,
        backgroundColor: backgroundColors,
        borderWidth: borderWidth,
        data: datas[i],
      });
    }
  } else {
    datasets.push({
      type: type,
      label: headTitle,
      fill: fill,
      borderColor: borderColor,
      backgroundColor: backgroundColor,
      borderWidth: borderWidth,
      data: datas,
    });
  }
  if (otherType) {
    datasets.push({
      type: otherType,
      label: otherLabel,
      fill: otherFill,
      borderColor: otherBorderColor,
      data: otherData,
      borderWidth: otherBorderWidth,
    });
  }
  const data = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <div>
      <GraphHead style={{ width }}>
        <span>{borderTitle}</span>
        <Bar data={data} options={options} />
      </GraphHead>
    </div>
  );
};

export default Chart;
