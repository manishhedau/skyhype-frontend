import DoughnutChartDevice from './graphs/DoughnutChartDevice';
import LineChartSocial from './graphs/LineChartSocial';
import BarChart from './graphs/activity_barchart_modified';
import ActivityLinkLinechart from './graphs/activity_links_linechart';
import ActivityLinkList from './activity_link_list';

import './styles/analytics_page.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { addDays } from 'date-fns';
import { Slider } from '@mui/material';
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';

import calcLifetimeStats from './logic_functions/calculate_lifetime_stats';
import filterSocialLinksData, { giveLabel } from './logic_functions/fiter_social_links';
import filterViewDetailsData from "./logic_functions/filter_view_details";
import filterJoinMyClubClickDetails from "./logic_functions/filter_joinmyclub_click_details";
import CountryList from './CountryList';
import JoinMyClubBarChart from './graphs/JoinMyClubBarChart';

import { useSelector } from "react-redux";


const AnalyticsPage = () => {
    const socialLinks = useSelector(state => state.entities.socialLinks);
    const editProfile = useSelector(state => state.entities.editProfile.editprofile);

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const lifetimeStats = calcLifetimeStats();
    const socialLinksData = filterSocialLinksData(state, socialLinks);
    const label = giveLabel(state);
    const viewDetails = editProfile?.profile_link?.view_details;
    const viewFilterData = filterViewDetailsData(state, viewDetails);
    const joinMyClubClickDetails = editProfile?.join_club?.click_details;
    const [
        joinMyyClubClickDetailsFilterData,
        dateWiseFilterJoinMyClubData
    ] = filterJoinMyClubClickDetails(state, joinMyClubClickDetails);
    // console.log("Join my club click details filter data : ", joinMyyClubClickDetailsFilterData);

    // console.log("View details filter : ", viewFilterData);

    // const [dayRange, setDayRange] = useState([
    //     {
    //         primary: {
    //             startDate: new Date(),
    //             endDate: addDays(new Date(),1),
    //             key: 'selection',
    //         }
    //     }
    // ]);





    // console.log("Date picker : ", state);
    return (
        <div id="analytics-page">

            <section id="numerical-stats-section">

                <h1>Lifetime Analytics</h1>

                <div className="stats-container">

                    <div className="individual-numerical-stats">
                        <p><span style={{ fontSize: "3.2rem", color: "lightblue" }}>.</span>Views:</p>
                        <h3>{lifetimeStats.views}</h3>
                    </div>

                    <div className="individual-numerical-stats">
                        <p><span style={{ fontSize: "3rem", color: "orange" }}>.</span>Clicks:</p>
                        <h3>{lifetimeStats.clicks}</h3>
                    </div>

                    <div className="individual-numerical-stats">
                        <p><span style={{ fontSize: "3rem", color: "purple" }}>.</span>Average CTR:</p>
                        <h3>{`${lifetimeStats.averageCtr}%`}</h3>
                    </div>

                </div>

            </section>

            <div id="date-range-selection-section" style={{ width: "100%" }}>

                <div id="duration-selector">
                    <h5>1</h5>
                    <Slider size="small" defaultValue={3} min={1} max={7} marks />
                    <h5>7</h5>
                </div>

                <DateRangePicker
                    onChange={item => setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    minDate={addDays(new Date(), -30)}
                    months={2}
                    ranges={state}
                    direction="horizontal"
                />
            </div>

            <section id="activity-stats-section">

                <h1>Activity</h1>

                <div className="stats-container">

                    <div className="individual-numerical-stats">
                        <p><span style={{ fontSize: "3.2rem", color: "lightblue" }}>.</span>Views:</p>
                        <h3>{lifetimeStats.views}</h3>
                    </div>

                    <div className="individual-numerical-stats">
                        <p><span style={{ fontSize: "3rem", color: "orange" }}>.</span>Clicks:</p>
                        <h3>{lifetimeStats.clicks}</h3>
                    </div>

                    <div className="individual-numerical-stats">
                        <p><span style={{ fontSize: "3rem", color: "purple" }}>.</span>Average CTR:</p>
                        <h3>{`${lifetimeStats.averageCtr}%`}</h3>
                    </div>

                </div>

                <BarChart />
            </section>

            {/* <section id="activity-stats-section"> */}
            <LineChartSocial socialLinksData={socialLinksData} label={label} />
            {/* </section> */}
            {/* <section id="activity-stats-section"> */}
            <DoughnutChartDevice />
            {/* </section> */}

            <CountryList socialLinksData={socialLinksData} viewFilterData={viewFilterData} />
            <JoinMyClubBarChart label={label} dateWiseFilterJoinMyClubData={dateWiseFilterJoinMyClubData} />

            <div id="activity-link-stats-section">
                <h1>Activity Links Statistics</h1>
                {/* <ActivityLinkLinechart /> */}
                <h6 style={{ width: "70%", textAlign: "center" }}>Selected Links</h6>
                <ActivityLinkList />
            </div>
        </div>
    );
}

export default AnalyticsPage;

