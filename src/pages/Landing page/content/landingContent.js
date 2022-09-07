import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LandingView from './landingView';
import { showToast } from "../../../utility/tool";

export default function LandingContent(){
    
    const [isloading,setIsloading]=useState(null);
    const navigate = useNavigate()
    function Click(number){
        setIsloading(true)
        let token=sessionStorage.getItem('token');
        if(!token){token=''}
        console.log(token)
        let data = JSON.stringify({
            "token": token,
            "acc_no": number
          });

          var config = {
            method: 'post',
            url: 'https://quikpayapi.smartpowerbilling.com/details',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };

          showToast({
            message: 'Loading!',
            type: 'success'
        });

          axios(config)
          .then(function (response) {
              if(response.data.status===true){
                setIsloading(false)
                let result = response.data.data
                sessionStorage.setItem('name', result.name);
                sessionStorage.setItem('category', result.category);
                sessionStorage.setItem('tariff_name', result.tariff_name);
                sessionStorage.setItem('tariff', result.tariff.toFixed(2));
                sessionStorage.setItem('vat', result.vat.toFixed(2));
                sessionStorage.setItem('phone_no', result.phone_no);
                sessionStorage.setItem('address', result.address);
                sessionStorage.setItem('meter_no', result.meter_no);
                sessionStorage.setItem('old_acc_no', result.old_acc_no);
                sessionStorage.setItem('transformer_id', result.transformer_id);
                sessionStorage.setItem('feeder_id', result.feeder_id);
                sessionStorage.setItem('account', result.account);
                sessionStorage.setItem('billed', result.billed.toFixed(2));
                sessionStorage.setItem('credit', result.credit.toFixed(2));
                sessionStorage.setItem('Total',(result.credit+result.billed).toFixed(2))
                showToast({
                    message: 'Success!',
                    type: 'success'
                });
                setTimeout(() => {
                    navigate("/confirm")
                }, 1500);
              }
            })
          .catch(function (error) {
            showToast({
                message: error.response.data.message,
                type: 'error'
            });
            console.log(error);
          });   
    }
    return(
        <LandingView Click={(number)=>Click(number)} loading={isloading}/>
    )
}