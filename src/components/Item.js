import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Item = (props) => {
  const { resList } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId} = resList.info;
const {loggedInUser} = useContext(UserContext)
  return (
    <div className=" w-[320px] p-2 m-4 rounded-lg object-cover transform transition-transform duration-300 hover:scale-95 shadow-black" >
      <img
        className="object-cover w-full h-48 rounded-xl"
        alt="Restaurant"
        src={CDN_URL+cloudinaryImageId}/>
       <div className="flex flex-col items-center justify-center p-3 text-center">
       <h3 className="p-2 text-lg font-bold">{name}</h3>
       <hr style={{ width: "60%", marginTop: "", border: "1px solid #C8C8C8" }} /> 
      <h5 className="p-1 font-semibold">⭐ {avgRating} Stars · {sla?.deliveryTime} mins</h5> 
      <hr style={{ width: "60%", margin: "", border: "1px solid #C8C8C8" }} />
      <h4 className=""> {cuisines.join(", ")}</h4>  
      </div>
    </div>
  );
};
// {for promoted label}
// export const WithPromotedLabel =(Item)=>{
//   return(props)=>{
//     return(
//       <div>
//         <label>Promoted</label>
//       <Item {...props}/>
//       </div>
//     )
//   }
// }

export default Item;