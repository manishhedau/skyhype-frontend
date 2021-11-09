import { Tooltip } from "@mui/material";
import './styles/activity_link.css';
import { useState } from 'react';

import { useDispatch, } from 'react-redux';
import { deleteActivity } from '../../stores/activityLinksReducer';

import add_image from '../assets/activity_link/add_image.png';

const Activity = (props) => {

    const { activityKey, url: urlValue, title: titleValue, key, deleteLink } = props;

    const dispatch = useDispatch();

    // const [thumbnail, setThumbnail] = useState("");
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const deleteData = (e) => {
        console.log(e.target);
        console.log("Data dispatched");

        console.log("Activity Deleted");
        dispatch(deleteActivity({ activityKey }));
        deleteLink(key);
    }

    const handleUrl = (e) => {
        setUrl(e.target.value);
    }

    return (

        <div className="activity-link">

            <form className="activity-form">

                {/*Image Input Section*/}
                <div className="image-section">
                    {/* <h4>Add Image</h4> */}

                    <div className="input-container">

                        <Tooltip title={<h6>Add Image</h6>} placement="top">
                            <label htmlFor="add-image" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "auto" }}>
                                <img style={{ height: "80%", width: "40%" }} src={add_image} alt="person profile" />
                            </label>
                        </Tooltip>

                        <input id="add-image" type="file" accept="image/*" hidden={true} />

                    </div>

                    {/* <h1>Image Input</h1> */}
                </div>

                {/*Input Section for Title, URL, Spotlight and others*/}
                <div className="other-inputs">

                    <div className="text-inputs">
                        <input onChange={handleTitle} type="text" placeholder="Title" value={title ? title : titleValue} />
                        <input onChange={handleUrl} type="text" placeholder="URL" value={url ? url : urlValue} />
                    </div>

                    <div className="link-controls">
                        {/* <FormControlLabel control={<Switch size="small" color="error"/>} label={<p>Spotlight</p>} labelPlacement="bottom"/> */}
                        <i className="fa-solid fa-trash" onClick={deleteData} id="delete-button" style={{ color: "black" }}></i>
                        {/* <i className="fa-solid fa-floppy-disk" id="save-button" onClick={dispatchData} style={{color: "steelblue"}}></i> */}
                        <i className="fa-solid fa-calendar" style={{ color: "black" }}>{/*<input type="date"/>*/}</i>
                    </div>

                </div>

            </form>

        </div>
    );
}

export default Activity;