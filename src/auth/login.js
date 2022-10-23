import { useNavigate } from "react-router-dom";
import React from "react";
import axios from 'axios';
import { showToast } from "../utility/tool";
import View from "./view";

export default function SigninContent(){
    const [isLoggedIn, setisLoggedIn] = React.useState("");
    const navigate = useNavigate()

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
          url: `${process.env.REACT_APP_QUIKPAY_BASEHOST}/login`,
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
                sessionStorage.setItem('limit_amount', response.data.limit);
                sessionStorage.setItem('vendor', response.data.user);
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
        
    return (
        <View Click={({username, password}) => Click({username, password})} isLoggedIn={isLoggedIn} />
    );
}