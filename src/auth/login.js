import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import LoginController from "./loginController";
import { request } from "./interlude";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { showToast } from "../utility/tool";
import View from "./view";

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

    function Click({
        username, password
    }){
        var data = JSON.stringify({
          "table": "tbl_cashcollect_users",
          "username": username,
          "password": password
        });

        if (!username || !password) {
            showToast({
                message: 'Username and Password required.',
                type: 'error'
            });
            
            return;
        }

        var config = {
          method: 'post',
          url: 'https://quikpayapi.smartpowerbilling.com/login',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        showToast({
            message: 'Logining in',
            type: 'success'
        });

        axios(config)
        .then(function (response) {
            if(response.data.status===true){
                sessionStorage.setItem('token', response.data.token);
                showToast({
                    message: 'Login successful',
                    type: 'success'
                });
                setTimeout(() => {
                    navigate("/");
                }, 1500);
            }
            else {
                setisLoggedIn("Wrong username or password!")
            }
            
        //   console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            showToast({
                message: error.response.data.message,
                type: 'error'
            });
            alert(error.response.data.message)
          console.log(error);
        });
        }
            // sessionStorage.setItem('limit_amount', data.limit_amount);
            // sessionStorage.setItem('token', data.token);
            
        
    


    return (
        <View Click={({username, password}) => Click({username, password})} isLoggedIn={isLoggedIn} />
    );
}