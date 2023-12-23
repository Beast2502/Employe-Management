import React from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
    <nav className="navbar-expand-lg navbar navbar-dark bg-primary nav-cont w-100" style={{height:'100px'}}>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{zIndex:'2'}}>
      <ul className="navbar-nav bg-primary" >
        <li className="nav-item active">
        <NavLink className="nav-link" to={'/'}>Employee List</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to={'/addnew'}>Add New Employee</NavLink>  
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown link
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" >Action</a>
            <a className="dropdown-item" >Another action</a>
            <a className="dropdown-item" >Something else here</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  
  )

}

export default NavBar;