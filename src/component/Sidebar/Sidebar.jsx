import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/homeIcons.svg";
import UserIcon from "../../assets/user.svg";
import AstroIcon from "../../assets/astroIcon.svg";
import PermissionIcon from "../../assets/permission.svg";
import MeetIcon from "../../assets/meet.svg";
import CustomersIcon from "../../assets/customer.svg";
import BlogsIcon from "../../assets/blogs.svg";

import axios from "axios";
import modulesList from "../../constants/constants";
import { api_end_point } from "../../api/api";

import './Sidebar.css'


const SideBar = () => {

    const [views, setViews] = useState({});


    useEffect(() => {
        try {

            sessionStorage.getItem("email") && axios.post(`${api_end_point}/userAuth/getmodules`, { email: sessionStorage.getItem("email") }).then((res) => {


                let obj = {}
                console.log(res.data.modules, "MODULESSS")

                let module_user = res.data.modules

                console.log(modulesList, "MODULE LIST IN THE APP")

                for (let i = 0; i < modulesList.length; i++) {
                    for (let j = 0; j < module_user.length; j++) {
                        if (modulesList[i].title === module_user[j]) {
                            obj[`${modulesList[i].title}`] = true
                        }
                    }
                }

                setViews(obj)


            }).catch(err => {
                console.log(err, "Hi iam breaking")
                alert(err)
            })

        } catch (err) {
            console.log(err, "Hi iam breaking")
        }

    }, [])


    console.log(views, "VIEWS")

    return (
        <div className="d-flex align-items-start sidebar-color sidebar" style={{ width: '257px'}}>
            <div className="nav flex-column text-start w-100 sidebar-color" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ paddingLeft: "24px"}}>
                <nav id="sidebar">
                    <NavLink className="nav-link  d-flex side-bar" to="/" ><img src={HomeIcon} className="side-bar-icon" />Home</NavLink>
                </nav>
                {views.Roles && <nav id="sidebar">
                    <NavLink className="nav-link  d-flex side-bar" to="/roles" ><img src={PermissionIcon} className="side-bar-icon" />Roles</NavLink>
                </nav>}

                {views.Users &&
                    <nav id="sidebar">
                        <NavLink id="sidebar" className="nav-link  d-flex side-bar" to="/users" ><img src={UserIcon} className="side-bar-icon" />Users</NavLink>
                    </nav>
                }


            
                    <nav id="sidebar">

                        <NavLink id="sidebar" className="nav-link  d-flex side-bar" to={'my-task'} ><img src={CustomersIcon} className="side-bar-icon" />My Task</NavLink>
                    </nav>
                



                {views.TaskAssignTo &&
                    <nav id="sidebar">
                        <NavLink id="sidebar" className="nav-link  d-flex side-bar" to={'task-assigned-to'} ><img src={BlogsIcon} className="side-bar-icon" />Task Assigened To</NavLink>
                    </nav>
                }

                {views.AllTask &&
                    <nav id="sidebar">

                        <NavLink id="sidebar" className="nav-link  d-flex side-bar" to={'all-task-list'}><img src={AstroIcon} className="side-bar-icon" />All Task List</NavLink>
                    </nav>

                }
            </div>

        </div>
    )

}


export default SideBar;