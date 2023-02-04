import { useNavigate } from 'react-router-dom';
import ConfirmationView from './confirmationView';
// import { Link } from 'react-router-dom';

import React from 'react';

export default function Content(){
    const navigate = useNavigate()
    
    function send(meter_no,meter,bill,payment){
        if(meter_no == "null" && meter==="prepaid" ){
            alert('Invalid request, customer has no prepaid meter')
            navigate('/')
        }
        else if(meter === "postpaid" ){
            if(bill =="bill" || bill =="reconnection cost" || bill =="reconnection fee" || bill =="revenue loss" || bill =="administrative"){
                if(payment=="Cash" || payment=="Direct payment"){
                    sessionStorage.setItem('category', meter);
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
        else if(meter === "prepaid" && meter_no != "null"){
            if(bill =="bill" || bill =="reconnection cost" || bill =="reconnection fee" || bill =="lor(revenue loss)" || bill =="administrative charge"){
                sessionStorage.setItem('category', meter);
                sessionStorage.setItem('bill_type', bill);
                sessionStorage.setItem('payment_type', payment);
                navigate('/details')
            }
            // else if(bill!="bill"){
            //     alert('Prepaid only has option to pay bill')
            // }
            else{
                alert('Select payment')
            }
            
        }               
        else{
            alert('Please select your prefered metering type for payment')
        }
    }
    
    

    return(
        < ConfirmationView  Send = {(meter_no,meter,bill,payment)=>send(meter_no,meter,bill,payment)}/>
    )
}