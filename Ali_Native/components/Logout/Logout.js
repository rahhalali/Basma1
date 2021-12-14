import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {logOut, LogoutAsync} from "../Redux/LoginSlice";
import {useNavigation} from "@react-navigation/native";

export const Logout = () => {
const dispatch=useDispatch();
 useEffect(() => {
        dispatch(logOut());
    }, [dispatch]);
    return <></>;
};