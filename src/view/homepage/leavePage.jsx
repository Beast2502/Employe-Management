import React, { useEffect, useState } from "react";
import Card from "../../component/Card/Card";

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
        axios.post(`${api_end_point}/leaves/leave-user-list`, { id: sessionStorage.getItem('email') }, {
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
        axios.post(`${api_end_point}/leaves/leave-user-list`, { id: sessionStorage.getItem('email') }, {
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

        console.log(data, "HR STATUS HANDLER")

        const {
            _id,
            hr_approval, } = data;

        try {

            axios.post(`${api_end_point}/leaves/hr-approval`, {
                _id,
                hr_id: sessionStorage.getItem("email"),
                hr_approval: !hr_approval
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
            

                {leaveList && <LeaveTable data={leaveList} handleModalData={handleModalData} handleStatus={handleStatus} />}

                {modalData && <LeaveView show={show} setShow={setShow} modalData={modalData} />}


            </div>
        </div>
    )

}

export default LeavePage;