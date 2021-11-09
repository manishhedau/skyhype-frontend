import './styles/activities_page.css';
import ProfileLinkSection from '../Profile_Link_Section/profile_link_section';
import AddLinkButton from './add_link_button';
import ActivityList from './activity_list';

import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { initializeActivityList, addAcitivityLink } from '../../stores/activityLinksReducer';
import { useState, useEffect } from 'react';

const ActivityPage = (props) => {

    const dispatch = useDispatch();
    const [currentList,setCurrentList] = useState(useSelector((state) => state.entities.activityLinks));
    console.log(currentList);

    // const getUserData = async () => {
    //     const List = await axios.get('http://localhost:8080/dashboard/update-activity-links/61815b950cda90d1d126f33b').then(res=> [...res.data.activity_links_list]);
    //     console.log(List);
    //     dispatch(initializeActivityList(List));
    // }

    // useEffect(() => {
    //     //getUserData();

    //     return async () => {
    //         //await axios.put('http://localhost:8080/dashboard/update-activity-links/61586892e780f1f06b97b169', currentList);
    //     }
    // },[]);

    
    
    console.log("current list: ");
    console.log(currentList);

    const addLink = async (e) => {
        e.preventDefault();
        
        setCurrentList(prevList => {
            
            const newLink = {
                link: "",
                title: "",
                spotlight: "",
                schedule: new Date().toString(),
                click_count: 0,
                isActive: false
            }   

            dispatch(addAcitivityLink({newLink}))
            return [newLink, ...prevList];
        });

        try
        {
            await axios.put('http://localhost:8080/dashboard/update-activity-links/61815b950cda90d1d126f33b', {activityLinkList: currentList});
        }
        catch(err)
        {
            console.log(err);
        }

    }

    const deleteLink = async (index) => {

        const tempList = [...currentList];
        tempList.splice(index, 1);

        setCurrentList(tempList);
        console.log("List after deletion: \n", currentList);

       // await axios.put('http://localhost:8080/dashboard/update-activity-links/61586892e780f1f06b97b169', currentList);
    }

    return(
            <div className="activities-page">

                <ProfileLinkSection/>
                
                <div className="add-link-controls">
                    <AddLinkButton addLink={addLink}/>
                </div>

                <ActivityList currentList={currentList} deleteLink={deleteLink}/>
        
            </div>
    );
}

export default ActivityPage;