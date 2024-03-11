import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api_end_point } from "../../api/api";
import departMentList from "../../constants/departments";
import './user.css';

const AddNewUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [role, setRole] = useState('');
    const [userName, setUserName] = useState('');
    const [dob, setDOB] = useState('');
    const [address, setAddress] = useState('');
    const [city_state, setCityState] = useState('');
    const [mobile, setMob] = useState('');
    const [alternateMob, setAltMob] = useState('');
    const [depatment, setDepart] = useState('');
    const [confirmPass, setConfirm] = useState('')
    const navigate = useNavigate('')


    const [roleList, setRoleList] = useState([]);

    useEffect(() => {


        axios.get(`${api_end_point}/permission/`,{
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
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


    const handleRegister = (e) => {
        e.preventDefault();


        if (password !== confirmPass) return alert('Password not matched');


        axios.post(`${api_end_point}/userAuth/register`, { email, password, role, userName, dob, address, city_state, mobile, alternateMob, depatment }, {
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
                'Authorization': sessionStorage.getItem("access-token")
            }
        }).then((res) => {

            console.log(res, 'response')

            navigate('/users')

        }).catch((err) => {
            console.log(err)
            alert(err.response.data.message)
        })
    }

    return (
        <div className="user-container">
            <div className="user-header">

                <div className="w-25 mt-5 mb-5 w-10">
                    <div className="heading-content">
                       Add New User
                    </div>

                </div>

            </div>
            <div className="user-input-container">
                <div className="row">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Name</label>

                        <input type="text" className="form-control" placeholder="Name" onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Email</label>

                        <input type="text" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Dob</label>

                        <input type="date" className="form-control" placeholder="Dob" onChange={(e) => setDOB(e.target.value)} />
                    </div>
                    <div className="col text-start">
                        {/* <label for="formGroupExampleInput" className="form-label">UPLOAD PROFILE</label>

                        <input type="file" className="form-control" placeholder="Image" /> */}
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Address</label>

                        <input type="text" className="form-control" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">City/State</label>

                        <input type="text" className="form-control" placeholder="City/State" onChange={(e) => setCityState(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Create Password</label>

                        <input type="text" className="form-control" placeholder="Create Password" onChange={(e) => setPass(e.target.value)} />
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Confirm Password</label>

                        <input type="text" className="form-control" placeholder="Confirm Password" onChange={(e) => setConfirm(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Mobile Number</label>

                        <input type="number" className="form-control" placeholder="Mobile Number" onChange={(e) => setMob(e.target.value)} />
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Alternate Mobile Number</label>

                        <input type="number" className="form-control" placeholder="Alternate Mobile Number" onChange={(e) => setAltMob(e.target.value)} />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Role</label>

                        <select class="form-control form-select" aria-label="Default select example" onChange={(e) => setRole(e.target.value)}>
                            <option selected>Open this select menu</option>
                            {roleList.map((data) => {
                                return (<option value={data.name}>{data.name}</option>)
                            })}

                        </select>
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Department</label>

                        {/* <input type="text" className="form-control" placeholder="DEPARTMENT" aria-label="Last name" /> */}
                        <select class="form-control form-select" aria-label="Default select example" onChange={(e) => setDepart(e.target.value)}>
                            <option selected>Open this select menu</option>
                            {departMentList.map((data) => {
                                return (<option value={data.title}>{data.title}</option>)
                            })}

                        </select>
                    </div>
                </div>
                <div className="mt-3 mb-3 w-100 d-flex flex-column align-items-end">
                    <button type="button" className="add-btn" onClick={handleRegister}>Submit</button>
                </div>
            </div>


        </div>
    )

}

export default AddNewUser;
