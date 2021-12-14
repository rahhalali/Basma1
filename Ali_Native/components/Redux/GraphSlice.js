import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const GetAverageAsync = createAsyncThunk(
    "login/GetAverageAsync",
    async (payload) => {
        const response = await fetch(`http://192.168.10.111:8000/api/average/get/hr?day=${payload.day}`, {
            method: "GET",
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json',
                Authorization: `Bearer ${await AsyncStorage.getItem("access_token")}`,
            }
        });
        const result = await response.json();
        return { result: result };
    }
);

const GraphSlice = createSlice({
    name: "Graph",
    initialState: {
        times:[],
        day:[],
    },

    extraReducers: {
        [GetAverageAsync.fulfilled]: (state, action) => {
            state.times.push(action.payload.result.time);
            state.day.push(action.payload.result.day);
            }
        },

});
export default GraphSlice.reducer;
