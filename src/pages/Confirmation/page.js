import { useNavigate } from 'react-router-dom';
import ConfirmationView from './confirmationView';
// import { Link } from 'react-router-dom';

import React from 'react';

export default function Content(){
    const navigate = useNavigate()
    
    function send(meter_no,state,bill,payment){
        if(meter_no == "null" && state==="prepaid" ){
            alert('Invalid request, customer has no prepaid meter')
            navigate('/')
        }
        else if(state === "postpaid" ){
            if(bill =="bill" || bill =="reconnection cost" || bill =="lor" || bill =="revenue loss" || bill =="administrative"){
                if(payment=="Cash" || payment=="Direct payment"){
                    sessionStorage.setItem('category', state);
                    sessionStorage.setItem('bill_type', bill);
                    sessionStorage.setItem('payment_type', payment);
                    navigate('/details')
                }else{
                    alert('Select payment type')
                }
                
            }else{
                alert('Select bill type')
            }
            
        }
        else if(state === "prepaid" && meter_no != "null"){
            if(bill =="bill" || bill =="reconnection cost" || bill =="lor" || bill =="revenue loss" || bill =="administrative"){
                sessionStorage.setItem('category', state);
                sessionStorage.setItem('bill_type', bill);
                navigate('/details')
            }else{
                alert('Select payment')
            }
            
        }               
        else{
            alert('Please select your prefered metering type for payment')
        }
    }
    
    

    return(
        < ConfirmationView  Send = {(meter_no,state,bill,payment)=>send(meter_no,state,bill,payment)}/>
    )
}