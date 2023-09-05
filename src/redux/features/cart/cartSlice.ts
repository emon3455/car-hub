import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        addToCart:(state:any, action:any)=>{
            state.push(action.payload)
        },
        removeFromCart:(state:any, action:any)=>{
            return state.filter( (item:any) => item._id !== action.payload);
        },
        getCartItem:(state, action)=>{
            return state
        }
    }
})

export const {getCartItem, addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
