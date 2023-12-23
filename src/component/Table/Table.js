import React, { useEffect, useState } from "react";
import "./Table.css";

import Modal from 'react-bootstrap/Modal';

import Badge from 'react-bootstrap/Badge';

import { connect } from "react-redux";
import { getUser } from "../../redux/action/userActions";
import { useNavigate } from "react-router-dom";


const Table = (props) => {

    const navigate = useNavigate();

    console.log(props.user, "TABLE DATA")
    const [data, setData] = useState(props.user);

    const handleSearch = (e) => {
        console.log(e.target.value.length)

        if (!e.target.value.length) {
            console.log(props.user)
            return setData(props.user)
        };

        const copyData = data;
        const out = copyData.filter(data => data.name.toLowerCase().includes(e.target.value.toLowerCase()))
        setData(out)
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    const [modalData, setModalData] = useState({});

    const handleModelData = (data) => {
        setShow(true);
        console.log(data);
        setModalData(data);
    }

    return (
        <>
            <div className="search-box-container w-75" >
                <input className="form-control mr-sm-2 input-field w-50" type="search" placeholder="Search" aria-label="Search" onChange={handleSearch} />
                <button type="button" className="btn btn-info h-25 text-white" onClick={() => navigate("/addnew")}>Add New User</button>
            </div>

            <table className="table table-striped" >
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Department</th>
                        <th scope="col">Position</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {data?.map((data, i) => {
                        return (
                            <tr>
                                <th scope="row">{i + 1}</th>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.department}</td>
                                <td>{data.position}</td>
                                <td>
                                    <button type="button" className="btn btn-warning" onClick={() => handleModelData(data)}>View</button>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" tabindex="-1">Previous</a>
                    </li>
                    <li className="page-item"><a className="page-link" >1</a></li>
                    <li className="page-item"><a className="page-link" >2</a></li>
                    <li className="page-item"><a className="page-link" >3</a></li>
                    <li className="page-item">
                        <a className="page-link">Next</a>
                    </li>
                </ul>
            </nav>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                fullscreen={true}
                aria-labelledby="example-custom-modal-styling-title"
                style={{ zIndex: '4444444' }}
            >

                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Employee Detail View
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row justify-content-center">

                        {/* 1 section */}
                        <div className="col-md-4 col-sm-6 d-flex">
                            <div className="card m-3 w-100">
                                <div className="card-body">
                                    {/* <div className="row flex-sm-row flex-column"> */}
                                    <h5 className="card-title">Personal Info</h5>
                                    <div className="table-responsive">
                                        <table className="table" >
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Name</th>
                                                    <td>{modalData.name}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Email</th>
                                                    <td>{modalData.email}</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Mobile</th>
                                                    <td>{modalData.mobileNumber}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Address</th>
                                                    <td>
                                                        {modalData?.address?.street}

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">City</th>
                                                    <td> {modalData?.address?.city}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Zip Code</th>
                                                    <td>{modalData?.address?.zipcode}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex">
                            <div className="card m-3 w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Employment Info</h5>
                                    <div className="table-responsive">
                                        <table className="table" >
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Employee ID</th>
                                                    <td>#####3</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Department</th>
                                                    <td> {modalData?.department}</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Position</th>
                                                    <td>{modalData?.position}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Supervisor</th>
                                                    <td>{modalData?.supervisor}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Hire Date</th>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Salary</th>
                                                    <td>{modalData?.salary}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Employment Type</th>
                                                    <td>{modalData?.employmentType}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 section */}
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-6 d-flex">
                            <div className="card m-3 w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Skills</h5>

                                    {modalData?.skills && modalData?.skills?.map(data => (<Badge bg="primary" className="m-1">{data.value}</Badge>))}



                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex">
                            <div className="card m-3 w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Certification</h5>
                                    {modalData?.certifications && modalData?.certifications?.map(data => (<Badge bg="warning" className="m-1">{data.value}</Badge>))}

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 Section */}
                    <div className="row justify-content-center">
                        <div className="col-md-4 col-sm-6 d-flex">
                            <div className="card m-3 w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Educational Info</h5>

                                    <div className="table-responsive">
                                        <table className="table" >
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Highest Degree</th>
                                                    <td>{modalData?.education?.degree}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">School / University</th>
                                                    <td>{modalData?.education?.school}</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Graduation Year</th>
                                                    <td>{modalData?.education?.graduationYear}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Major</th>
                                                    <td>{modalData?.education?.major}</td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 d-flex">
                            <div className="card m-3 w-100">
                                <div className="card-body">
                                    <h5 className="card-title">Additional Info</h5>

                                    <div className="table-responsive">
                                        <table className="table" >
                                            <tbody>
                                                <tr>
                                                    <th scope="row">Emergency Contact Name</th>
                                                    <td>{modalData?.emergencyContact?.name}</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">Emergency Contact Mob.</th>
                                                    <td>{modalData?.emergencyContact?.phone}</td>

                                                </tr>
                                                <tr>
                                                    <th scope="row">Notes</th>
                                                    <td></td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state,
        user: state.user.users
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        getUsers: () => dispatch(getUser)
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Table);