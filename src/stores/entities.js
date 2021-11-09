import { combineReducers } from "redux";
import { ActivityReducer } from "./activityLinksReducer";
import editProfileReducer from "./editprofileReducer";
import socialLinksReducer from "./socialLinksReducer";
import appearanceReducer from './appearanceReducer';

export default combineReducers({
    editProfile: editProfileReducer,
    activityLinks: ActivityReducer,
    socialLinks: socialLinksReducer,
    appearance: appearanceReducer
});


