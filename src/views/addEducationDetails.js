import React from "react";

const Educationaldetails = ({ nextStep, prevStep, handleOnchange ,validationCheck  }) => {
    return (
        <div className="card h-50 m-2 w-80">
            <div className="card-body">
                <h5 className="card-title">Educational Details</h5>

                <div className="mb-3">
                    <label for="name">Degree  <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Degree" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'education' , 'degree')}  onBlur={(e) => validationCheck(e)}/>
                </div>

                <div className="mb-3">
                    <label for="name">Major</label>
                    <input type="text" className="form-control" placeholder="Major" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'education' , 'major')} />
                </div>


                <div className="mb-3">
                    <label for="name">School</label>
                    <input type="text" className="form-control" placeholder="School" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'education' , 'school')} />
                </div>

                <div className="mb-3">
                    <label for="name">Graduation Year <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Graduation Year" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'education' ,'graduationYear' )} onBlur={(e) => validationCheck(e)} type='number'/>
                </div>

                <button className="btn btn-primary m-2" onClick={() => prevStep()}>Previous</button>

                <button className="btn btn-primary m-2" onClick={() => {nextStep() } }>Next</button>
            </div>
        </div>
    )
}

export default Educationaldetails;