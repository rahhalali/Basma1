import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
export const GetInfo = createAsyncThunk(
    "list/GetInfo",
    async (payload) => {
        const response =await  fetch('Json/FourthData.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        const result =await response.json();
        return { result:result }
    }
);

const FourthPageSlice = createSlice({
    name: "info",
    initialState: {
        info:''
    },
    extraReducers:{
        [GetInfo.fulfilled]:(state,action)=>{
            state.info=(action.payload.result)
        }
    }
});

export default FourthPageSlice.reducer;