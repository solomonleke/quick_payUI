import generate from "./transac_ref";

export default function options(acc,bill,amount,name,payment){
    const token = sessionStorage.getItem('token');
    const description = sessionStorage.getItem('bill_type');
    const trans = generate(acc)
    sessionStorage.setItem('trans_ref', trans);
    const prep = { 
                    "amount":amount, 
                    "transaction_ref":trans, 
                    "payment_mode":payment, 
                    "channel":"quikpay", 
                    "bill_type":bill, 
                    "account_number":acc ,
                    "token":token,
                    "bill_description":description
                }

    return prep

}