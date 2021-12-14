import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    ToastAndroid,
} from "react-native";
import {clear} from "react-native/Libraries/LogBox/Data/LogBoxData";
const Store = async (value) => {
    try {
        await AsyncStorage.setItem(
            'access_token',
            value
        );
    } catch (error) {
        // Error saving data
    }
};
const remove = async () => {
    try {
        await AsyncStorage.removeItem(
            'access_token'
        );
    } catch (error) {
        // Error saving data
    }
};
const getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('access_token')
        return jsonValue != null ? JSON.parse(jsonValue) : "";
    } catch(e) {
        // error reading value
    }
}
export const LoginAsync = createAsyncThunk(
    "login/LoginAsync",
    async (payload) => {
        const response = await fetch(`http://192.168.10.111:8000/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                password:payload.password,
                email:payload.email
            })
        });
        const result = await response.json();
        return { result: result };
    }
);
export const LogoutAsync = createAsyncThunk(
    "login/LogoutAsync",
    async () => {
        const response =await fetch('http://192.168.10.111:8000/api/user/logout',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                Accept:'application/json',
                Authorization: `Bearer ${await AsyncStorage.getItem("access_token")}`,
            }
        });
        const result = await  response.json();
        console.log(result);
        return { result: result }
    }
);
const LoginSlice = createSlice({
    name: "login",
    initialState: {
        logged_in:''
    },
    reducers:{
   logOut:(state,action)=>{
    state.logged_in=""
}
    },

    extraReducers: {
        [LoginAsync.fulfilled]: (state, action) => {
            if (action.payload.result.status === 200) {
                console.log("action", action.payload.result);
                Store(action.payload.result.access_token);
                state.logged_in="true"
            }
        },
        [LogoutAsync.pending]: (state, action) => {
            console.log('pending');
        },
        [LogoutAsync.fulfilled]: (state, action) => {
            console.log('logout',action.payload.result);
            if(action.payload.result === 200){
                remove();
            }

        },
        [LoginAsync.pending]: (state, action) => {
            console.log('pending');
        }
    }
});
export const {logOut} = LoginSlice.actions;
export default LoginSlice.reducer;
