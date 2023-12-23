import { useState } from "react";
import "./home.css";


import UserDetails from "./addPersonalDetails";
import AdditionalDetails from "./aditionalDetails";
import Educationaldetails from "./addEducationDetails";
import ProfessionalDetails from "./addProfessionalDetails";
import { addUser } from "../redux/action/userActions";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";

const AddNewEmployee = (props) => {
    const navigate = useNavigate();

    const [step ,setStep] = useState(0);

    const nextStep = () =>{  
            setStep(step+1);
    }

    const prevStep = () =>{
        setStep(step-1)
    }

    const [userDetails , setUserDetails] = useState({
        "name": "",
        "email": "",
        "mobileNumber": "",
        "address": {
          "street": "",
          "city": "",
          "zipcode": ""
        },
        "department": "",
        "position": "",
        "employmentType": "",
        "salary": "",
        "supervisor": "",
        "skills": [],
        "certifications": [],
        "education": {
          "degree": "",
          "major": "",
          "school": "",
          "graduationYear": ""
        },
        "emergencyContact": {
          "name": "",
          "relationship": "",
          "phone": ""
        }
      })

    const handleOnchange = (e,type,type2)=>{
        if(type2){
                setUserDetails({...userDetails,[type] : {...userDetails[type],[type2] : e.target.value}});
        }
        else if( type === 'skills' || type === 'certifications'){
            console.log(e,"HANDLE CHANGE")

            setUserDetails({...userDetails, [type] : e })
        }
        else{
            setUserDetails(prevState => ({...prevState, [type]: e.target.value}))

        }
    }

   console.log('USER DeTAILS ' , userDetails)

    const handleFormData = () =>{
        if(userDetails.email.length){
            props.addUser(userDetails);
            alert('User Entered')
            navigate("/")
        }else{
            alert('Please Enter all the mandortory fields')
        }
       
    }


    const validationCheck = (e) =>{

        console.log('ValiDATion TRgger')
        if(!e.target.value.length){
            alert(`${e.target.placeholder} is empty!`)
        }

       
    }
   


    switch(step){
        case 0 : return(
            <UserDetails nextStep={nextStep} handleOnchange={handleOnchange} validationCheck={validationCheck}/>
        )

        case 1 : return(
            <Educationaldetails  nextStep={nextStep} prevStep={prevStep} handleOnchange={handleOnchange} validationCheck={validationCheck} />
        )

        case 2 : return(
            <ProfessionalDetails  nextStep={nextStep} prevStep={prevStep} handleOnchange={handleOnchange} validationCheck={validationCheck}/>
        )

        case 3 : return (
            <AdditionalDetails  prevStep={prevStep} handleFormData={handleFormData} handleOnchange={handleOnchange} validationCheck={validationCheck}/>
        )

     
    }
    

    return (
        <>


        


        </>
    )
}

const mapStateToProps = (state) => {
    return {
      users: state.users
    }
  }

const mapStateToDispatch = (dispatch) =>{
    return {
        addUser: (data)=>dispatch(addUser(data))
    }
}


export default connect(mapStateToProps,mapStateToDispatch)(AddNewEmployee);