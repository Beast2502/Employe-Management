import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Navbar/Navabar";
import SideBar from "../Sidebar/Sidebar";

import "./RootLayout.css";


export default function RootLayout() {
    return (
        <>
            <NavBar />     
            {/* <SideBar /> */}

            <div className="root-layout">
                 <Outlet />
            </div>
           
        </>
    );
}
