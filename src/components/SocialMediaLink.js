
import React, { useState } from 'react'
import "./SocialMediaLink.css";



function SocialMediaLink({ icon, socialLink, onLinkChange, onIsActive, onTrashButton }) {
    const { isActive, link } = socialLink;
    const [error, setError] = useState(false);
    // const [isChecked, setIsChecked] = useState(isActive);

    // console.log(onLinkChange);
    // console.log(onIsActive);
    // console.log(onTrashButton);

    const handleToggle = () => {
        if (link.length === 0) {
            setError(true);
            return;
        }
        onIsActive(!isActive);
    }

    const handleChange = (e) => {
        setError(false);
        onLinkChange(e);
    }

    return (
        <div className="social_link">
            <div className="social_container">
                <i class={`fab ${icon} icon`}></i>
                {/* <i class="fab {icon} icon"></i> */}

                <input type="text" className="social_link_input" value={link} placeholder="" onChange={handleChange} />
                {/* <Switch /> */}
                <div class="add-remove">
                    {/* <button class="btn"> */}
                    <label class="switch">
                        <input type="checkbox" onClick={handleToggle} checked={isActive} />
                        <span class="slider round"></span>
                    </label>
                    {/* </button> */}
                </div>

                <i class="fas fa-trash" id="delete" onClick={onTrashButton}></i>
            </div >
            {error && <p className="social_error">Please fill the name</p>}
        </div>

    )
}

export default SocialMediaLink
