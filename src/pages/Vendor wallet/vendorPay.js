import options from "./apiPreps";
import { showToast } from '../../utility/tool';

export default async function pay(amount,bill,acc_no,name,meter_no,payment){
    let body = options(meter_no,bill,amount,name,payment)
    if(bill == "postpaid"){
        body = options(acc_no,bill,amount,name,payment)
    }
    
    const url = "https://quikpayapi.smartpowerbilling.com/payment";
    const other = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        const response = await fetch(url,other)
        const data = await response.json()
        console.log(data.status)
        if(data.status===true){
        alert(data.message)
        console.log(data)
        sessionStorage.setItem('limit_amount', data.data.vendorBal);
        sessionStorage.setItem('token_id', data.data.token);
        sessionStorage.setItem('unit', data.data.unit);
        sessionStorage.setItem('vendor', data.data.vendorName);
        sessionStorage.setItem('arrears', data.data.arrears);
        showToast({
            message: data.message,
            type: 'success'
        });
        return true
        }else{
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
    }
}