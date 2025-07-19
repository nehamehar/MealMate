import {configureStore} from "@reduxjs/toolkit"
import CartReducer from "./CartSlice";
const appStore= configureStore({
    reducer:{
        cart: CartReducer,  //Cartslice's reducer=CartReducer
    }
})

export default appStore