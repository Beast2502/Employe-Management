import React, { useEffect, useState } from "react";
import Select from "react-select";


const ProfessionalDetails = ({ nextStep, prevStep, handleOnchange, validationCheck }) => {

    const options = [
        { value: "React", label: "React" },
        { value: "Vue", label: "Vue" },
        { value: "Angular", label: "Angular" },
        { value: "Java", label: "Java" },
        { value: "Excel", label: "Excel" },
        { value: "PowerBI", label: "Power BI" }
    ];
    const optionsCerti = [
        { value: "HR", label: "HR" },
        { value: "IT", label: "IT" },
        { value: "Frontend", label: "Frontend" },
        { value: "Devops", label: "Devops" },
        { value: "Data Engineer", label: "Data Engineer" },
        { value: "Sql", label: "Sql" }
    ];
    const [skills, setSkills] = useState('');
    const [certi ,setCerti] = useState('');

    const handleChange = (skill) => {
        setSkills(skill || [])
        };

    const handleCerti = (certi)=>{
        setCerti(certi || [])
    }

   useEffect(()=>{
    handleOnchange(skills, 'skills')
   },[skills])

   useEffect(()=>{
    handleOnchange(certi , 'certifications');
   },[certi]);

console.log(certi)

    return (
        <div className="card h-50 m-2 w-80">
            <div className="card-body">
                <h5 className="card-title">Professional Details</h5>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Department<span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Department" onChange={(e) => handleOnchange(e, 'department')} onBlur={(e) => validationCheck(e)} />
                </div>

                <div className="mb-3">
                    <label for="name">Position</label>
                    <input type="text" className="form-control" placeholder="Position" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'position')} />
                </div>

                <div className="mb-3">
                    <label for="name">Employement Type <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Employement Type" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'employmentType')} onBlur={(e) => validationCheck(e)} />
                </div>


                <div className="mb-3">
                    <label for="name">Salary</label>
                    <input type="text" className="form-control" placeholder="Salary" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'salary')} type='number' />
                </div>

                <div className="mb-3">
                    <label for="name">Supervisor</label>
                    <input type="text" className="form-control" placeholder="Supervisor" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => handleOnchange(e, 'supervisor')} />
                </div>


                <div className="mb-3">
                    <label for="name">Skills</label>
                    <Select
                        options={options}
                        onChange={handleChange}
                        value={skills}
                        isMulti
                    />
                </div>

                <div className="mb-3">
                    <label for="name">Certifications</label>
                    <Select
                        options={optionsCerti}
                        onChange={handleCerti}
                        value={certi}
                        isMulti
                    />
                </div>

                <button className="btn btn-primary m-2" onClick={() => prevStep()}>Previous</button>

                <button className="btn btn-primary m-2" onClick={() => { nextStep(); }}>Next</button>
            </div>
        </div>
    )
}

export default ProfessionalDetails;