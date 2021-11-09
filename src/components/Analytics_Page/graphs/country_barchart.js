import {Bar} from 'react-chartjs-2';
import dataset from '../datasets/activity_data.json';

import './styles/country_barchart.css';

const CountryBarchart = () => {

    const newData = dataset.activities.map(elem => {
        return {
            views: elem.views,
            country: elem.country
        }
    });

    const finalData = newData.sort((a1,a2) => a1.country.localeCompare(a2.country));

    return (
        <div id="country-graph-container">
            
            <div id="country-graph-svg">
{/* 
                <Bar

                data={{
                    labels: finalData.map(elem => elem.country), 

                    datasets: [
                        {
                            label: "Countries",
                            data: finalData.map(elem => elem.views),
                            backgroundColor: "darkgreen"
                        }
                    ],

                    options: {
                        maintainAspectRatio: false
                    }
                }}
                
                height={400}
                width={600}
                /> */}

                <Bar

                data={{
                    labels: finalData.map(elem => elem.country),

                    datasets: [{
                        label: "Views",
                        data: finalData.map(elem => elem.views),
                        backgroundColor: "turquoise"
                    }],

                    options:{
                        maintainAspectRatio: false
                    }
                }}

                height= {400}
                width= {600}

                />
                
            </div>

        </div>
    );

} 

export default CountryBarchart;