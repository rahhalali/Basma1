import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import GraphSlice from "./GraphSlice";
export default configureStore({
    reducer: {
        login:LoginSlice,
        graph:GraphSlice
    },
});