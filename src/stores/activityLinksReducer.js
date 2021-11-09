import { createSlice } from '@reduxjs/toolkit'


const initialState = [];

// link: { type: String, default: "" },
// title: { type: String, default: "" },
// thumbnail: { type: Object },
// spotlight: Boolean,
// schedule: Date,
// click_count: { type: Number, default: 0 },
// isActive: { type: Boolean, default: false }


const activityLinksSlice = createSlice({
    name: "activitylinks",
    initialState: initialState,
    reducers: {
        initializeActivityList: (state, action) => {
            console.log("Activity Link reducer : ", action.payload);
            const list = action.payload;
            state.push(...list);
        },
        addAcitivityLink: (state, action) => {
            const { title, url, spotlight } = action.payload;
            const addedActivity = { title, url, spotlight }
            state.unshift(addedActivity);
            return state;
        },
        changeActivity: (state, action) => {
            const { title, url, spotlight } = action.payload;
            const index = action.payload.activityKey;
            state[index] = { title, url, spotlight };
        },
        deleteActivity: (state, action) => {
            const { activityKey } = action.payload;
            state.splice(activityKey, 1);
        }
    }
})

export const { addAcitivityLink, changeActivity, toggleAcitivityIsActive, initializeActivityList, deleteActivity } = activityLinksSlice.actions;
export const ActivityReducer = activityLinksSlice.reducer;