import '../header/css/bootstrap.min.css';
import '../header/css/pages.css';
import '../header/css/home.css';
import { useState} from 'react';
import send from './payment';
import { useParams } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export default function Content(){
    const [Wchecked, setWChecked] = useState(false);
    const [Bchecked, setBChecked] = useState(false);
    const {number,amount}=useParams(); 
    const navigate = useNavigate()
    const name = sessionStorage.getItem('name');
    const meter = sessionStorage.getItem('category');
    sessionStorage.setItem('amount', amount);

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
                            <p className="small">By clicking Pay Now You will Agree to the Payment <a
                                    target="_blank" href="#">Terms &amp; Conditions</a></p>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="padding-30 sm-padding-5">
                            <h4>Select payment option</h4>
                            <br/><br/>
                            <div className="card card-default">
                                <div className="card-header " role="tab">
                                    <div className="card-title">
                                        <div className="checkbox check-primary  checkbox-circle">
                                            <input type="checkbox" id="creditCard" checked={Wchecked} onChange={(e) => {
                                                if((Wchecked===false || Wchecked===true) && Bchecked===false){
                                                    setWChecked(e.target.checked)
                                                }else{setBChecked(false);setWChecked(e.target.checked)}
                                                }}></input>
                                            <label for="creditCard">Wallet</label>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled pull-right list-inline no-margin">
                                        
                                        <li>
                                            <img width="220" alt="" >
                                            </img>
                                        </li>
                
                                    </ul>
                                </div>
                            </div>

                            <div className="card card-default">
                                <div className="card-header " role="tab">

                                    <h4 className="card-title">
                                        <div className="checkbox check-primary  checkbox-circle">
                                            <input type="checkbox" id="bank" checked={Bchecked} onChange={(e) => {
                                                if((Bchecked===false || Bchecked===true) && Wchecked===false){
                                                    setBChecked(e.target.checked)
                                                }else{setWChecked(false);setBChecked(e.target.checked)}
                                                }}></input>
                                            <label for="bank">Bank Transfer</label>
                                        </div>
                                    </h4>
                                    <ul className="list-unstyled pull-right list-inline no-margin">
                                        <li>
                                            <img width="40" alt= "" height="32" src="/energypay/images/bank.png"></img>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="padding-20 sm-padding-5 sm-m-b-20 sm-m-t-20 bg-white clearfix">

                            <ul className="pager wizard no-style">
                                <li  className="next">
                                    <button className="btn btn-primary btn-cons btn-animated from-left fa fa-forward pull-right"
                                            type="submit" onClick={()=>{
                                                if(Bchecked===true){
                                                    console.log('Bank')
                                                    alert('Please use the wallet option as this option is currently not available.')
                                                }else if(Wchecked===true){
                                                    console.log('Wallet')
                                                    send(amount,meter,number,name)
                                                    navigate('/checkout')
                                                }
                                            }} >
                                        <span>Pay Now</span>
                                    </button>
                                </li>
                                
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}