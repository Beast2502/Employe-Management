import axios from "axios";
import React, { useState } from "react";

const AddNewCustomer = () => {

    // email, password, role ,userName ,dob, address, city_state ,mobile ,alternateMob ,depatment



    return (
        <div className="user-container">
            <div className="user-header">

                <div className="w-25 mt-5 mb-5 w-10">
                    <div className="heading-content">
                        ADD NEW CUSTOMER
                    </div>

                </div>

            </div>
            <div className="user-input-container">
                <div className="row">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">NAME</label>

                        <input type="text" className="form-control" placeholder="NAME" aria-label="First name" />
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">EMAIL</label>

                        <input type="text" className="form-control" placeholder="EMAIL" aria-label="Last name" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">DOB</label>

                        <input type="date" className="form-control" placeholder="DOB" aria-label="First name" />
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">UPLOAD PROFILE</label>

                        <input type="file" className="form-control" placeholder="ADDRESS" aria-label="Last name" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">ADDRESS</label>

                        <input type="text" className="form-control" placeholder="ADDRESS" aria-label="First name" />
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">CITY/STATE</label>

                        <input type="text" className="form-control" placeholder="CITY/STATE" aria-label="Last name" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">CREATE PASSWORD</label>

                        <input type="text" className="form-control" placeholder="CREATE PASSWORD" aria-label="First name" />
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">CONFIRM PASSWORD</label>

                        <input type="text" className="form-control" placeholder="CONFIRM PASSWORD" aria-label="Last name" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">MOBILE NUMBER</label>

                        <input type="text" className="form-control" placeholder="MOBILE NUMBER" aria-label="First name" />
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">ALTERNATE MOBILE NUMBER</label>

                        <input type="text" className="form-control" placeholder="ALTERNATE MOBILE NUMBER" aria-label="Last name" />
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">ROLE</label>

                        <input type="text" className="form-control" placeholder="ROLE" aria-label="First name" />
                    </div>
                    <div className="col text-start">
                        <label for="formGroupExampleInput" className="form-label">DEPARTMENT</label>

                        <input type="text" className="form-control" placeholder="DEPARTMENT" aria-label="Last name" />

                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <button type="button" class="add-btn">SUBMIT</button>

                </div>
            </div>


        </div>
    )

}

export default AddNewCustomer;
