import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import React from 'react';


export default function PaystackView({Values, Paystack, loaded}){
    // console.log(loaded)
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
                                        <span className="bold">{Values.metering_type}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Customer Name</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span> {Values.name}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Email</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span className='m-l-10 font-montserrat fs-11'> {Values.email}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Phone Number</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span> {Values.phone_no}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Account Number</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{Values.acc_no}</span>
                                        <input id="accNumber" type="hidden" value={Values.acc_no}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Meter Number</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{Values.meter_no}</span>
                                        <input id="accNumber" type="hidden" value={Values.meter_no}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Amount</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{Values.amount}</span>
                                        <input id="accNumber" type="hidden" value={Values.amount}></input>
                                    </td>
                                </tr>

                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Transaction Fee</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{Values.fees}</span>
                                        <input id="accNumber" type="hidden" value={Values.fees}></input>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps"></span>
                                    </td>
                                    <td colspan="2" className=" col-md-3 text-right">
                                        <h4 className="text-primary no-margin font-montserrat">&#8358;
                                            {Values.totalAmount}</h4>
                                    </td>
                                </tr>
                            </table>
                            {/* <p className="small">By clicking Pay Now You will Agree to the Payment <a target="_blank" href="#">Terms &amp; Conditions</a></p> */}
                            <ul class="pager wizard no-style">
                                    <li class="next finish">
                                        <button id="payBtn" class="btn  btn-cons btn-animated from-left fa fa-check pull-right" style={{background:"#017cc2",color:"white",border:"#017cc2"}} type="button"  onClick={(e)=>{e.preventDefault();Paystack()}}>
                                            <span>Pay with Paystack</span>
                                        </button>
                                        <Backdrop
                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                        open={loaded}>
                                            <CircularProgress color="inherit" />
                                        </Backdrop>
                                        
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}