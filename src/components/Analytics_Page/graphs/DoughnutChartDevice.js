import React from 'react'

import socialMediaData from "../datasets/social_media.json";
import profileData from "../datasets/profile.json";

import { Doughnut } from 'react-chartjs-2';

import './styles/device_piechart.css';

/*
1. filter the profile data based on the date --> View data
2. filter the social data based based on the date --> click data
3. filter the activity data based on the date --> click data
*/


/*
1. find out all the click and views based on desktop and tab, mobile devices
*/

const profileObjectData = profileData.profile

const totalViews = profileObjectData.length;
let totalClick = 0;
console.log(totalClick);

const data = [
    {
        device_type: 'desktop',
        click: 100,
        view: 0,
        // clickPercent: this.click / totalClick,
        viewPercent: function () {
            return this.view / totalViews
        }
    },
    {
        device_type: 'tab',
        click: 100,
        view: 0,
        // clickPercent: this.click / totalClick,
        viewPercent: function () {
            return this.view / totalViews
        }
    },
    {
        device_type: 'mobile',
        click: 100,
        view: 0,
        // clickPercent: this.click / totalClick,
        viewPercent: function () {
            return this.view / totalViews
        }
    }
]


// counting views based on device types
profileObjectData.forEach((profileObject) => {
    if (profileObject.device === "desktop") {
        data[0].view++;
    } else if (profileObject.device === "tab") {
        data[1].view++;
    }
    else {
        data[2].view++;
    }
})

console.log("profileObjectData : ", data);


// now count clicks based on device type
const socialLinkList = socialMediaData.social_link_list;
socialLinkList.forEach(function (socialLink) {

    totalClick += socialLink.click_details.length;
    socialLink.click_details.forEach((click_detail) => {
        if (click_detail.device === "desktop") {
            data[0].click++;
        } else if (click_detail.device === "tab") {
            data[1].click++;
        }
        else {
            data[2].click++;
        }
    })
})


const deviceLabel = [];

data.forEach((deviceObject) => {
    deviceLabel.push(deviceObject.device_type);
});

const viewPercents = [];
data.forEach((deviceObject) => {
    viewPercents.push(deviceObject.viewPercent());
});


const state = {
    labels: deviceLabel,
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
            ],
            data: viewPercents,
        }
    ]
}


const options = {
    //responsive: true,
    maintainAspectRatio: false,
    title: {
        display: true,
        text: "Custom chart",
        fontSize: 20,
        fontColor: "red",
    }
}

function DoughnutChartDevice() {
    return (
        <div className="main-barchart">
            <h1>Device Analytics</h1>
            <div className="doughtnut-container">
                <Doughnut
                    data={state}
                    options={options}
                    width={300}
                    height={300}
                />
            </div>
        </div>
    )
}

export default DoughnutChartDevice
