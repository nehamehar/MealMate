import { createSlice } from "@reduxjs/toolkit";

const CartSlice= createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{state.items.push(action.payload)},  //Adds it to the cart
        removeItem:(state)=>{state.items.pop()},
        clearCart:(state)=>{state.items.length = 0},
    },

})

export const {addItem,clearCart,removeItem}  = CartSlice.actions
export default CartSlice.reducer