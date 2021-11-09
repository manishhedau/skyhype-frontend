import {Line} from 'react-chartjs-2';
import dataset from '../datasets/activity_data.json';
import './styles/activity_links_linechart.css';

import { useRef, useEffect } from 'react';

const ActivityLinkLinechart = () => {

    const weeklyData = useRef([0,0,0,0,0,0,0]);

    const newData = dataset.activities.map(elem => {

        return {
            date: elem.date,
            title: elem.activity.title,
            views: elem.views,
            view_details: elem.activity.view_details
        }
    }).sort((e1,e2) => e1.views - e2.views).reverse();

    let getWeeklyData = (refData) => {
        let tempData = [0,0,0,0,0,0,0];

        refData.forEach(elem => {
            tempData[new Date(elem.date).getDay()]++
        });

        return tempData;
    }

    const lineData = newData.map(elem => {
        console.log(elem.view_details.length);
        return {
            label: elem.title,
            data: getWeeklyData(elem.view_details),
            // total_views: elem.view_details.length
        }
    });

    console.log(lineData);

    

     let tempData = [0,0,0,0,0,0,0];

     newData.forEach(elem => {
         tempData[new Date(elem.date).getDay()]++
     });

    weeklyData.current = [...tempData];

    useEffect(() => {
        console.log("useEffect Running");
        
        console.log("current data");
        console.log(weeklyData)
    })
    
    return (

        <div id="activity-link-linechart">

            <div id="activity-linechart-svg">

                <Line
                    data={{
                        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        datasets: lineData
                    }}

                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        </div>
    );
}

export default ActivityLinkLinechart;