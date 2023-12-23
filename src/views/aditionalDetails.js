import React from "react";

const AdditionalDetails = ({ prevStep, nextStep, handleOnchange ,handleFormData ,validationCheck}) => {
    return (
        <div className="card h-50 m-2 w-80">
            <div className="card-body">
                <h5 className="card-title">Additional Details - Emergency Contact</h5>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Name" onChange={(e) => handleOnchange(e, 'emergencyContact' , 'name')}  onBlur={(e) => validationCheck(e)}/>
                </div>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Relationship</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Relationship" onChange={(e) => handleOnchange(e, 'emergencyContact' , 'relationship')} />
                </div>


                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Phone<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Phone" onChange={(e) => handleOnchange(e, 'emergencyContact' , 'phone')}  onBlur={(e) => validationCheck(e)} type='number'/>
                </div>

                <button className="btn btn-primary m-2" onClick={() => prevStep()}>Previous</button>

                <button className="btn btn-primary m-2" onClick={() => handleFormData()}>Submit Details</button>
            </div>
        </div>)
}

export default AdditionalDetails;