import React, { useEffect, useState } from "react";
import Card from "../../component/Card/Card";
import Table from "../../component/Table/Table";

import './home.css';
import axios from "axios";

import { api_end_point } from "../../api/api";






const HomePage = () => {

    const [custList, setCustList] = useState([])

    useEffect(() => {


        axios.get(`${api_end_point}/customers`).then((res) => {

            console.log(res, "RES")

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




    return (
        <div className="home-main-container ">
            <div className="home-data-section">
                {/* <Card heading={'Total Customers'} content={'200'} link="/customers" />
                <Card heading={'Total Astrologers'} content={'200'} link="/astrologer" /> */}


            </div>
            <div className="home-container">


                <div class="w-25 mt-4 mb-3">
                    <div class="heading-content">
                        New Queries
                    </div>
                </div>

                <div>
                    {
                    !custList && <div class="spinner-border m-5" role="status">
                        <span class="sr-only"></span>
                    </div>
                    }
                </div>
                {custList && <Table list={custList} handleModalData={handleModalData} viewbtn={false} />
                }
            </div>
        </div>
    )

}

export default HomePage;