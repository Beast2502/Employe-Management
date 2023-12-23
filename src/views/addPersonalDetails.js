import React from "react";

const UserDetails = ({ nextStep, handleOnchange , validationCheck}) => {
    return (<>
        <div className="card h-50 m-2 w-80">
            <div className="card-body">
                <h5 className="card-title">Personal Details</h5>


                <div className="mb-3">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'name')}  />
                </div>

                <div className="mb-3">
                    <label for="name">Email <span className="text-danger">*</span></label>   
                    <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'email')} onBlur={(e) => validationCheck(e)}/>

                </div>

                <div className="mb-3">
                    <label for="name">Mobile</label>
                    <input type="text" className="form-control" placeholder="Mobile" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'mobileNumber')} type='number' />
                </div>

                <div className="mb-3">
                    <label for="name">Address</label>
                    <input type="text" className="form-control" placeholder="Street" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'address' , 'street')} />
                    <input type="text" className="form-control" placeholder="City" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'address' , 'city')} />
                    <input type="text" className="form-control" placeholder="Zip Code" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'address' , 'zipcode')} type='number'/>

                </div>


                <button className="btn btn-primary" onClick={() => {
                    nextStep();                    
                    }}>Next</button>
            </div>
        </div>


    </>)
}

export default UserDetails;