import options from '../Vendor wallet/apiPreps';
import { useInterswitch } from './interswitchHelper';
import { showToast } from '../../utility/tool';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import calculateInterswitchFee from './interswitchfee.ts';
import { useState } from 'react';
import InterswitchView from './interswitchView';

export default function InterswitchController(){
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(false);
    const email = sessionStorage.getItem('email');
    const phone_no = sessionStorage.getItem('phone_no');
    const amount = sessionStorage.getItem('amount');
    const name=sessionStorage.getItem('name');
    const metering_type=sessionStorage.getItem('category');
    const acc_no=sessionStorage.getItem('account');
    const meter_no = sessionStorage.getItem('meter_no');
    const merchantCode = 'MX118854';
    const [state,setState] = useState(false);
    // console.log('First loaded',isLoading)

    const fees = (amount)=>{
        return parseFloat(calculateInterswitchFee(parseInt(amount)).toFixed(2))
    }
    sessionStorage.setItem('fees', fees(amount));
    const totalAmount = parseFloat(amount) + fees(amount);
    sessionStorage.setItem('TotalAmount', totalAmount);

    const values = {email:email,phone_no:phone_no,amount:amount,name:name,metering_type:metering_type,acc_no:acc_no,meter_no:meter_no,fees:fees(amount),totalAmount:totalAmount}


    // you can call this function anything
    const onSuccess = async(reference,checkAmount) => {
        // console.log(reference);
        let body = options(meter_no,metering_type,amount,name)
        if(metering_type == "postpaid"){
            body = options(acc_no,metering_type,amount,name)
        }
        const url = `${process.env.REACT_APP_QUIKPAY_BASEHOST}/verify/interswitchtransaction/${reference}/${checkAmount}`
        // const url = "http://localhost:3001/verify/transaction/"+reference.reference
        // console.log(body)
        body.merchantcode=merchantCode
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
            console.log(data.pay)
            sessionStorage.setItem('limit_amount', data.pay.vendorBal);
            sessionStorage.setItem('trans_ref', data.trans_ref);
            sessionStorage.setItem('token_id', data.token);
            sessionStorage.setItem('unit', data.unit);
            sessionStorage.setItem('vendor', data.vendorName);
            sessionStorage.setItem('arrears', data.arrears);
            sessionStorage.setItem('vat', data.vat);
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
    const config = {
        merchantCode: merchantCode,
        payItemID: 'Default_Payable_MX118854',
        customerEmail: email,
        redirectURL: 'http://188.166.99.136:3031/',
        mode: 'TEST',
        transactionReference: new Date().getTime().toString(),
        amount: String(totalAmount*100),
        callback: (response) => {
            console.log('response: ', response);
            onSuccess(response.txnref,response.amount);
        }
    }
    
    
    var initializePayment = useInterswitch(config);

    return(
        <InterswitchView Values={values} Paystack = {()=>{setIsLoading(!isLoading);initializePayment()}} loaded={isLoading}/>
    )

}