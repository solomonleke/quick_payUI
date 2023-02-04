import options from "./apiPreps";
import { showToast } from '../../utility/tool';

export default async function pay(amount,bill,acc_no,name,meter_no,payment){
    const description = sessionStorage.getItem('bill_type');
    const token = sessionStorage.getItem('token');
    let body = options(meter_no,bill,amount,name,payment)
    if(bill == "postpaid"){
        body = options(acc_no,bill,amount,name,payment)
    }
    
    const url = `${process.env.REACT_APP_QUIKPAY_BASEHOST}/payment`;
    // const url = "http://localhost:3001/payment";
    const other = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    try {
        if(bill=="prepaid" && description!="bill"){
            const url2 = `https://aplecash.smartpowerbilling.com/arrears-vend`;
            const other2 = {
                method: 'POST',
                body: JSON.stringify({
                    "account": meter_no,
                    "type": description,
                    "amount":  parseFloat(amount)
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
        }
        const response = await fetch(url2,other2)
        const data = await response.json()
        console.log(data)
        if(data.status===true){
            sessionStorage.setItem('token_id', '0000 0000 0000 0000 0000');
            sessionStorage.setItem('trans_ref', data.data.transactionRef);
            sessionStorage.setItem('unit', 0.0);
            sessionStorage.setItem('vat', 0.0);
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
    }else{
        const response = await fetch(url,other)
        const data = await response.json()
        console.log(data.status)
        if(data.status===true){
        alert(data.message)
        console.log(data)
        sessionStorage.setItem('limit_amount', data.data.vendorBal);
        sessionStorage.setItem('token_id', data.data.token);
        sessionStorage.setItem('trans_ref', data.trans_ref);
        sessionStorage.setItem('unit', data.data.unit);
        sessionStorage.setItem('vendor', data.data.vendorName);
        sessionStorage.setItem('arrears', data.data.arrears);
        sessionStorage.setItem('vat', data.data.vat);
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
        }}
    } catch (error) {
        console.log(error)
        showToast({
            message: 'Transaction Failed!'+error,
            type: 'error'
        });
    }
}