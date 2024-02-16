import React, { useEffect, useState } from "react";
import Table from '../../component/Table/Table';
import './user.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UsersView from "./usersView";
import { api_end_point } from "../../api/api";

const User = () => {

    const navigate = useNavigate();

    const [usersList, setUserList] = useState([]);
    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});

    useEffect(() => {


        axios.get(`${api_end_point}/userAuth/getusers`).then((res) => {
            console.log(res.data);
            setUserList(res?.data)

        }
        ).catch((err) => {
            console.log(err.response?.data.message, "ERRR")
            alert(err.response?.data.message)
        })

    }, [show])



    const handleModalData = (data) => {
        setShow(true);
        setModalData(data)

    }



    return (
        <div className="user-main-container">
            <div className="user-container">
                <div className="user-header">
                    <div className="w-25 mt-5 mb-5">
                        <div className="heading-content">
                            Users List ({usersList.length})
                        </div>

                    </div>

                    <button type="button" className="add-btn" onClick={() => navigate('/add-new')}>Add User</button>

                </div>
                <input className="form-control me-2 mb-5 w-25" type="search" placeholder="Search" aria-label="Search" />

                <Table list={usersList} handleModalData={handleModalData} viewbtn={true} />

                <UsersView show={show} setShow={setShow} modalData={modalData} />
            </div>

        </div>

    )

}

export default User;