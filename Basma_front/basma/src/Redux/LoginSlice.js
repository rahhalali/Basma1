import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const RegisterAsync = createAsyncThunk(
    "complain/EmailAsync",
    async (payload) => {
        console.log(payload);
        const response = await fetch(`https://aqueous-basin-15135.herokuapp.com/api/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                name:payload.name,
                password:payload.password,
                email:payload.email
            })
        });
        const result = await response.json();
        return { result: result };
    }
);
const Login = createSlice({
    name: "login",
    initialState: {},

    extraReducers: {
        [RegisterAsync.fulfilled]:(state,action)=>{
            if(action.payload.result.status === 200){
                toast.success("Added Successfully", {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }else{
                toast.success("email must be unique", {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }

        },
    }
});
export default Login.reducer;
