import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../component/Navbar/Navbar";
import SideBar from "../component/Sidebar/Sidebar";
import LoginView from "../view/login/loginView";
import axios from "axios";


import modulesList from "../constants/constants";




import "./rootlayout.css"
import { api_end_point } from "../api/api";



export default function RootLayout({ loginHandler, setEmail, setPassword, token }) {


    return (
        <>
            {token ? <div className="root-layout">

                <NavBar />
                <div className="container-area">
                    <SideBar />
                    <Outlet />
                </div>
            </div>

                : <LoginView setEmail={setEmail} setPassword={setPassword} loginHandler={loginHandler} />
            }
        </>
    );
}
