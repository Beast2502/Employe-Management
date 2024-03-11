import React, { useEffect, useState } from "react";

import "./leavePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api_end_point } from "../../api/api";
import LeaveView from "./leaveView";
import LeaveTable from "./leaveTable";

const LeavePage = () => {

    const navigate = useNavigate();

    const [leaveList, setLeaveList] = useState([]);

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});


    useEffect(() => {
        axios.post(`${api_end_point}/leaves/leave-by-id`, { user_id: sessionStorage.getItem('email') }, {
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }
        }).then(res => {
            console.log(res.data);
            setLeaveList(res.data)
        }).catch((err) => {
            console.log(err.response.data.message)
            alert(err.response.data.message)
        })
    }, [show])

    const handleRefersh = () => {
        axios.post(`${api_end_point}/leaves/leave-by-id`, { user_id: sessionStorage.getItem('email') }, {
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }
        }).then(res => {
            console.log(res.data);
            setLeaveList(res.data)
        }).catch((err) => {
            console.log(err.response.data.message)
            alert(err.response.data.message)
        })
    }



    const handleModalData = (data) => {
        setShow(true);
        setModalData(data);

    }

    const handleStatus = (data) => {

        console.log(data, "LEAVE DATA")

        const { _id, user_status } = data;

        try {

            axios.post(`${api_end_point}/leaves/req-leave-update`, {
                _id, user_status: !user_status
            }, {
                headers: {
                    'ngrok-skip-browser-warning': 'skip-browser-warning',
                    'Authorization': sessionStorage.getItem("access-token")
                }
            }).then(res => {
                handleRefersh()
                alert(res.data.message)
            })

        } catch (err) {
            console.log(err)
        }

    }


    return (
        <div className="blog-main-container">
            <div className="blog-container">
                <div className="blog-header">
                    <div className="w-25 mt-5 mb-5">
                        <div className="blog-heading-content">
                            My Leaves
                        </div>

                    </div>
                    <button type="button" className="add-btn" onClick={() => navigate('/add-new-leave')}>Request For Leave</button>
                </div>
                <input className="form-control me-2 mb-5 w-25" type="search" placeholder="Search" aria-label="Search" />

                {leaveList && <LeaveTable data={leaveList} handleModalData={handleModalData} handleStatus={handleStatus} />}

                {modalData && <LeaveView show={show} setShow={setShow} modalData={modalData} />}


            </div>
        </div>
    )

}

export default LeavePage;