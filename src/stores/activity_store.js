import { ActivityReducer } from "./activityLinksReducer";
import { configureStore } from "@reduxjs/toolkit";

const activityStore = configureStore({
    reducer: ActivityReducer
});

export default activityStore;