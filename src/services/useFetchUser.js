import { useEffect, useState, useCallback } from 'react'
import { getSocialLinks } from '../stores/socialLinksReducer';
import { addProfileData } from '../stores/editprofileReducer';
import { updateStyles } from '../stores/appearanceReducer';
import { useDispatch } from 'react-redux';
import getUser from "./apiEndpoint";
import { initializeActivityList } from '../stores/activityLinksReducer';


function useFetchUser(id) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState(null);

    const dispatch = useDispatch();

    const fetchUserData = useCallback(async () => {
        try {
            setIsLoading(true);
            const user = await getUser(id);
            // console.log("useFetchUser Data: ", user.data);

            setIsLoading(false);
            // console.log("User data : ", user.data);

            dispatch(getSocialLinks({ socialLinks: user.data.social_link_list }))

            dispatch(addProfileData({
                username: user.data.username,
                fullname: user.data.fullname,
                description: user.data.description,
                designation: user.data.designation,
                category: user.data.category,
                join_club: user.data.join_club,
                profile_link: user.data.profile_link,
            }))


            // dispatch(initializeActivityList(activity_links_list));
            dispatch(initializeActivityList(user.data.activity_links_list));

            dispatch(updateStyles({
                background: user.data.styles.background,
                font: user.data.styles.font,
            }))


            setData(user.data);

        }
        catch (error) {
            setIsLoading(false);
            // console.log("error : ", error);
            setError("got an error");
            // if (error.response && error.response.status === 400) {
            console.log("User Fetching error : ", error.response.data);
            // }
        }
    }, [id, dispatch])

    useEffect(() => {
        fetchUserData();
    }, [fetchUserData])

    return {
        isLoading: isLoading,
        error: error,
        data: data,
    }
}

export default useFetchUser
