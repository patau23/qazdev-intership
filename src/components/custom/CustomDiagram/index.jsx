import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function CustomDiagram({ labels, dataset }) {
    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top', },
            title: { display: false, },
        },
    };

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Weather',
                data: labels.map((_, index) => dataset[index]),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <Line
            updateMode='resize'
            options={options}
            data={data}
        />
    );
}

export default CustomDiagram;