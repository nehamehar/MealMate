import { useEffect, useState } from "react"

const useOnlineStatus =()=>{
    const[Online, setOnline]=useState(true)
    useEffect(() =>{
        window.addEventListener(
        "offline", ()=>{
            setOnline(false)
        }
    )

    window.addEventListener(
        "online", ()=>{
            setOnline(true)
        }
    )
    },[])
    
    return Online;

}

export default useOnlineStatus;