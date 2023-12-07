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
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: 'white' // Sets the x-axis label color to white
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Optional: to change grid line color
                }
            },
            y: {
                ticks: {
                    color: 'white' // Sets the y-axis label color to white
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)' // Optional: to change grid line color
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white' // Sets the legend label color to white
                }
            }
        },
        responsive: true
    };

    return (
        <div className="chart-container">
            <Bar data={chartData} options={options} />
        </div>
    );
};
export default BarGraph;
