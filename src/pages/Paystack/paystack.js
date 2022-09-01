import { usePaystackPayment } from 'react-paystack';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import options from '../Vendor wallet/apiPreps';

export default function PayStack(){
    const amount = sessionStorage.getItem('amount');
    const email = sessionStorage.getItem('email');

    const name = sessionStorage.getItem('name');
    const meter = sessionStorage.getItem('category');
    const meter_no = sessionStorage.getItem('meter_no');
    const number = sessionStorage.getItem('account');

    const [state,setState] = useState(false);

    const navigate = useNavigate()

    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount,
        publicKey: 'pk_test_2181b977ad77556cfce56d12392bdeb9f6c610f0',
    };
    
    // you can call this function anything
    const onSuccess = async(reference) => {
        console.log(reference);
        const url = "https://quikpayapi.smartpowerbilling.com/verify/transaction/"+reference.reference
        const other = {
            method: 'GET',
            headers: {
                "Content-Type": "text/plain",

            }
        }
        const response = await fetch(url,other)
        const data = await response.json()
        console.log(data)
        if(data.data.data.status=="success"){
            const url = "https://quikpayapi.smartpowerbilling.com/payment";
            const other = {
                method: 'POST',
                body: JSON.stringify(options(meter_no,meter,amount,name)),
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        
            fetch(url,other)
            .then((response) => response.json())
            .then((data) => {alert(data.message)
                                console.log(data)
                                sessionStorage.setItem('limit_amount', data.data.vendorBal);
                                sessionStorage.setItem('token_id', data.data.token);
                                sessionStorage.setItem('unit', data.data.unit);
                                // sessionStorage.setItem('amount', data.amount);
                                sessionStorage.setItem('vendor', data.data.vendorName);
                                sessionStorage.setItem('arrears', data.data.arrears);
                                navigate('/checkout')
                            })
            .catch((error) => console.log(error));
            setState(true)
        }
    };

    const sendSuccess = (reference) =>{
        onSuccess(reference)
    }
    
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
      if(state==true){
        navigate("/checkout")
      }
    }
    
    const initializePayment = usePaystackPayment(config);
    return (
        <div>
            <button onClick={() => {
                initializePayment(sendSuccess, onClose)
            }}>Paystack</button>
        </div>
    );

}