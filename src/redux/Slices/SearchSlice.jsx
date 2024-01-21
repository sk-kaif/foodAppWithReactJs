import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name : "search",
    initialState : {
        search : ''
    },
    reducers:{
        currentSearch : (state,action)=>{
            state.search = action.payload
        }
    }
})

export const {currentSearch} = SearchSlice.actions
export default SearchSlice.reducer