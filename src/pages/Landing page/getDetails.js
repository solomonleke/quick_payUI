import axios from 'axios';
import { showToast } from "../../utility/tool";

export default async function getCustomerDetails(number){
    let token=sessionStorage.getItem('token');
        if(!token){token=''}
        // console.log(token)
        let data = JSON.stringify({
            "token": token,
            "acc_no": number
          });

          var config = {
            method: 'post',
            url: `${process.env.REACT_APP_QUIKPAY_BASEHOST}/details`,
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
        try {
            const response = await axios(config)
            const result = response.data
            // console.log(result)
            if(result.status===true){
                sessionStorage.setItem('name', result.data.name);
                sessionStorage.setItem('category', result.data.category);
                sessionStorage.setItem('tariff_name', result.data.tariff_name);
                if(result.data.tariff===null){
                    sessionStorage.setItem('tariff',0);
                }else{
                    sessionStorage.setItem('tariff', result.data.tariff.toFixed(2));
                }
                if(result.data.vat===null){
                    sessionStorage.setItem('vat',0);
                }else{
                    sessionStorage.setItem('vat', result.data.vat.toFixed(2));
                }
                sessionStorage.setItem('phone_no', result.data.phone_no);
                sessionStorage.setItem('address', result.data.address);
                sessionStorage.setItem('meter_no', result.data.meter_no);
                sessionStorage.setItem('old_acc_no', result.data.old_acc_no);
                sessionStorage.setItem('transformer_id', result.data.transformer_id);
                sessionStorage.setItem('feeder_id', result.data.feeder_id);
                sessionStorage.setItem('account', result.data.account);
                sessionStorage.setItem('minimumVend', result.data.minimumVend);
                sessionStorage.setItem('totalDebt', result.data.totalDebt);
                if (result.data.billed === null){
                    sessionStorage.setItem('billed', 0);
                }else{
                    sessionStorage.setItem('billed', result.data.billed.toFixed(2));
                }
                if (result.data.credit === null){
                    sessionStorage.setItem('credit', 0);
                }else{
                    sessionStorage.setItem('credit', result.data.credit.toFixed(2));
                }
                sessionStorage.setItem('Total',(result.data.credit+result.data.billed).toFixed(2));
                // sessionStorage.setItem('Total',(result.data.billed).toFixed(2));

                showToast({
                    message: 'Success!',
                    type: 'success'
                });

                return true
            }
            
        } catch (error) {
            if(error.message=="Request failed with status code 400"){
                showToast({
                    message: error.response.data.message,
                    type: 'error'
                });
            }else{
                showToast({
                    message: error.message,
                    type: 'error'
                });
            }
            
            // console.log(error)
        }
        
}