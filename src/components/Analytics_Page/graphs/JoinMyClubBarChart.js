import React from 'react'
import { Bar } from 'react-chartjs-2';

function JoinMyClubBarChart({ label, dateWiseFilterJoinMyClubData }) {



    const state = {
        labels: label,
        datasets: [{
            label: "Join",
            data: dateWiseFilterJoinMyClubData,
            backgroundColor: "skyblue"
        }]
    };
    return (
        <div>
            <h1>Join My Club Graph</h1>
            <Bar data={state} />
        </div>
    )
}

export default JoinMyClubBarChart
