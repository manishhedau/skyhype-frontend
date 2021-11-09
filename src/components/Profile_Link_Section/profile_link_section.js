import './profile_link_section.css';
import { Tooltip } from '@mui/material';
import { useState } from 'react';

const ProfileLinkSection = (props) => {

    const [text, setText] = useState("Copy");

    const handleClick = (e) => {
        setText("Copied!");
        console.log(e.target.innerHTML);
        navigator.clipboard.writeText(e.target.innerHTML)
    }

    return (
        <div className="profile-link-section">
            <div className="profile-link-container">

                <Tooltip title={<h6 style={{width: "100%"}}>{text}</h6>}>
                    <h5 onClick={handleClick}>https://skyhype.in/:userId</h5>
                </Tooltip>

                <i className="fa-solid fa-share-nodes"></i>
            </div>
        </div>
    );
}

export default ProfileLinkSection;