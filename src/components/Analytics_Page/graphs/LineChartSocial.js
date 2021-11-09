import React from 'react'
import { Line } from 'react-chartjs-2';
import '../graphs/styles/social_media_linechart.css';

const backgroundColors = [
    'rgb(0,255,255)',
    'rgb(	0,0,255)',
    'rgb(255, 205, 86)',
    'rgb(54, 162, 235)',
    'rgb(201, 203, 207)',
    'rgb(127,255,0)',
    'rgb(220,20,60)',
    'rgb(255,140,0)',
    'rgb(233,150,122)',
    'rgb(255,20,147)',
    'rgb(255,192,203)',
    'rgb(112,128,144)',
    'rgb(255,99,71)',
    'rgb(0, 255, 127)',
    'rgb(0, 0,0)'
]

const options = {
    title: {
        display: true,
        text: "Custom chart",
        fontSize: 20,
        fontColor: "red",
    }
}

function LineChartSocial({ socialLinksData, label }) {
    const datasets = [];
    socialLinksData.map((dataObject, index) => {
        datasets.push({
            type: 'line',
            label: dataObject.social_media,
            data: dataObject.total,
            borderColor: backgroundColors[index],

        });
    })

    const state = {
        labels: label,
        datasets: datasets,
    };

    return (
        <div className="main-linechart">
            <h1>Social Media Statistics</h1>
            <div className="social-media-container">
                <Line
                    data={state}
                    options={options}
                    width={600}
                    height={400}
                />
            </div>
        </div>
    )
}

export default LineChartSocial
