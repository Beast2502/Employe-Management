import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

import BrandIcon from '../../assets/logo.png';
import UserIcon from '../../assets/userIcon.svg';
import DownArrow from '../../assets/downarrow.svg';

import axios from "axios";
import { api_end_point } from "../../api/api";
import modulesList from "../../constants/constants";



const NavBar = () => {

    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setEmail(sessionStorage.getItem("email"));
        setRole(sessionStorage.getItem("role"))

        console.log(email, "CHECK EMAIl")


    }, [])









    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between">
                    <NavLink className="navbar-brand" to={'/'} >
                        {/* <img src={BrandIcon} className="" style={{ width: '150px' }} /> */}
                        <div className="heading-content text-end">
                            Digital Diary
                        </div>

                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Link</a> */}
                            </li>
                            <li className="nav-item dropdown">
                                {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a> */}
                                <ul className="dropdown-menu">
                                    {/* <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><div className="dropdown-divider"></div></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                </ul>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
                            </li>
                        </ul>
                        <form className="nav-user-details" >

                            <img src={UserIcon} className="user-icon-nav" />

                            <button onClick={() => sessionStorage.clear()} className="user-details-container">
                                <span className="user-detail-name">{email}</span>
                                <div className="user-detail-role">{role}</div>

                            </button>
                            <img src={DownArrow} className="user-down-arrow" />



                        </form>
                        {/* <form className="d-flex" role="search">
                            <button className="btn btn-outline-danger" type="submit" onClick={() => sessionStorage.clear()}>LogOut</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )

}

export default NavBar;