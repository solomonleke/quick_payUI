import options from '../Vendor wallet/apiPreps';
import { usePaystackPayment } from 'react-paystack';
import { showToast } from '../../utility/tool';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import calculateFee from 'paystack-fee-calculator';
import { useState } from 'react';
import PaystackView from './paystackView';

export default function PaystackController(){
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(false);
    const email = sessionStorage.getItem('email');
    const phone_no = sessionStorage.getItem('phone_no');
    const amount = sessionStorage.getItem('amount');
    const name=sessionStorage.getItem('name');
    const metering_type=sessionStorage.getItem('category');
    const acc_no=sessionStorage.getItem('account');
    const meter_no = sessionStorage.getItem('meter_no');
    const [state,setState] = useState(false);
    // console.log('First loaded',isLoading)

    const fees = (amount)=>{
        return parseFloat(calculateFee(parseInt(amount)).toFixed(2))
    }
    const totalAmount = parseFloat(amount) + fees(amount);

    const values = {email:email,phone_no:phone_no,amount:amount,name:name,metering_type:metering_type,acc_no:acc_no,meter_no:meter_no,fees:fees(amount),totalAmount:totalAmount}

    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: totalAmount*100,
        publicKey:'pk_live_2340dda9c382ed0455f857c27c4ebec6d42fb121'
        // publicKey: 'pk_test_2181b977ad77556cfce56d12392bdeb9f6c610f0',
    };


    // you can call this function anything
    const onSuccess = async(reference) => {
        // console.log(reference);
        let body = options(meter_no,metering_type,amount,name)
        if(metering_type == "postpaid"){
            body = options(acc_no,metering_type,amount,name)
        }
        const url = `${process.env.REACT_APP_QUIKPAY_BASEHOST}/verify/transaction/`+reference.reference
        // const url = "http://localhost:3001/verify/transaction/"+reference.reference
        // console.log(body)
        const other = {
            method: 'POST',
            body:JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",

            }
        }
        try {
            const response = await fetch(url,other)
            const data = await response.json()
            // console.log(data)
            // console.log(data.status)
            if(data.status===true){
            alert(data.message)
            setIsLoading(false)
            setState(true)
            // console.log(data.pay)
            sessionStorage.setItem('limit_amount', data.pay.vendorBal);
            sessionStorage.setItem('trans_ref', data.trans_ref);
            sessionStorage.setItem('token_id', data.pay.token);
            sessionStorage.setItem('unit', data.pay.unit);
            sessionStorage.setItem('vendor', data.pay.vendorName);
            sessionStorage.setItem('arrears', data.pay.arrears);
            sessionStorage.setItem('vat', data.pay.vat);
            showToast({
                message: data.message,
                type: 'success'
            });
            setTimeout(() => {
                navigate("/checkout")
              }, 1500);
            }else{
                setIsLoading(false)
                navigate("/details")
                showToast({
                    message: data.message,
                    type: 'error'
                });
            }
            } catch (error) {
                console.log(error)
                showToast({
                    message: 'Transaction Failed!',
                    type: 'error'
                });
                setTimeout(() => {
                    navigate("/details")
                  }, 1500);
            }
        
    };

    const sendSuccess = (reference) =>{
        onSuccess(reference)
    }
    
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      setIsLoading(false)
      if(state==true){
        navigate("/checkout")
      }
    }
    
    const initializePayment = usePaystackPayment(config);

    return(
        <PaystackView Values={values} Paystack = {()=>{setIsLoading(!isLoading);initializePayment(sendSuccess, onClose)}} loaded={isLoading}/>
    )

}