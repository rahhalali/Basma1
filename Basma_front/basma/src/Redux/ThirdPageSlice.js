import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
export const GetParagraph = createAsyncThunk(
    "paragraph/GetInfo",
    async (payload) => {

        const response =await  fetch('Json/ThirdData.json'
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

const ThirdPageSlice = createSlice({
    name: "info",
    initialState: {
        info:''
    },
    extraReducers:{
        [GetParagraph.fulfilled]:(state,action)=>{
            console.log('actionThird',action.payload.result)
            state.info=(action.payload.result)
        }
    }
});

export default ThirdPageSlice.reducer;