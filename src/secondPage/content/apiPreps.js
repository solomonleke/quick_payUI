import generate from "./transac_ref";

export default function options(acc,bill,amount,name){
    const trans = generate(acc)
    const prep = { 
                    "amount":amount, 
                    "transaction_ref":trans, 
                    "payment_mode":"cash", 
                    "channel":"quikpay", 
                    "bill_type":bill, 
                    "account_number":acc 
                }

    return prep

}