import axios from 'axios';

const API = axios.create({ baseURL: 'https://skyhype-backend.herokuapp.com' });

const fetUser = (id) => API.get(`/dashboard/${id}`);

// const fetchActivityLists = (id) => axios.get(`${url}/dashboard/update-activity-links/${id}`);
// const fetchSocialLinks = (id) => axios.get(`${url}/dashboard/update-social-links/${id}`);
// const fetchUserProfile = (id) => axios.get(`${url}/user/${id}`);

export const sendSignup = (signupData) => {
    console.log("Sending the data...");
    return API.post("/audit/user", signupData);
}

export const sendSocialLink = async (socialLinks, id) => {
    console.log("send social link function")
    try {
        const res = await API.put(`/dashboard/update-social-links/${id}`, { socialLinkList: socialLinks });
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
}

export const sendEditProfile = async (editProfile, id) => {
    console.log("send social link function")
    try {
        const res = await API.put(`/dashboard/${id}`, editProfile);
        console.log(res);
    }
    catch (error) {
        console.log(error);
    }
}
export default fetUser;

export const getUserDetails = async (userId) => {
    return await API.get(`/user/${userId}`);
}

export const callIPInfo = async () => {
    try {
        // calling the ip info service for getting view user information
        const res = await axios.get("https://ipinfo.io/157.34.181.5?token=ebdf35332c5f17")
        const data = await res.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}

// sending profile view info
export const sendViewInfo = async (ipInfo, uaParserInfo, userId) => {
    try {
        const res = await API.put(`/user/view/${userId}`, { ...ipInfo, ...uaParserInfo, date: new Date() });
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

// sending activity link click info to backend
export const sendActivityLinkClickInfo = async (activityLink, clickInfo, userId) => {
    try {
        const res = await API.put(`/user/activity-link/${userId}`, { activityLink: activityLink, clickInfo: clickInfo });
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}


// sending social link click info to backend
export const sendSocialLinkClickInfo = async (socialLink, clickInfo, userId) => {
    try {
        const res = await API.put(`/user/social-link/${userId}`, { socialLink: socialLink, clickInfo: clickInfo });
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export const sendJoinClickInfo = async (clickInfo, userId) => {


    try {
        const res = await API.put(`/user/join-club/${userId}`, clickInfo);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export const sendJoinClubUserInfo = async (userInfo, userId) => {
    try {
        console.log("User Info : ", userInfo);
        const res = await API.put(`/user/join-user-list/${userId}`, userInfo);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}