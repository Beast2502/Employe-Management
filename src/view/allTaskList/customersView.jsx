import React from "react";
import Modal from 'react-bootstrap/Modal';



const CustomerView = ({ show, setShow, modalData }) => {

    console.log(modalData)

    return (


        <Modal
            show={show}
            onHide={() => setShow(false)}
            fullscreen={false}
            aria-labelledby="example-custom-modal-styling-title"
            style={{ zIndex: '4444444' }}
        >

            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    Customers Detail View
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row justify-content-center">

                    {/* 1 section */}
                    <div className="w-100">
                        {/* <div className="row flex-sm-row flex-column"> */}
                        <div className="">
                            <table className="table" >
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>{modalData.userName}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Email</th>
                                        <td>{modalData.email}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Mobile</th>
                                        <td>{modalData.pincode} {modalData.mobile}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Date of Birth</th>
                                        <td>
                                            {new Date(modalData.dob).toLocaleDateString('en-GB')}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">City</th>
                                        <td> {modalData.birthPlace}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Meet Time</th>
                                        <td>{new Date(modalData.meetTime).toLocaleDateString('en-GB')}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>



            </Modal.Body>
        </Modal>

    )

}

export default CustomerView;