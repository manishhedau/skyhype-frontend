import Activity from "./activity_link";
import axios from 'axios';
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { initializeActivityList } from "../../stores/activityLinksReducer";
import { useDispatch } from "react-redux";

const ActivityList = (props) => {

    const {currentList, deleteLink} = props;

    return (
        <div className="activity-list">
            {
                currentList.map((link,index) => {
                    return <Activity key={index} deleteLink={deleteLink} tabindex={index} activityKey={index} title={link.title} url={link.link}/>
                })
            }
        </div>
    );
}

export default ActivityList;