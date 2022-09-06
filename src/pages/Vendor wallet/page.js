import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import options from './apiPreps';
import { showToast } from '../../utility/tool';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import React from 'react';

export default function Content(){
    const [Wchecked, setWChecked] = useState(false);
    const [isloaded, setIsloaded] = useState(null);
    const navigate = useNavigate()
    const name = sessionStorage.getItem('name');
    const meter = sessionStorage.getItem('category');
    const meter_no = sessionStorage.getItem('meter_no');
    const number = sessionStorage.getItem('account');
    const amount = sessionStorage.getItem('amount');

    function send(amount,bill,acc_no,name,meter_no){
        // if(acc===null){
        //     alert('Customer has no assigned meter and payment cannot be made')
        //     console.log(acc)
        //     navigate('/payment')
        // }
        // console.log(acc)
        
        setIsloaded(true)
        let body = options(meter_no,bill,amount,name)
        if(bill == "postpaid"){
            body = options(acc_no,bill,amount,name)
        }
        
        showToast({
            message: 'Loading!',
            type: 'success'
        });
        const url = "https://quikpayapi.smartpowerbilling.com/payment";
        const other = {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            }
        }
    
        fetch(url,other)
        .then((response) => response.json())
        .then((data) => {
                            setIsloaded(false)
                            alert(data.message)
                            console.log(data)
                            sessionStorage.setItem('limit_amount', data.data.vendorBal);
                            sessionStorage.setItem('token_id', data.data.token);
                            sessionStorage.setItem('unit', data.data.unit);
                            // sessionStorage.setItem('amount', data.amount);
                            sessionStorage.setItem('vendor', data.data.vendorName);
                            sessionStorage.setItem('arrears', data.data.arrears);
                            if(data.status===true){
                            showToast({
                                message: 'Transaction Successful!',
                                type: 'success'
                            });
                            setTimeout(() => {
                                navigate('/checkout')
                            }, 1500);
                        }else{
                            showToast({
                                message: 'Transaction Failed!',
                                type: 'error'
                            });
                            setTimeout(() => {
                                navigate('/details')
                            }, 1500);
                        }
                            
                        })
        .catch((error) => {
            console.log(error)
            showToast({
                message: 'Transaction Failed!',
                type: 'error'
            });
            setTimeout(() => {
                navigate('/details')
            }, 1500);
        });
    
    }
    
    

    return(
        <div className='contain'>
            <div className="order001">
                <div className="row row-same-height" style={{background:"white"}}>
                    <div className="col-md b-r b-dashed " >
                        <div className="padding-30 sm-padding-5 sm-m-t-15" >
                            <h2>We Secured Your Line</h2>
                            <p>You are about to make the following payment to APLE, as payment for Energy usage</p>
                            <p className="small hint-text">Kindly confirm the details below</p>
                            <table className="table table-condensed">
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Metering Type</span>
                                    </td>
                                    <td className=" col-md-3 text-right" style={{width: "200px"}}>
                                        <span className="bold">{meter}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Customer Name</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span> {name}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Account Number</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{number}</span>
                                        <input id="accNumber" type="hidden" value={number}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps"></span>
                                    </td>
                                    <td colspan="2" className=" col-md-3 text-right">
                                        <h4 className="text-primary no-margin font-montserrat">&#8358;
                                            {amount}</h4>
                                    </td>
                                </tr>
                            </table>
                            {/* <p className="small">By clicking Pay Now You will Agree to the Payment <a target="_blank" href="#">Terms &amp; Conditions</a></p> */}
                            <ul class="pager wizard no-style">
                                    <li class="next finish">
                                        <Button id="payBtn" class="btn  btn-cons btn-animated from-left fa fa-check pull-right" style={{background:"#017cc2",color:"white",border:"#017cc2"}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{send(amount,meter,number,name,meter_no)}}>
                                            <span>Pay</span>
                                        </Button>
                                        {isloaded?
                                        <Backdrop
                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                        open
                                        
                                    >
                                        <CircularProgress color="inherit" />
                                    </Backdrop>
                                        :
                                        ""
                                        }
                                        
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}