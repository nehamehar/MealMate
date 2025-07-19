import { useEffect, useState } from "react";

const User = () => {

    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://api.github.com/users/nehamehar");
        const json = await data.json();
        setUserInfo(json);
    };
    if (!userInfo) {
    return <h2>Loading profile...</h2>;
  }
    const { name, location, avatar_url } = userInfo;
    return (
        <div className="" style={{ border: "1px solid black", padding: "7px", textAlign: "center" }}>
            <img src={avatar_url} alt="User Avatar" style={{width: "150px", borderRadius: "10%"}} />
            <p>{name}</p>
            <p>Location:  {location}</p>
            <p>Contact: nehamehar31@gmail.com</p>
        </div>
    );
};

export default User;