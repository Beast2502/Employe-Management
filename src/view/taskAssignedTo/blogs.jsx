import React, { useEffect, useState } from "react";
import Table from '../../component/Table/Table';

import './blogs.css'
import { useNavigate } from "react-router-dom";
import BlogsTable from "./blogsTable";
import axios from "axios";
import { api_end_point } from "../../api/api";
import BlogView from "./blogsView";

const TaskAssignTo = () => {

    const navigate = useNavigate();

    const [blogList, setBlogList] = useState([]);

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});


    useEffect(() => {
        axios.post(`${api_end_point}/task/assignedFrom` ,{userEmail : sessionStorage.getItem('email')},{
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
            }
        }).then(res => {
            console.log(res.data);
            setBlogList(res.data)
        }).catch((err) => {
            console.log(err.response.data.message)
            alert(err.response.data.message)
        })
    }, [show])

    const handleRefersh =()=>{
        axios.post(`${api_end_point}/task/assignedFrom` ,{userEmail : sessionStorage.getItem('email')},{
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
            }
        }).then(res => {
            console.log(res.data);
            setBlogList(res.data)
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
                            Task Assigned To  ({blogList.length})
                        </div>

                    </div>
                    <button type="button" className="add-btn" onClick={() => navigate('/add-task')}>Add New Task</button>
                </div>
                <input className="form-control me-2 mb-5 w-25" type="search" placeholder="Search" aria-label="Search" />

                {blogList && <BlogsTable data={blogList} handleModalData={handleModalData} handleStatus={handleStatus}/>}

                {modalData && <BlogView show={show} setShow={setShow} modalData={modalData} />}


            </div>
        </div>
    )

}

export default TaskAssignTo;