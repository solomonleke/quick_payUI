import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import React from 'react';
import { useState} from 'react';

export default function ConfirmationView({Send}){
    // const [state, setState] = useState("");
    const [bill, setBill] = useState("");
    const [isloggedIn,setisloggedIn] = useState(false);
    const [payment, setPayment] = useState("");
    const name = sessionStorage.getItem('name');
    const token=sessionStorage.getItem('token');
    const meter = sessionStorage.getItem('category');
    const meter_no = sessionStorage.getItem('meter_no');
    const number = sessionStorage.getItem('account');

    const [ispostpaid,setIspostpaid] = React.useState(true);

    React.useEffect(() => {
        if (meter == 'prepaid') {
            setIspostpaid(false);
        }
    }, [meter]);

    React.useEffect(() => {
        if (token) {
            setisloggedIn(true);
        }
    }, []);
    
    return(
        <div className='contain'>
            <div className="order001">
                <div className="row row-same-height" style={{background:"white"}}>
                    <div className="col-md b-r" >
                        <div className="padding-30 sm-padding-5 sm-m-t-15" >
                            <h2>Kindly confirm the details below</h2>
                            {/* <p>You are about to make the following payment to APLE, as payment for Energy usage</p>
                            <p className="small hint-text">Kindly confirm the details below</p> */}
                            <table className="table table-condensed">
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Current metering Type</span>
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
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Meter Number</span>
                                    </td>
                                    <td colspan="2" className=" col-md-3 text-right">
                                        <h4 className="text-primary no-margin font-montserrat">
                                            {meter_no}</h4>
                                    </td>
                                </tr>
                                
                            </table>
                            {/* <h4>Select your meter type for payment</h4>
                            <table className='table table-condensed mb-3'>
                            <tr>
                                <td className=" col-md-9">
                                    <span className="m-l-10 font-montserrat fs-11 all-caps">Meter Type</span>
                                </td>
                                <td colspan="2" className=" col-md-3 text-right">
                                    <select value={state} onChange={e=>setState(e.target.value)} className="w-100">
                                        <option>--------</option>
                                        <option value="postpaid">postpaid</option>
                                        <option value="prepaid">prepaid</option>
                                    </select>
                                </td>
                            </tr>
                            </table> */}
                            <h4>Select your payment type</h4>
                            <table className='table table-condensed mb-3'>
                            <tr>
                                <td className=" col-md-6">
                                    <span className="m-l-10 font-montserrat fs-11 all-caps">Bill Type</span>
                                </td>
                                {ispostpaid?(
                                <td colspan="2" className=" col-md-6 text-right">
                                        <select value={bill} onChange={e=>setBill(e.target.value)} className="w-100">
                                            <option>--------</option>
                                            <option value="bill">Pay your bill</option>
                                            <option value="reconnection cost">Pay for reconnection cost</option>
                                            <option value="reconnection fee">Pay for reconnection fee</option>
                                            <option value="lor(revenue loss)">Pay for lor(revenue loss)</option>
                                            <option value="administrative charge">Pay for administrative charge</option>
                                        </select>
                                </td>
                                    ):(
                                        <td colspan="2" className=" col-md-6 text-right">
                                            <select value={bill} onChange={e=>setBill(e.target.value)} className="w-100">
                                                <option>--------</option>
                                                <option value="bill">Buy Energy</option>
                                                <option value="reconnection cost">Pay for reconnection cost</option>
                                                <option value="reconnection fee">Pay for reconnection fee</option>
                                                <option value="lor(revenue loss)">Pay for lor(revenue loss)</option>
                                                <option value="administrative charge">Pay for administrative charge</option>
                                            </select>
                                        </td>
                                    )}
                                    
                               
                                
                                
                            </tr>
                            </table>
                            <h4>Select your payment mode</h4>
                            <table className='table table-condensed mb-3'>
                            <tr>
                                <td className=" col-md-6">
                                    <span className="m-l-10 font-montserrat fs-11 all-caps">Payment mode</span>
                                </td>
                                <td colspan="2" className=" col-md-6 text-right">
                                    <select value={payment} onChange={e=>setPayment(e.target.value)} className="w-100">
                                        <option>--------</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Direct payment">Direct payment</option>
                                    </select>
                                </td>
                            </tr>
                            </table>
                            {/* <p className="small">By clicking Pay Now You will Agree to the Payment <a target="_blank" href="#">Terms &amp; Conditions</a></p> */}
                            <ul class="pager wizard no-style">
                                    <li class="next finish">
                                        <button id="payBtn" class="btn  btn-cons from-left fa fa-check pull-center" style={{background:"#017cc2",color:"white",border:"#017cc2"}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{Send(meter_no,meter,bill,payment)}}>
                                            <span>Confirm</span>
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