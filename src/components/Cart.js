import { useSelector } from "react-redux"
import ItemListAccordian from "./ItemListAccordian";
import { clearCart } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

//redux
const Cart=()=>{
    const cartItem= useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
const handleClearCart = () => {
dispatch(clearCart())
}
    return( <div className="text-center ">
        <h1 className="text-2xl font-bold ">Cart</h1>
        <div className="w-6/12 m-auto">
        <button className="p-2 m-2 text-white bg-black rounded-lg mt-9 hover:bg-[#F55C15]"onClick={handleClearCart}>Clear Cart</button>
        {cartItem.length === 0 &&<h1 className="mt-20">Cart is empty. Add Items to the cart!</h1>}
<ItemListAccordian items={cartItem}/>
</div>
    </div>)
}

export default Cart


//✅ Step 1: Import the Redux hooks
//✅ Step 2: Access cart items from the Redux store - const cartItems = useSelector((store) => store.cart.items);
//✅ Step 3: Loop and display each item