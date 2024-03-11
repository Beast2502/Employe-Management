import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



import Table from "../../component/Table/Table";
import { api_end_point } from "../../api/api";
import RolesTable from "./rolesTable";
import RolesView from "./rolesView";



import './roles.css';


const Roles = () => {

    const navigate = useNavigate();

    const [rolesList, setRoleList] = useState([]);

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {
        axios.get(`${api_end_point}/permission/`,{
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }
        }).then((res) => {
            console.log(res.data.role)
            setRoleList(res.data.role)

        }).catch((err) => {
            console.log(err.response.data.message)
            alert(err.response.data.message)
        })
    }, [show])




    const handleModalData = (data) => {
        setShow(true);
        setModalData(data)

    }


    return (
        <div className="role-main-container">
            <div className="role-container">
                <div className="role-header">
                    <div className="w-25 mt-5 mb-5 w-10">
                        <div className="heading-content">
                            Roles List ({rolesList.length})
                        </div>

                    </div>
                    <button type="button" className="add-btn" onClick={() => navigate('/add-new-role')}>Add New Role</button>

                </div>
                <div>
                    {
                        !rolesList && <div class="spinner-border m-5" role="status">
                            <span class="sr-only"></span>
                        </div>
                    }

                </div>
                {
                    rolesList && <RolesTable rolesList={rolesList} handleModalData={handleModalData} />

                }


                {modalData && <RolesView show={show} setShow={setShow} modalData={modalData} />}

            </div>
        </div>
    )

}

export default Roles;