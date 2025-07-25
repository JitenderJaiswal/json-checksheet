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
  height?: any;
  style?: any;
}

const BarLineChart = ({
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
  height,
  style,
}: IProps) => {
  let backgroundColors;
  if (multiData) {
    backgroundColors = generateRandomColors(datas?.length);
  }
  
  const options: any = {
    plugins: {
      // Explicitly disable data labels
      datalabels: {
        display: false,
      },
      // Alternative way to disable if using chartjs-plugin-datalabels
      // datalabels: false,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: '',
      },
      // Ensure tooltip is enabled but labels on points are disabled
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    // Disable animations that might cause label artifacts
    animation: {
      duration: 0,
    },
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
    // Disable point labels globally for this chart
    elements: {
      point: {
        // Keep points visible but without labels
        radius: 3,
        hoverRadius: 5,
      },
      line: {
        tension: 0.1,
      },
    },
  };
  
  const datasets: any = [];
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
        // Explicitly disable data labels for this dataset
        datalabels: {
          display: false,
        },
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
      // Explicitly disable data labels for this dataset
      datalabels: {
        display: false,
      },
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
      // Explicitly disable data labels for the target line
      datalabels: {
        display: false,
      },
    });
  }
  
  const data: any = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <div>
      <GraphHead style={{ width, margin, height, ...style }}>
        <p>{borderTitle}</p>
        <Bar data={data} options={options} />
      </GraphHead>
    </div>
  );
};

export default BarLineChart;