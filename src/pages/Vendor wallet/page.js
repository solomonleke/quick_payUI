import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import VendorView from './vendorView';
import pay from './vendorPay';

export default function Content(){
    const [isloaded, setIsloaded] = useState(null);
    const navigate = useNavigate()
    

    async function send(amount,bill,acc_no,name,meter_no){
        setIsloaded(true)
        const res = await pay(amount,bill,acc_no,name,meter_no)
        console.log(res)
        if(res===true){
            setIsloaded(false)
            setTimeout(() => {
              navigate("/checkout")
            }, 1500);
        }else{
            setIsloaded(false)
            setTimeout(() => {
                navigate("/details")
              }, 1500);
           
        }  
    
    }
    
    
    return(
        <VendorView loaded={isloaded} Send={(amount,bill,acc_no,name,meter_no)=>send(amount,bill,acc_no,name,meter_no)}/>
    )
    
}