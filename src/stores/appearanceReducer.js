import { createSlice } from '@reduxjs/toolkit';

const initialData = {

    styles:
    {
        background: "",
        font: ""
    }
};

const appearanceReducer = createSlice({
    name: "appearance",
    initialState: initialData,
    reducers: {
        updateStyles: (state, action) => {
            state.styles = action.payload;
        }
    }
});

export const { updateStyles } = appearanceReducer.actions;
export default appearanceReducer.reducer;




