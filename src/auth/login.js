import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import LoginController from "./loginController";
import { Link } from 'react-router-dom';

export default function SigninContent(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    // const [data, setData] = React.useState([]);
    // const data =[]
    const navigate = useNavigate()
    // const click = (e) => {
    //     e.preventDefault();
    //     data.push(LoginController(username,password))
    //     console.log(data)
    // };
    // console.log(data)
    return(
        <div className="authincation h-100">
        <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-6">
                    <div className="authincation-content">
                        <div className="row no-gutters">
                            <div className="col-xl-12">
                                <div className="auth-form">
                                    <h4 className="text-center mb-4">Sign in to your account</h4>
                                    <form action="">
                                        <div className="form-group">
                                            <label className="mb-1"><strong>Username</strong></label>
                                            <input type="Username" className="form-control"  onChange={e=>setUsername(e.target.value)}></input>
                                        </div>
                                        <div className="form-group">
                                            <label className="mb-1"><strong>Password</strong></label>
                                            <input type="Password" className="form-control"  onChange={e=>setPassword(e.target.value)}></input>
                                        </div>
                                        <div className="form-row d-flex justify-content-between mt-4 mb-2">
                                            
                                            <div className="form-group">
                                                <a href="">Forgot Password?</a>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <Link to={"/"+username+"/"+password}  className="btn btn-primary btn-block" >Sign Me In</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}