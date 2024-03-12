import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_end_point } from "../../api/api";
import { useNavigate } from "react-router-dom";
import departMentList from "../../constants/departments";

import "./leavePage.css";

const AddNewLeave = () => {




    const navigate = useNavigate();


    const [userList, setUserList] = useState([]);

    const [leaveDesc, setDesc] = useState('');
    const [fromDate, setFromDate] = useState('');

    const [toDate, setToDate] = useState('');




    const handleLeave = () => {




        axios.post(`${api_end_point}/leaves`, {
            leave_desc: leaveDesc,
            from_date: fromDate,
            to_date: toDate,
            user_id: sessionStorage.getItem('email'),
            user_status: true
        }, {
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }
        }).then(res => {
            if (res.status === 200) {
                alert(res.data.message)
                navigate('/leave-request')
            }
        }).catch(err => alert(err.response.data.message))

    }

    // useEffect(() => {

    //     axios.get(`${api_end_point}/userAuth/getUsers`, {
    //         user_id: sessionStorage.getItem('email'),
    //     }, {
    //         headers: {
    //             'ngrok-skip-browser-warning': 'skip-browser-warning',
    //             'Authorization': sessionStorage.getItem("access-token")
    //         }
    //     }).then(res => {

    //         console.log('user list', res.data)

    //         setUserList(res.data)
    //     })



    // }, [])

    console.log(sessionStorage.getItem('level'), "LEVEL TEST")

    const userLevel = sessionStorage.getItem('level');
    return (
        <div style={{ display: "flex", marginBottom: 'auto', background: '#F1F1F1' }}>
            <div className="add-blogs-section">
                <div className="blog-header">
                    Leave Request
                </div>
                <div className="user-input-container">
                    <div className="col mt-2">
                        <div className="col mb-3 text-start">
                            <label for="formGroupExampleInput" className="label">Leave Reason</label>

                            <textarea type="text" className="form-control text-area-container" placeholder="Leave Description" onChange={e => setDesc(e.target.value)} />
                        </div>
                        <div className="col mb-3 text-start">
                            <label for="formGroupExampleInput" className="label">From Date</label>

                            <input type="date" className="form-control" placeholder="From" onChange={(e)=>setFromDate(e.target.value)}/>


                            {/* <select class="form-control form-select" aria-label="Default select example" onChange={(e) => setAssDepart(e.target.value)}>
                                <option selected>Open Department</option>
                                {departMentList.map((data) => {
                                    return (<option value={data.title}>{data.title}</option>)
                                })}

                            </select> */}
                        </div>
                        <div className="col mb-3 text-start">
                            <label for="formGroupExampleInput" className="label">To Date</label>

                            <input type="date" className="form-control" placeholder="To"  onChange={(e)=>setToDate(e.target.value)}/>


                            {/* <select class="form-control form-select" aria-label="Default select example" onChange={(e) => setAssDepart(e.target.value)}>
                                <option selected>Open Department</option>
                                {departMentList.map((data) => {
                                    return (<option value={data.title}>{data.title}</option>)
                                })}

                            </select> */}
                        </div>
                        <div className="col mb-3 text-start">
                            {/* <label for="formGroupExampleInput" className="label">Assign To</label>

                            <select class="form-control form-select" aria-label="Default select example" onChange={(e) => setAssign(e.target.value)}>
                                <option selected>Open this select menu</option>
                                {userList.map((data) => {
                                    if(data?.level[0]?.level < userLevel )
                                    return (<option value={data.email}>{data.email}</option>)
                                })}

                            </select> */}
                        </div>

                    </div>

                    <button type="button" className="add-btn" onClick={handleLeave}>Create</button>
                </div>
            </div>

        </div>
    )

}

export default AddNewLeave;
