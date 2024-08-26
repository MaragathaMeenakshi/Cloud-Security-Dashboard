import React from 'react'
import PropTypes from 'prop-types'
import '../style/cspmexcutive.css'
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, Title);

const CSPMExcutive = (props) => {
  const labels= props.data.map((eachValue) => eachValue.title);
  const color= props.data.map((eachValue) => eachValue.color);

  const totalValue = props.data.reduce((acc, current) => acc + current.value, 0);

  const percentage= props.data.map((eachValue) =>{
    let value = (eachValue.value/totalValue)*100;
    return value;
  });


  const data = {
    labels: labels,
    datasets: [
      {
        data: percentage,
        backgroundColor: color,
        hoverBackgroundColor: color,
        width: 100,
      },
    ],
  };

  const options = {
    radius: '60%',
    responsive: true,
    elements: {
      arc: {
        borderWidth: 2,
        circumference:1
      },
    },
    maintainAspectRatio: false,
    cutout: '70%',
    layout: {
      padding: {
        top: 5,
        left: 10,
        bottom: 5
      },
    },
    plugins: {
      title: {
        display: true,
        text: props.title,
        fullSize: false,
        align: 'start',
        font: {
          size: 12,
          weight: 'bold',
        },
        padding: {
          top: 10,
          left: 30,
        },
      },
      legend: {
        display: true,
        position: 'right',
        margin: 0,
        align: 'center',
        labels: {
          boxWidth: 20,
          padding: 15,
          usePointStyle: true,
          textAlign: 'left',
        },
      },

    }
  };
  return (
    <>
      <Doughnut data={data} options={options} />
      <div className="donut-inner">
        <h3>{totalValue}</h3>
        <span>Total</span>
      </div>
    </>
  )
}

CSPMExcutive.propTypes = {}

export default CSPMExcutive;