import React from 'react'
import { Bar } from 'react-chartjs-2';
import "./styles/country-list.css";

function CountryList({ socialLinksData, viewFilterData }) {


    const data = {};

    for (let i = 0; i < socialLinksData.length; i++) {
        for (let j = 0; j < socialLinksData[i].result.length; j++) {
            const country = socialLinksData[i].result[j].country;
            const click = data[country]?.click ? data[country]?.click : 0;
            data[country] = { click: click + 1 };
        }
    }

    for (let i = 0; i < viewFilterData.length; i++) {
        const country = viewFilterData[i].country;
        const click = data[country]?.click ? data[country]?.click : 0;
        const view = data[country]?.view ? data[country]?.view : 0;
        data[country] = { view: view + 1, click: click };
    }

    // console.log("Country List data  : ", data);
    // console.log("Country list keys : ", Object.keys(data));

    const result = []

    const countryKeys = Object.keys(data);
    for (let i = 0; i < countryKeys.length; i++) {
        const res = {
            country: countryKeys[i],
            clicks: data[countryKeys[i]].click,
            views: data[countryKeys[i]].view
        }

        result.push(res);
    }

    // console.log("Result : ", result);


    const state = {
        labels: result.map(country => country.country),
        datasets: [{
            label: "Views",
            data: result.map(country => country.views),
            backgroundColor: "blue"
        },

        {
            label: "Clicks",
            data: result.map(country => country.clicks),
            backgroundColor: "pink"
        }
        ],

    };
    return (
        <div className="country-list">
            <h1>Country List</h1>
            <div className="country-list-show">
                {
                    result.map((countryObject, index) => (
                        <div key={index} className="country-list-country">
                            <h4 className="country-list-title">{index + 1}. {countryObject.country}</h4>
                            <div className="country-list-states">
                                <p>{countryObject.clicks} clicks</p>
                                <p>{countryObject.views} views</p>
                                <p>{Math.round((countryObject.views / countryObject.clicks) * 100)}% CTR</p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <Bar data={state} />
        </div>
    )
}

export default CountryList
