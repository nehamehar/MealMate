import { useState, useEffect } from "react";
import Item from "./Item";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Body_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Body = () => {
  const [Filtered, setFiltered] = useState([]); //resList
  const [Search, setSearch]=useState("")
  const [AfterSearch, setAfterSearch]= useState([])
  const {loggedInUser, setUserInfo}= useContext(UserContext)
  
  useEffect(()=>{
    fetchData()
   },[])
// fetching data from api using async await 
   const fetchData= async()=>{
    // calling swiggy api with cors 
   const data = await fetch(Body_URL);
const json = await data.json();
// accessing res form api swiggy and updating Filtered through setFiltered:
setFiltered(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setAfterSearch(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

// for promored label---- const PromotedRes = WithPromotedLabel(Item)
const Online = useOnlineStatus()
if (Online===false)
  return (<h2>Opps..you are Offline</h2>)
// making shimmer 
// we call this conditional rendering
if (!Filtered || Filtered.length === 0) {
  return <Shimmer />;
}
{/* <Item> data={Filtered}</Item> */}
  
return(
    <div className="body">
      <div className="flex filter">
        <div className="flex items-center">
          <input  type="type here..." aria-placeholder="type here..." className="flex justify-between p-1 m-3 border-2 border-black rounded-md shadow-2xl w-52" value={Search} onChange={(e) => setSearch(e.target.value)}></input>
          <button className="flex items-center p-2 bg-green-400 rounded-md " onClick={()=>{const AfterSearch = Filtered.filter((res)=> res.info.name.toLowerCase().includes(Search.toLowerCase()))
            setAfterSearch(AfterSearch); 
          }}>Search</button>
        </div>
        <button className="mx-14 p-2 m-3 rounded-md justify-between bg-[#808080] items-center text-pretty" onClick={()=>{let topRated =Filtered.filter((res)=> res.info.avgRatingString > 4)
      setFiltered(topRated)}}>Top Rated Restaurants</button>
      <div className="flex items-center justify-center mt-1 rounded-md">
        <label aria-placeholder="type here..." className="p-3 py-2 font-bold rounded-md">UserName :</label>
        <input className="p-1 px-2 font-bold border border-black rounded-md" value={loggedInUser.userInfo} onChange={(e) => setUserInfo(e.target.value)}></input>
      </div>
      </div> 
      {/* creating button putting event handler by onclick */}
      {/* The filter method loops through your array and gives you one element at a time.
      You named that element res — it's just a variable.
      So if your array is full of restaurants, res will represent one restaurant at a time. */}
      <div className="flex flex-wrap">
        {/* using map for getting data from reslist  */}
        {AfterSearch.map((restaurant) => (
            // we have to give unique id when we are looping in data to show each items with unique key not use index as bad practise//
          <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}> <Item resList={restaurant} /> </Link>
        ))}
        {/* for promoted label - {restaurant.data.promoted ? (<PromotedRes resList={restaurant}/>): (<Item resList={restaurant} />)}  */}
      </div> 
    </div>
  );
};
export default Body;



