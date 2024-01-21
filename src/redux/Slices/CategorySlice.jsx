import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name : 'category',
    initialState : {
        category : 'All'
    },
    reducers:{
        selectedUniqueCategory: (state,action)=>{
            state.category = action.payload;
            console.log(action.payload);
        }
    }
})

export let {selectedUniqueCategory} = CategorySlice.actions
export default CategorySlice.reducer