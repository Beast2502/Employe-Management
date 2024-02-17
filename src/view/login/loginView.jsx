import React from "react";
import './loginView.css'

import BrandIcon from '../../assets/logo.png';


const LoginView = ({ setEmail, setPassword, loginHandler }) => {

    return (
        <div className="container login-container ">

            <form className="login-form" onSubmit={loginHandler}>
            {/* <img src={BrandIcon} className="" style={{ width: '150px' , marginBottom:'25px'}} /> */}

                <div className="mb-2 w-100">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-2 w-100">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="login-btn">Login</button>

            </form>
        </div>
    )

}

export default LoginView;