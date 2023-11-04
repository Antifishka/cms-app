import React from 'react';
import { Line } from 'react-chartjs-2';

const DummyChart = () => {
  // Дані для графіку (приклад)
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  // Опції для графіку (приклад)
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2>Dummy Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default DummyChart;