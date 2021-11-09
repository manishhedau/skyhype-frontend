import { createSlice } from '@reduxjs/toolkit'



const initalState = {
    editprofile: {
        username: "",
        fullname: "",
        description: "",
        profile_image: "",
        designation: "",
        category: ""
    }
}

const editProfileSlice = createSlice({
    name: "editprofile",
    initialState: initalState,
    reducers: {
        addProfileData: (state, action) => {
            // console.log(action);
            state.editprofile = action.payload;
            // state.username = action.username;
            // state.fullname = action.fullname;
            // state.description = action.description;
            // state.designation = action.designation;
        },
        changeFullName: (state, action) => {
            state.editprofile.fullname = action.payload.fullname
        },
        changeDescription: (state, action) => {
            state.editprofile.description = action.payload.description
        },
        changeProfileImage: (state, action) => {
            state.editprofile.profile_image = action.payload.profileImage
        },
        changeDesignation: (state, action) => {
            state.editprofile.designation = action.payload.designation
        },
        changeCategory: (state, action) => {
            state.editprofile.category = action.payload.category
        }
    }
})

export const {
    addProfileData,
    changeFullName,
    changeDescription,
    changeDesignation,
    changeCategory,
    changeProfileImage
} = editProfileSlice.actions;

export default editProfileSlice.reducer
