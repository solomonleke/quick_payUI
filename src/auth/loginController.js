import { useNavigate } from "react-router-dom";
import React from "react";

export default function LoginController(username,password){
        
        const options = {
            method: 'POST',
            body: JSON.stringify({
                "table":"tbl_cashcollect_users",
                "username":username,
                "password":password
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }
        // console.log(username,password)
       return options

}
