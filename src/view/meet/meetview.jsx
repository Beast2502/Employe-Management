import React, { useEffect, useState } from "react";
import Table from '../../component/Table/Table';
import './meetView.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api_end_point } from "../../api/api";

const Meet = () => {




    const [meetlink, setMeetlink] = useState("");

    const [data, setData] = useState('');

    const handleMeetLink = () => {

        const id = "65a80f27e77e5f85f531b8ac"



        axios.post(`${api_end_point}/meet/update`, { id: id, meetlink: meetlink }).then((res) => {
            console.log(res.data)
            setData(res.data.meetlink)
        })
    }

    useEffect(() => {

        axios.get(`${api_end_point}/meet/`).then((res) => {

            console.log(res.data)

            setData(res.data[0].meetlink);


        }
        ).catch((err) => {
            console.log(err.response.data.message, "ERRR")
            alert(err.response.data.message)
        })

    }, [setData])








    return (
        <div className="meet-main-container ">
            <div className="meet-container">
                <div className="meet-header">
                    <div className="w-25 mt-5 mb-5 w-10">
                        <div className="heading-content">
                            Meet link
                        </div>
                    </div>
                    {/* <button type="button" className="add-btn" onClick={handleMeetLink}>UPDATE LINK</button> */}



                </div>

                <div className="meet-sub-cont">
                    <div class="card" style={{ width: '30rem', padding: '10px', textAlign: 'left' }}>
                        <label for="exampleFormControlInput1" class="form-label">New Meet Link</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Meet link" onChange={(e) => setMeetlink(e.target.value)} />
                        <button type="button" className="add-btn mt-3" onClick={handleMeetLink}>UPDATE LINK</button>
                    </div>
                    <span class="add-btn" style={{ height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '15px', width: '500px', marginTop: '20px' }}> {data}</span>

                </div>
            </div>
        </div>
    )

}

export default Meet;