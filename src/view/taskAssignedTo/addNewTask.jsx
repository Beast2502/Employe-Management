import axios from "axios";
import React, { useEffect, useState } from "react";
import { api_end_point } from "../../api/api";
import { useNavigate } from "react-router-dom";
import departMentList from "../../constants/departments";

import "./blogs.css";

const AddNewBlog = () => {


  

    const navigate = useNavigate();


    const [userList, setUserList] = useState([]);

    const [taskDesc, setDesc] = useState('');
    const [assignTo ,setAssign] = useState('');

    const [assignDepart ,setAssDepart] = useState('');
  
    const handleBlog = () => {

       


        axios.post(`${api_end_point}/task/create`, {task_desc : taskDesc , assign_to:assignTo , assign_from: sessionStorage.getItem('email') , assign_to_depart : assignDepart},{
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
            }
        }).then(res => {
            if (res.status === 200) {
                alert(res.data.message)
                navigate('/task-assigned-to')
            }
        }).catch(err => alert(err.response.data.message))

    }

    useEffect(() => {

        axios.get(`${api_end_point}/userAuth/getUsers`,{
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
            }
        }).then(res => {

            console.log('user list', res.data)

            setUserList(res.data)
        })



    }, [])
    
    console.log(sessionStorage.getItem('level') ,"LEVEL TEST")

    const userLevel = sessionStorage.getItem('level') ;
    return (
        <div style={{ display: "flex", marginBottom: 'auto', background: '#F1F1F1' }}>
            <div className="add-blogs-section">
                <div className="blog-header">
                    Create Task
                </div>
                <div className="user-input-container">
                    <div className="col mt-2">
                        <div className="col mb-3 text-start">
                            <label for="formGroupExampleInput" className="label">Task Description</label>

                            <textarea type="text" className="form-control text-area-container" placeholder="Task Description" onChange={e => setDesc(e.target.value)} />
                        </div>
                        <div className="col mb-3 text-start">
                            <label for="formGroupExampleInput" className="label">Select The Department</label>

                            <select class="form-control form-select" aria-label="Default select example" onChange={(e) => setAssDepart(e.target.value)}>
                                <option selected>Open Department</option>
                                {departMentList.map((data) => {
                                    return (<option value={data.title}>{data.title}</option>)
                                })}

                            </select>
                        </div>
                        <div className="col mb-3 text-start">
                            <label for="formGroupExampleInput" className="label">Assign To</label>

                            <select class="form-control form-select" aria-label="Default select example" onChange={(e) => setAssign(e.target.value)}>
                                <option selected>Open this select menu</option>
                                {userList.map((data) => {
                                    if(data?.level[0]?.level < userLevel )
                                    return (<option value={data.email}>{data.email}</option>)
                                })}

                            </select>
                        </div>

                    </div>

                    <button type="button" className="add-btn" onClick={handleBlog}>Create</button>
                </div>
            </div>

        </div>
    )

}

export default AddNewBlog;
