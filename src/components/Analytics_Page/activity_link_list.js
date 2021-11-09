import dataset from './datasets/activity_data.json';
import colors from './datasets/colors.json';
import {useEffect} from "react";

import ActivityLinkTile from './graphs/activity_link_tile';

import './styles/activity_link_list.css';

let colorList = [];

const ActivityLinkList = () => {

    const newData = dataset.activities.map(elem => {

        return {
            title: elem.activity.title,
            image: elem.activity.image,
            views: elem.views,
            date: elem.date,
            view_details: elem.activity.view_details
        }
    });

    const finalData = newData.sort((a1,a2) => a1.views-a2.views).reverse();
    console.log(finalData);

    return (

        <div id="activity-link-stats-list">
            {finalData.map((elem,ind) => {

                const presentLineColor = colors[Math.floor(Math.random()*colors.length)].hexString;
                colorList.push(presentLineColor);
                
                return (
                    <ActivityLinkTile key={ind} presentLineColor={presentLineColor} ind={ind} elem={elem}/>
                );
            })}
        </div>
    );
}

export default ActivityLinkList;
export {colorList}