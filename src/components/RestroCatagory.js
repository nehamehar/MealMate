import { useState } from "react"
import ItemListAccordian from "./ItemListAccordian"
const RestroCatagory =({data})=>{
    const [Show, setShow]=useState(false)

    
    const handleClick=()=>{
        setShow(!Show)
    }
    return <div>
        {/* header */}
        <div className=" w-7/12 p-4 my-4 font-medium border border-[#EDEDED] shadow-xl  bg-[#FBFBFB] cursor-pointer mx-auto">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="gap-6 text-lg font-bold" >{data.title} ({data.itemCards.length})</span>
            <span className="text-lg text-grey">↓</span>
            </div>
            { Show &&  <ItemListAccordian items={data.itemCards}/>}
            
        </div>
{/* accordian body */}
    </div>
}

export default RestroCatagory