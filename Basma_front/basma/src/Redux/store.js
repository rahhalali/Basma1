import { configureStore } from "@reduxjs/toolkit";
import SecondPageSlice from "./SecondPageSlice";
import ThirdPageSlice from "./ThirdPageSlice";
import FourthPageSlice from "./FourthPageSlice";
import LoginSlice from "./LoginSlice";
export default configureStore({
    reducer: {
        info:SecondPageSlice,
        paragraph:ThirdPageSlice,
        list:FourthPageSlice,
        login:LoginSlice
    },
});