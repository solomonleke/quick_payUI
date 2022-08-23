import options from "../secondPage/content/apiPreps";


export default function send(amount,bill,acc,name){
    
    let token=sessionStorage.getItem('token');
    if(!token){token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RhZG1pbiIsImlhdCI6MTY0ODY0MDMzMH0.lalmlLLMNbCV99IGi6Nb7Lmoleu1WVEPsoiID2ZV3JI'}
    
    const url = "https://aplecash.smartpowerbilling.com/cashcollect/post/collection";
    const other = {
        method: 'POST',
        body: JSON.stringify(options(acc,bill,amount,name)),
        headers: {
            'Content-Type': 'application/json',
            Authorization:'Bearer'+' '+`${token}`
        }
    }

    fetch(url,other)
    .then((response) => response.json())
    .then((data) => {alert(data.message)
                        console.log(data)
                        sessionStorage.setItem('limit_amount', data.vendorBal);
                        sessionStorage.setItem('message', data.message);
                        sessionStorage.setItem('category', data.category);
                        // sessionStorage.setItem('account', data.account);
                        sessionStorage.setItem('token_id', data.token);
                        sessionStorage.setItem('unit', data.unit);
                        // sessionStorage.setItem('amount', data.amount);
                        sessionStorage.setItem('vendor', data.vendorName);
                        sessionStorage.setItem('arrears', data.arrears);
                    })
    .catch((error) => console.log(error));

}