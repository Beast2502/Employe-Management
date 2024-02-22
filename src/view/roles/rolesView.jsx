import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";
import modulesList from "../../constants/constants";
import axios from "axios";
import { api_end_point } from "../../api/api";

import levels from "../../constants/levels";





const RolesView = ({ show, setShow, modalData }) => {


    const [selected, setSelected] = useState([])

    const [roleName, setRolename] = useState("");

    const [modules, setModules] = useState([]);

    const [level, setlevel] = useState("");

    const navigate = useNavigate();

    const data = [
        { id: 1, title: 'create_task' },
        { id: 2, title: 'update_task' },
        { id: 3, title: 'delete_task' },
        { id: 4, title: 'read_task' },
    ]


    useEffect(() => {
        setRolename(modalData.name)
        setModules(modalData.modules)
        setSelected(modalData.permissions)
        setlevel(modalData.level)
    }, [modalData])



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

    const handleUpdateUser = (id) => {
        console.log(selected, modules, id, "FORM UPDATE")
        axios.post(`${api_end_point}/permission/update`, { _id: id, name: roleName, permissions: selected, modules: modules, level: level }, {
            headers: {
                'ngrok-skip-browser-warning': 'skip-browser-warning',
            }
        }).then((res) => {
            setShow(false)


            alert(res.data.message)

        }).catch(err => console.log(err))
    }


    return (


        <Modal
            show={show}
            onHide={() => setShow(false)}
            fullscreen={false}
            aria-labelledby="example-custom-modal-styling-title"
            style={{ zIndex: '4444444' }}
        >

            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title " className="heading-content">
                    Roles Detail View
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">

                    {/* 1 section */}
                    <div className="card-body">

                        <table className="table table-borderless text-start" >
                            <tbody>
                                <tr>
                                    <th scope="row"><label className="form-label">Name</label></th>
                                    <td>
                                        <input className="form-control" type="text" value={roleName} onChange={(e) => setRolename(e.target.value)} />

                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row "><label className="form-label">Modules</label></th>
                                    <td>
                                        {modules?.map((data) => {
                                            return <span class="badge text-bg-primary">{data}</span>
                                        })}

                                        <div>
                                            {modulesList?.map((data) => {
                                                return (
                                                    <div className="flex-row" >
                                                        <input type="checkbox" style={{ marginRight: '2px' }} onChange={() => handleModules(data.title)} />
                                                        <label for="formGroupExampleInput" className="form-label">{data.title}</label>
                                                    </div>)
                                            })}

                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row"><label className="form-label">Permissions</label></th>
                                    <td>
                                        {selected?.map((data) => {
                                            return <span class="badge text-bg-primary">{data}</span>
                                        })}

                                        <div>
                                            <div>
                                                {data?.map((data) => {
                                                    return (
                                                        <div className="flex-row" >
                                                            <input type="checkbox" value={'read_task'} style={{ marginRight: '2px' }} onChange={() => handleOptions(data.title)} />
                                                            <label for="formGroupExampleInput" className="form-label">{data.title.toUpperCase()}</label>
                                                        </div>)
                                                })}

                                            </div>

                                        </div>
                                    </td>

                                </tr>
                                <tr>
                                    <th scope="row"><label className="form-label">Level</label></th>
                                    <td>
                                        <span class="badge text-bg-primary mb-2">{levels.map((data)=>{
                                            if(data.value === level){
                                                return data.title
                                            }
                                        })}</span>

                                        <select class="form-control form-select" aria-label="Default select example" onChange={(e) => setlevel(e.target.value)}>
                                            {levels.map((data) => {
                                                return (<option value={data.value}>{data.title}</option>)
                                            })}

                                        </select>

                                    </td>

                                </tr>

                            </tbody>
                        </table>

                        <div className="d-flex flex-column align-items-end">
                            <button className="add-btn" onClick={() => handleUpdateUser(modalData._id)}>UPDATE</button>

                        </div>
                    </div>



                </div>



            </Modal.Body>
        </Modal>

    )

}

export default RolesView;