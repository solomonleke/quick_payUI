import { useNavigate } from 'react-router-dom';
import ConfirmationView from './confirmationView';
// import { Link } from 'react-router-dom';

import React from 'react';

export default function Content(){
    const navigate = useNavigate()
    
    function send(meter_no,state,bill){
        if(meter_no == "null" && state==="prepaid" ){
            alert('Invalid request, customer has no prepaid meter')
            navigate('/')
        }
        else if(state === "postpaid"){
            if(bill =="bill" || bill =="reconnection cost" || bill =="lor" || bill =="revenue loss" || bill =="administrative"){
                sessionStorage.setItem('category', state);
                sessionStorage.setItem('bill_type', bill);
                navigate('/details')
            }else{
                alert('Select payment')
            }
            
        }
        else if(state === "prepaid" && meter_no != "null"){
            sessionStorage.setItem('category', state);
            navigate('/details')
            
        }               
        else{
            alert('Please select your prefered metering type for payment')
        }
    }
    
    

    return(
        < ConfirmationView  Send = {(meter_no,state,bill)=>send(meter_no,state,bill)}/>
    )
}