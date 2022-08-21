import { useNavigate } from "react-router-dom";
import React from "react";

export default async function LoginController(username,password){
        const url = 'https://aplecash.smartpowerbilling.com/signin';
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
        try{
            const response = await fetch(url,options)
            const data = await response.json()
            console.log(data)
            return data
        }catch(error){
            console.log(error)
        }

}
