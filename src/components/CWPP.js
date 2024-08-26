import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CWPP = (props) => {
    const labels= props.data.map((eachValue) => eachValue.title);
    const value= props.data.map((eachValue) => eachValue.value);
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Sales',
        data: value,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default CWPP;
