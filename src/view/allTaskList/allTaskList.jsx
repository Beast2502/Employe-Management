import React, { useEffect, useState } from "react";
import Table from './Table';
import axios from "axios";

import './customer.css'
import CustomerView from "./customersView";
import { api_end_point } from "../../api/api";

const AllTaskList = () => {

    const [custList, setCustList] = useState([])

    const [filterShow, setFilterShow] = useState(false);

    const [filterdata, setFilterData] = useState('');

    const [totalPages, setTotalPage] = useState(0);

    const [totalTask , setTotalTask] = useState(0);

    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (page) => {
        setCurrentPage(page);

    };



    useEffect(() => {


        axios.post(`${api_end_point}/task`, {
            page: currentPage,

        }, {
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }

        }).then((res) => {


            setCustList(res.data.list);
            setTotalPage(res.data.totalPage);
            setTotalTask(res.data.totalTask);


        }
        ).catch((err) => {
            console.log(err.response.data.message, "ERRR")
            alert(err.response.data.message)
        })

    }, [currentPage]);

    const [show, setShow] = useState(false);
    const [modalData, setModalData] = useState({});

    const handleModalData = (data) => {
        setShow(true);
        setModalData(data)

    }

    const handleRefersh = () => {
        axios.post(`${api_end_point}/task`, {
            page: currentPage,
        }, {
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }
        },).then((res) => {

            console.log(res, "RES")

            setCustList(res.data.list)

        }
        ).catch((err) => {
            console.log(err.response.data.message, "ERRR")
            alert(err.response.data.message)
        })

    }





    const renderPaginationTabs = () => {
        const paginationTabs = [];

        for (let i = 1; i <= totalPages; i++) {
            paginationTabs.push(
                <li classNmae="page-item">
                    <button key={i}
                        onClick={() => handleClick(i)}
                        className={currentPage === i ? 'page-link' : 'page-link'}
                    >
                        {i}</button>
                </li>

            );
        }
        return paginationTabs;
    };



    return (
        <div className="cust-main-container ">
            <div className="cust-container">
                <div className="cust-header">
                    <div className="w-25 mt-5 mb-5 w-10">
                        <div className="heading-content">
                            All Employee Task List({totalTask})
                        </div>

                    </div>
                    <div className="filter-btngrp">
                        <div role="group">
                            <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle btn-filter-color " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setFilterShow(!filterShow)}>
                                Filter
                            </button>
                            {filterShow &&
                                <div className="dropdown-menu-new" aria-labelledby="btnGroupDrop1">
                                    <button class="dropdown-item" > <span class="badge text-bg-warning" onClick={() => setFilterData('All')}>All</span></button>
                                    <button class="dropdown-item" > <span class="badge text-bg-success" onClick={() => setFilterData('Completed')}>Completed</span></button>
                                    <button class="dropdown-item" > <span class="badge text-bg-danger" onClick={() => setFilterData('Not Completed')}>Not Completed</span></button>
                                    <button class="dropdown-item" > <span class="badge text-bg-primary" onClick={() => setFilterData('Pending')}>Pending</span></button>


                                </div>
                            }

                        </div>


                        <button type="button" className="add-btn" onClick={handleRefersh}>Refresh</button>
                    </div>

                </div>
                <input className="form-control me-2 mb-5 w-25" type="search" placeholder="Search" aria-label="Search" />


                <Table list={custList} handleModalData={handleModalData} viewbtn={true} filterdata={filterdata} />
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" onClick={()=>handleClick(1)} aria-label="Previous">
                            <span aria-hidden="true">First</span>
                        </button>
                    </li>
                    {renderPaginationTabs()}
                    {/* <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li> */}
                    <li class="page-item">
                        <button class="page-link" onClick={()=>handleClick(totalPages)} aria-label="Next">
                            <span aria-hidden="true">Last</span>
                        </button>
                    </li>
                </ul>
                <CustomerView show={show} setShow={setShow} modalData={modalData} />
            </div>
        </div>
    )

}

export default AllTaskList;