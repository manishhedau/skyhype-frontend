import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector, } from "react-redux";

import SocialMediaLink from '../components/SocialMediaLink'
import { addSocialLinks, changeSocialLink, removeSocialLink, toggleIsActive } from '../stores/socialLinksReducer';
import { sendSocialLink } from "../services/apiEndpoint";

import "./SocialLink.css";
const iconsObject = {
    youtube: "fa-youtube",
    instagram: "fa-instagram",
    facebook: "fa-facebook",
    whatsapp: "fa-whatsapp",
    twitter: "fa-twitter",
    linkedin: "fa-linkedin",
    tiktok: "fa-tiktok",
    discord: "fa-discord",
    snapchat: "fa-snapchat",
    email: "fas fa-envelope-square",
}

const social_links = [
    {
        link: "",
        social_media: "facebook",
        isActive: false
    },
    {
        link: "",
        social_media: "youtube",
        isActive: false
    },
    {
        link: "",
        social_media: "instagram",
        isActive: false
    },
    {
        link: "",
        social_media: "twitter",
        isActive: false
    },
    {
        link: "",
        social_media: "linkedin",
        isActive: false
    },
    {
        link: "",
        social_media: "whatsapp",
        isActive: false
    },
    {
        link: "",
        social_media: "snapchat",
        isActive: false
    },
    {
        link: "",
        social_media: "email",
        isActive: false
    },
    {
        link: "",
        social_media: "discord",
        isActive: false
    },
    {
        link: "",
        social_media: "tiktok",
        isActive: false
    }
]


export default function SocialLink() {
    const [defaultSocialLink] = useState(social_links);
    const [isChanged, setIsChanged] = useState(true);
    const [numberOfActiveLinks, setNumberOfActiveLinks] = useState(0);

    const socialLinks = useSelector(state => state.entities.socialLinks);
    const dispatch = useDispatch();

    const initalFunction = useCallback(() => {
        let count = 1;
        for (let i = 0; i < socialLinks.length; i++) {
            if (socialLinks[i].isActive === true) {
                count++;
            }
        }
        setNumberOfActiveLinks(count);
    }, [socialLinks])

    useEffect(() => {
        initalFunction();
    }, [initalFunction]);


    const handleLinkChange = (updateUsername, linkObject) => {
        setIsChanged(false);
        // const index = findIndex(linkObject);
        // socialLinks[index].link = updateUsername;
        // setSocialLinks(() => [...socialLinks]);

        const index = socialLinks.findIndex((socialLink) => socialLink.social_media === linkObject.social_media);
        // console.log("index :", index);

        if (socialLinks[index] === undefined) {
            // console.log("inside the if statement");
            // linkObject.link = updateUsername;
            dispatch(addSocialLinks({ socialLink: linkObject, link: updateUsername }));
            return;
        }



        dispatch(changeSocialLink({ socialLink: linkObject, link: updateUsername }))
    }

    const handleIsActive = (isActive, linkObject) => {
        if (numberOfActiveLinks > 8 && isActive) {
            console.log("You can't add more than 5 links in profile.");
            return;
        }
        else {
            if (isActive) {
                setNumberOfActiveLinks(numberOfActiveLinks => numberOfActiveLinks + 1);
            }
            else {
                setNumberOfActiveLinks(numberOfActiveLinks => numberOfActiveLinks - 1);
            }
            setIsChanged(false);
            // const index = findIndex(linkObject);
            // socialLinks[index].isActive = !socialLinks[index].isActive;
            // setSocialLinks(() => [...socialLinks]);
            dispatch(toggleIsActive({ socialLink: linkObject }));
        }
    }

    const handleTrashButtton = (linkObject) => {
        setIsChanged(false);
        // const index = findIndex(linkObject);
        // socialLinks[index].link = "";
        // socialLinks[index].isActive = false;
        // setSocialLinks(() => [...socialLinks]);

        dispatch(removeSocialLink({ socialLink: linkObject }));
    }

    const handleSaveButton = (event) => {
        console.log(socialLinks);
        event.preventDefault();
        sendSocialLink(socialLinks, "61815b950cda90d1d126f33b");

    }


    const check = (linkObject) => {
        const index = socialLinks.findIndex((socialLink) => socialLink.social_media === linkObject.social_media);
        console.log("check index : ", index);
        console.log("check object : ", linkObject);

        if (socialLinks[index] === undefined) {
            return linkObject;
        }

        return socialLinks[index];
        // return socialLinks[index] !== undefined ? socialLinks[index] : linkObject;
    }
    return (
        <div className="social_section">
            <div className="social_links_heading">
                <p className="heading3 section_heading">Social Media Icons
                </p>
            </div>
            <form action="" className="social_links_form" onSubmit={handleSaveButton}>

                <div className="social_links_container">
                    {
                        defaultSocialLink.map((socialLink, index) => (
                            <div key={index}>
                                <SocialMediaLink
                                    socialLink={check(socialLink)}
                                    icon={iconsObject[socialLink.social_media]}
                                    onLinkChange={(e) => handleLinkChange(e.target.value, socialLink)}
                                    onIsActive={(isActive) => handleIsActive(isActive, socialLink)}
                                    onTrashButton={() => handleTrashButtton(socialLink)} />
                            </div>
                        ))
                    }
                </div>
                <button className="social_save_btn" disabled={isChanged}>Save Changes</button>
            </form >
        </div >

    )
}
