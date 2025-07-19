import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Body from "./components/Body";
import Item from "./components/Item";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestroMenu from "./components/RestroMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";

//Grocery
const Grocery=lazy(()=>
    import ("./components/Grocery"))
const AboutUs=lazy(()=>
    import("./components/AboutUs"))
const AppContent=()=>{

    const [userInfo, setUserInfo] = useState()
    // authentication
useEffect(() => {
// Make an API call and send username and password
const data = {name: "Neha Mehar"}
setUserInfo(data.name)},
[])
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
            <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const AppRouter=createBrowserRouter([
    {   path: "/",
        element:<AppContent/>,
        children:[
    {
        path:"/",
        element:<Body/>,
    },
    {
        path:"/about",
        element: (<Suspense fallback={<Shimmer/>}><AboutUs/></Suspense>)
    },
    {
        path:"/contact",
        element:<ContactUs/>,
    },
    {
        path : "/cart",
        element:<Cart/>
    },
    {
     path: "/restaurant/:resId",
     element: <RestroMenu />,
    },
    {
     path: "/grocery",
     element: (<Suspense fallback={<h1>Loading.... </h1>}><Grocery/></Suspense>),
    }

    ],
     errorElement:<Error/>,
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={AppRouter}/> )
