import { createSlice } from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name : 'cart',
    initialState : {
        cart:[]
    },
    reducers : {
        addToCart : (state,action)=> {
            let existingItem = state.cart.find(item => item.id === action.payload.id)
            if(existingItem){
                state.cart = state.cart.map(item => item.id === action.payload.id ? {...item, qty:item.qty + 1} : item )
            }else{
                state.cart.push(action.payload)
            }
        },
        removeToCart : (state,action)=>{state.cart = state.cart.filter((item) => item.id !== action.payload.id)},
        increQty : (state,action)=>{state.cart = state.cart.map( item => item.id === action.payload.id ? {...item, qty : item.qty + 1}: item )},
        decreQty : (state,action)=>{state.cart = state.cart.map(item=>item.id ===action.payload.id ? {...item, qty : item.qty -1}:item)} ,
        clearCart : (state,action)=>{state.cart = []} ,
    }
})

export const {addToCart,removeToCart,increQty,decreQty,clearCart} = CartSlice.actions;
export default CartSlice.reducer;