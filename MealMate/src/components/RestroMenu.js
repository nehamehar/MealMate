import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestroCatagory from "./RestroCatagory";

const RestroMenu=()=>{
  //useRestautrantsMenu.js code
const {resId}=useParams(); 
const resInfo =useRestaurantMenu(resId)
const Info=resInfo?.cards?.[2]?.card?.card?.info;
if(resInfo===null) return <Shimmer/>
const {
  name,
  cuisines,
  costForTwoMessage,
  avgRating,
  totalRatingsString,
  availability,
  city
} = Info;

const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
const offers =  resInfo?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];
const isOpen = availability?.opened;


const categories=resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
(c)=>c.card?. ["card"]?. ["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log(categories);

return(
        <div className="text-center">
      <h1 className="my-6 text-xl font-bold">{name}</h1>
      <p className="text-lg font-semibold">{cuisines.join(", ")}</p>
      <p className="text-base font-medium">⭐ {avgRating} ({totalRatingsString}) - {costForTwoMessage}</p>
      <p className="font-medium">{isOpen ? `Open now – ${city}` : "Closed"}</p>
      {/* creating accordian */}
      {/* {offers.length > 0 && (
        <div className="offers">
          <h3>Offers:</h3>
          <ul>
            {offers.map((offer, index) => (
              <li key={index}>
                <strong>{offer.info.header}</strong> – {offer.info.description}
              </li>
            ))}
          </ul>
        </div>
      )}
      <ul>{itemCards.map((item) => (
    <li key={item.card.info.id}>
      {item.card.info.name} – ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
       </li>))}
      </ul> */}
      {/* categories accordions */}
{categories. map((category) => (<RestroCatagory key={category?.card?.card.title} data={category?.card?.card}/>))}
    </div>
  );
};

export default RestroMenu;