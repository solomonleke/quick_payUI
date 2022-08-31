import { usePaystackPayment } from 'react-paystack';
import { useState } from 'react';



export default function PayStack(){
    const amount = sessionStorage.getItem('amount');
    const email = sessionStorage.getItem('email');

    const [state,setState] = useState(false);
    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount,
        publicKey: 'pk_test_2181b977ad77556cfce56d12392bdeb9f6c610f0',
    };
    
    // you can call this function anything
    const onSuccess = async(reference) => {
        const url = "https://quikpayapi.smartpowerbilling.com/verify/transaction/${reference}"
        const other = {
            method: 'GET',
            headers: {
                "Content-Type": "text/plain",

            }
        }
        const response = await fetch(url,other)
        const data = await response.json()
        console.log(data)
      console.log(reference);
    };

    const sendSuccess = (reference) =>{
        onSuccess(reference)
    }
    
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
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