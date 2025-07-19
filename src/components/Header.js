import { useState,useContext } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Header=()=>{
const [Btn,setBtn] = useState("Login");

//redux subscribed
const cartItems = useSelector((store) => store.cart.items);

const {loggedInUser} = useContext(UserContext)
console.log(loggedInUser)
    return (
        <div className="flex justify-between shadow-lg mb-10 h-32 bg-[#FFFFFF]">
            <div className="logo">
            <img className="flex items-center w-24 pb-3"  src={LOGO}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex font-semibold text-md p-7">
                    <li className="px-3 hover:text-[#F55C15]">
                        <Link to={"/"}>Home</Link></li>
                    <li className="px-3 hover:text-[#F55C15]">
                        <Link to={"about"}>About Us</Link></li>
                    <li className="px-3 hover:text-[#F55C15]"> 
                        <Link to={"contact"}>Contact Us</Link></li>
                    <li className="px-3 hover:text-[#F55C15]"> 
                        <Link to={"grocery"}>Grocery</Link></li>
                    <li className="relative px-3 hover:text-[#F55C15]">
                            <Link to={"cart"} className="flex flex-col items-center">
                            <span className="absolute right-0 px-1 text-xs text-white bg-green-600 rounded-full -top-2">
                                {cartItems.length}
                            </span><FontAwesomeIcon icon={faCartPlus} className="text-2xl" />
                        <span className="mt-1 text-sm"></span>
                        </Link>
                    </li>
                    <li className="px-3 font-bold">{loggedInUser}</li>
                    {/* creating login logout button */}
                    <button className="flex items-center px-3 py-1 ml-6 font-semibold border-4 bg-slate-400" onClick={()=>{Btn==="Login" ? setBtn("Logout"): setBtn("Login")}}> {Btn}
                    </button>
                </ul>
            </div>

        </div>
        
    )
}

export default Header;