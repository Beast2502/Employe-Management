import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";


const SideBar = () => {

    return (
        <div className="side-cont">
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/addnew'}>Add New Employee</NavLink>  
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to={'/'}>Employee List</NavLink>
                </li>
               
            </ul>
        </div>
    )
}

export default SideBar;