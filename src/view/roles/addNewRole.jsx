import axios from "axios";
import React, { useState } from "react";
import "./roles.css"
import { api_end_point } from "../../api/api";
import modulesList from "../../constants/constants";
import { useNavigate } from "react-router-dom";

const AddNewRole = () => {
    const [selected, setSelected] = useState([])

    const [roleName, setRolename] = useState("");

    const [modules , setModules] = useState("");

    const navigate = useNavigate();

    const data = [
        { id: 1, title: 'create_task' },
        { id: 2, title: 'update_task' },
        { id: 3, title: 'delete_task' },
        { id: 4, title: 'read_task' },
    ]


    const handleModules = (title) => {
        setModules(prevSelected => {
            // if it's in, remove
            const newArray = [...prevSelected]
            if (newArray.includes(title)) {
                return newArray.filter(item => item != title)
                // else, add
            } else {
                newArray.push(title)
                return newArray;
            }
        })
    }


    const handleOptions = (title) => {
        setSelected(prevSelected => {
            // if it's in, remove
            const newArray = [...prevSelected]
            if (newArray.includes(title)) {
                return newArray.filter(item => item != title)
                // else, add
            } else {
                newArray.push(title)
                return newArray;
            }
        })
    }

    const handleRole = () => {
        axios.post(`${api_end_point}/permission/create`, { name: roleName, permissions: selected ,modules : modules }).then((res) => {
            console.log(res.message)
            navigate('/roles')

        })
    }

    console.log(selected, "SELECTED")
    console.log(modules,"Modules")


    return (
        <div className="role-container" style={{width : "900px"}}>
            <div className="role-header">

                <div className="w-25 mt-5 mb-5 w-10">
                    <div className="heading-content">
                        Add New Role
                    </div>

                </div>

            </div>
            <div className="user-input-container">
                <div className="row">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Role Name</label>

                        <input type="text" className="form-control" placeholder="Role Name" onChange={(e) => setRolename(e.target.value)} />
                    </div>

                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Modules</label>

                        <div>
                            {modulesList.map((data) => {
                                return (
                                    <div className="flex-row" >
                                        <input type="checkbox"  style={{marginRight:'2px'}} onChange={() => handleModules(data.title)} />
                                        <label for="formGroupExampleInput" className="form-label">{data.title}</label>
                                    </div>)
                            })}

                        </div>
                    </div>


                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">Permissions</label>

                        <div>
                            {data.map((data) => {
                                return (
                                    <div className="flex-row" >
                                        <input type="checkbox" value={'read_task'} style={{marginRight:'2px'}} onChange={() => handleOptions(data.title)} />
                                        <label for="formGroupExampleInput" className="form-label">{data.title.toUpperCase()}</label>
                                    </div>)
                            })}

                        </div>
                    </div>


                </div>



                <div className="row mt-5 mb-3 d-flex flex-row-reverse w-100">
                    <button type="button" class="add-btn w-25" onClick={handleRole}>SUBMIT</button>

                </div>
            </div>


        </div>
    )

}

export default AddNewRole;
