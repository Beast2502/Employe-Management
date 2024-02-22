import axios from "axios";
import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { api_end_point } from "../../api/api";
import departMentList from "../../constants/departments";

import "./user.css";

import ViewListIcon from '../../assets/viewListIcon.svg'




const UsersView = ({ show, setShow, modalData }) => {

    const [email, setEmail] = useState();
    const [password, setPass] = useState();
    const [role, setRole] = useState();
    const [userName, setUserName] = useState();
    const [dob, setDOB] = useState();
    const [address, setAddress] = useState();
    const [city_state, setCityState] = useState();
    const [mobile, setMob] = useState();
    const [alternateMob, setAltMob] = useState();
    const [depatment, setDepart] = useState();
    const [isActive, setIsActive] = useState();

    useEffect(() => {
        setEmail(modalData.email);

        setRole(modalData.role);
        setUserName(modalData.userName);
        setAltMob(modalData.alternateMob);
        setDOB(modalData.dob);
        setMob(modalData.mobile);
        setDepart(modalData.depatment);
        setCityState(modalData.city_state)
        setAddress(modalData.address)
        setIsActive(modalData.isActive)
    }, [modalData])



    const handleUpdateUser = (id) => {

        axios.post(`${api_end_point}/userAuth/update`, {
            _id: id,
            email,
            password,
            role,
            userName,
            dob,
            address,
            city_state,
            mobile,
            alternateMob,
            depatment,
            isActive
        }, {
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
            }
        }).then((res) => {
            setShow(false)
            alert('Updated')

        })
    }

    const [roleList, setRoleList] = useState([]);

    useEffect(() => {


        axios.get(`${api_end_point}/permission/`, {
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
            }
        }).then((res) => {


            console.log(res?.data?.role, "ROLE LIST")
            setRoleList(res?.data?.role)


        }
        ).catch((err) => {
            console.log(err, "ERRR")
            // alert(err.response?.data.message)
        })

    }, [])


    return (


        <Modal
            show={show}
            onHide={() => setShow(false)}
            fullscreen={false}
            aria-labelledby="example-custom-modal-styling-title"
            style={{ zIndex: '4444444' }}
        >

            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title" className="heading-content">
                    Users Detail View
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row justify-content-center">

                    <div className="">
                        <div className="">
                            <div className="card-body">
                                <table className="table table-borderless text-start" >
                                    <tbody>
                                        <tr>
                                            <th scope="row"><label className="form-label">Name</label></th>
                                            <td>
                                                <input className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><label className="form-label">Email</label></th>
                                            <td>
                                                <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row"><label className="form-label">Update Password</label></th>
                                            <td>
                                                <input className="form-control" type="password" onChange={(e) => setPass(e.target.value)} />
                                            </td>

                                        </tr>
                                        <tr>
                                            <th scope="row"><label className="form-label">Mobile</label></th>
                                            <td>
                                                <input className="form-control" value={mobile} onChange={(e) => setMob(e.target.value)} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><label className="form-label">Role</label></th>
                                            <td>
                                                <select className="form-control form-select" aria-label="Default select example" onChange={(e) => setRole(e.target.value)}>
                                                    <option selected>{role}</option>
                                                    {roleList.map((data) => {
                                                        return (<option value={data.name}>{data.name}</option>)
                                                    })}

                                                </select>
                                            </td>

                                        </tr>


                                        <tr>
                                            <th scope="row"><label className="form-label">Address</label></th>
                                            <td>
                                                <input className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />

                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><label className="form-label">City/State</label></th>
                                            <td>
                                                <input className="form-control" value={city_state} onChange={(e) => setCityState(e.target.value)} />


                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="row"><label className="form-label">Department</label></th>
                                            <td>
                                                {/* <input className="form-control" value={depatment} onChange={(e) => setDepart(e.target.value)} /> */}

                                                <select class="form-control form-select" aria-label="Default select example" onChange={(e) => setDepart(e.target.value)}>
                                                    <option selected>{depatment}</option>
                                                    {departMentList.map((data) => {
                                                        return (<option value={data.title}>{data.title}</option>)
                                                    })}

                                                </select>

                                            </td>
                                        </tr>

                                        <tr>
                                            <th scope="row"><label className="form-label">Dob</label></th>
                                            <td>
                                                <input className="form-control" value={dob} type="date" />

                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><label className="form-label">isActive</label></th>
                                            <td>
                                                {modalData.isActive}
                                                <input type="checkbox" checked={isActive} onClick={() => setIsActive(!isActive)} />
                                            </td>
                                            <td></td>

                                        </tr>
                                    </tbody>

                                </table>
                                <div className="d-flex flex-column align-items-end">
                                    <button className="add-btn" onClick={() => handleUpdateUser(modalData._id)}>UPDATE</button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>



            </Modal.Body>
        </Modal>

    )

}

export default UsersView;