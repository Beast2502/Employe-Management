import React, { useEffect, useState } from "react";

import "./task.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api_end_point } from "../../api/api";
import TaskView from "./taskView";
import TaskTable from "./taskTable";

const TaskAssignTo = () => {

    const navigate = useNavigate();

    const [taskList, setTaskList] = useState([]);

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});


    useEffect(() => {
        axios.post(`${api_end_point}/task/assignedFrom` ,{userEmail : sessionStorage.getItem('email')},{
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }
        }).then(res => {
            console.log(res.data);
            setTaskList(res.data)
        }).catch((err) => {
            console.log(err.response.data.message)
            alert(err.response.data.message)
        })
    }, [show])

    const handleRefersh =()=>{
        axios.post(`${api_end_point}/task/assignedFrom` ,{userEmail : sessionStorage.getItem('email')},{
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }
        }).then(res => {
            console.log(res.data);
            setTaskList(res.data)
        }).catch((err) => {
            console.log(err.response.data.message)
            alert(err.response.data.message)
        })
    }

   

    const handleModalData = (data) => {
        setShow(true);
        setModalData(data);

    }

    const handleStatus = (_id , verify) =>{

        try{
    
          axios.post(`${api_end_point}/task/update` ,{_id , verify : !verify},{
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }
        }).then(res=>{
            handleRefersh()
            alert(res.data.message)
          })
    
        }catch(err){
          console.log(err)
        }
    
      }
    

    return (
        <div className="blog-main-container">
            <div className="blog-container">
                <div className="blog-header">
                    <div className="w-25 mt-5 mb-5">
                        <div className="blog-heading-content">
                            Task Assigned To  ({taskList.length})
                        </div>

                    </div>
                    <button type="button" className="add-btn" onClick={() => navigate('/add-task')}>Add New Task</button>
                </div>
                <input className="form-control me-2 mb-5 w-25" type="search" placeholder="Search" aria-label="Search" />

                {taskList && <TaskTable data={taskList} handleModalData={handleModalData} handleStatus={handleStatus}/>}

                {modalData && <TaskView show={show} setShow={setShow} modalData={modalData} />}


            </div>
        </div>
    )

}

export default TaskAssignTo;