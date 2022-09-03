import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

import React from 'react';

export default function Content(){
    const [state, setState] = useState("");
    const navigate = useNavigate()
    const name = sessionStorage.getItem('name');
    const meter = sessionStorage.getItem('category');
    const meter_no = sessionStorage.getItem('meter_no');
    const number = sessionStorage.getItem('account');
     console.log(state)

    function send(meter_no,state){
        if(meter_no == "null" && state==="prepaid" ){
            alert('Invalid request, customer has no prepaid meter')
            navigate('/')
        }
        else if(state === "postpaid"){
            sessionStorage.setItem('category', state);
            navigate('/details')
            
        }        
        else{
            alert('Please select your prefered metering type for payment')
        }
    }
    
    

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
                            <h4>Select your meter type for payment</h4>
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
                            </table>
                            {/* <p className="small">By clicking Pay Now You will Agree to the Payment <a target="_blank" href="#">Terms &amp; Conditions</a></p> */}
                            <ul class="pager wizard no-style">
                                    <li class="next finish">
                                        <button id="payBtn" class="btn  btn-cons from-left fa fa-check pull-center" style={{background:"#017cc2",color:"white",border:"#017cc2"}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{send(meter_no,state)}}>
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