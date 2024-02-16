import React, { useEffect, useState } from "react";
import Table from './Table';
import axios from "axios";

import './customer.css'
import CustomerView from "./customersView";
import { api_end_point } from "../../api/api";

const Customer = () => {

    const [custList, setCustList] = useState([])

    useEffect(() => {


        axios.post(`${api_end_point}/task/assigned` ,{userEmail : sessionStorage.getItem('email')}).then((res) => {

            console.log(res, "ASSIGEND TASK ")

            setCustList(res.data)

        }
        ).catch((err) => {
            console.log(err.response.data.message, "ERRR")
            alert(err.response.data.message)
        })

    }, []);

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleModalData = (data) => {
        setShow(true);
        setModalData(data)

    }

    const handleRefersh = () => {
        axios.post(`${api_end_point}/task/assigned` ,{userEmail : sessionStorage.getItem('email')}).then((res) => {

            console.log(res, "RES")

            setCustList(res.data)

        }
        ).catch((err) => {
            console.log(err.response.data.message, "ERRR")
            alert(err.response.data.message)
        })

    }


    const handleStatus = (_id , status) =>{

        try{
    
          axios.post(`${api_end_point}/task/update` ,{_id , status}).then(res=>{
            handleRefersh()
            alert(res.data.message)
          })
    
        }catch(err){
          console.log(err)
        }
    
      }


      console.log("CUSTOMER")


    return (
        <div className="cust-main-container ">
            <div className="cust-container">
                <div className="cust-header">
                    <div className="w-25 mt-5 mb-5 w-10">
                        <div className="heading-content">
                            My Task ({custList.length})
                        </div>

                    </div>
                    <button type="button" className="add-btn" onClick={handleRefersh}>Refresh</button>

                </div>
                <input className="form-control me-2 mb-5 w-25" type="search" placeholder="Search" aria-label="Search" />

                <Table list={custList} handleModalData={handleModalData} viewbtn={true} handleStatus={handleStatus}/>

                <CustomerView show={show} setShow={setShow} modalData={modalData} />
            </div>
        </div>
    )

}

export default Customer;