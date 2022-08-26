import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import LoginController from "./loginController";
import { request } from "./interlude";
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function SigninContent(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [isLoggedIn, setisLoggedIn] = React.useState("");
    const [data,setdata]=useState([]);
    // const data =[]
    const navigate = useNavigate()
    const url = 'http://localhost:3001/login';
    // const url = 'https://jsonplaceholder.typicode.com/users';
    const method = "POST"

    function Click(){
        var data = JSON.stringify({
          "table": "tbl_cashcollect_users",
          "username": username,
          "password": password
        });

        var config = {
          method: 'post',
          url: 'http://164.92.155.135:7101/login',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };

        axios(config)
        .then(function (response) {
            if(response.data.status===true){
                sessionStorage.setItem('token', response.data.token);
                navigate("/")
            }
            setisLoggedIn("Wrong username or password!")
        //   console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        }
            // sessionStorage.setItem('limit_amount', data.limit_amount);
            // sessionStorage.setItem('token', data.token);
            
        
    


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
                                    <form action="" onSubmit={(e)=>{e.preventDefault();Click()}}>
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
                                            <button className="btn btn-primary btn-block" type="submit" style={{background:"#017cc2"}}  >Sign me In</button>
                                        </div>
                                        
                                            <span>{isLoggedIn}</span>
                                        
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