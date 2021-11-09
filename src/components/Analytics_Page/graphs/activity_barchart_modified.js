import { Bar } from 'react-chartjs-2';
import dataset from '../datasets/activity_data.json';
import './styles/activity-barchart.css';

const BarChart = () => {

    const newData = [...dataset.activities].map(elem => elem.activity);

    // const filterDates = (refData) => {
    //     console.log(datesDOM);
    // }

    // filterDates();


    const finalData = newData.sort((a1, a2) => {
        const d1 = new Date(a1.date);
        const d2 = new Date(a2.date);

        return d1.getTime() - d2.getTime();
    })

    let getWeeklyData = (refData) => {
        let tempData = [0,0,0,0,0,0,0];

        console.log(refData);

        refData.forEach(activity => {
            activity.view_details.forEach(click => {
                tempData[new Date(click.date).getDay()]++
            })
        })

        console.log(tempData);

        return tempData

        // refData.forEach(elem => {
        //     tempData[new Date(elem.date).getDay()]++
        // });

        // return tempData;
    }

    getWeeklyData(finalData)

    return (
        <div className="main-barchart">

            <div className="graph-container">
                <Bar

                    data={{
                        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],

                        datasets: [{
                            label: "Views",
                            data: getWeeklyData(finalData),//finalData.map(elem => elem.views),
                            backgroundColor: "lightblue"
                        },

                        {
                            label: "Clicks",
                            data: getWeeklyData(finalData),
                            backgroundColor: "orange"
                        }
                        ],

                        options: {
                            maintainAspectRatio: false
                        }
                    }}

                    height={400}
                    width={600}

                />

            </div>
        </div>
    );
}

export default BarChart;