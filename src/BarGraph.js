import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = ({ data }) => {
    console.log(data)
    const chartData = {
        labels: data[0].map(item => item.label),
        datasets: [
            {
                label: 'Scores',
                data: data[0].map(item => item.score),
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y', // This will make the chart horizontal
        scales: {
            x: {
                beginAtZero: true
            }
        },
        responsive: true,
    };

    return (
        <div>
            <Bar data={chartData} options={options} />
        </div>
    );
};

export default BarGraph;
