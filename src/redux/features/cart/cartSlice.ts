import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Load cart items from local storage or provide an empty array as the default value
const initialCartState = JSON.parse(localStorage.getItem('cart') || '[]');

const cartSlice = createSlice({
    name: "cart",
    initialState: initialCartState, // Initialize with the items from local storage or an empty array
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state));
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const updatedCart = state.filter((item: any) => item._id !== action.payload);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return updatedCart;
        },
        removeAll: () => {
            localStorage.removeItem('cart');
            return []
        }
    }
});

export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
