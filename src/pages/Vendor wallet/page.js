import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import options from './apiPreps';
// import { Link } from 'react-router-dom';

import React from 'react';

export default function Content(){
    const [Wchecked, setWChecked] = useState(false);
    const [Bchecked, setBChecked] = useState(false);
    const navigate = useNavigate()
    const name = sessionStorage.getItem('name');
    const meter = sessionStorage.getItem('category');
    const meter_no = sessionStorage.getItem('meter_no');
    const number = sessionStorage.getItem('account');
    const amount = sessionStorage.getItem('amount');


    function send(amount,bill,acc,name){
        if(acc===null){
            alert('Customer has no assigned meter and payment cannot be made')
            console.log(acc)
            navigate('/payment')
        }
        console.log(acc)
        const url = "https://quikpayapi.smartpowerbilling.com/payment";
        const other = {
            method: 'POST',
            body: JSON.stringify(options(acc,bill,amount,name)),
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
    
    }
    
    

    return(
        <div className='page-content-wrapper'>
            <div className="tab-pane slide-left p-l-20 p-r-20   sm-no-padding" id="tab2">
                <div className="row row-same-height" style={{background:"white"}}>
                    <div className="col-md-5 b-r b-dashed " >
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
                            <p className="small">By clicking Pay Now You will Agree to the Payment <a target="_blank" href="#">Terms &amp; Conditions</a></p>
                            <ul class="pager wizard no-style">
                                    <li class="next finish">
                                        <button id="payBtn" class="btn  btn-cons btn-animated from-left fa fa-check pull-right" style={{background:"#017cc2",color:"white",border:"#017cc2"}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{send(amount,meter,meter_no,name)}}>
                                            <span>Pay</span>
                                        </button>
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}