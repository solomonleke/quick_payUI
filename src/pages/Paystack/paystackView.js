import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import React from 'react';
import Header from '../../Components/Header';


export default function PaystackView({Values, Paystack, loaded}){
    // console.log(loaded)
    return(
        <div className='contain'>
            <div className="container">
                <div className="singleCardX" >
                
               
                <Header title="We Secured Your Line" mt='12px'/>
                            <p className='mt-4'>You are about to make the following payment to {process.env.REACT_APP_QUIKPAY_DESC}, as payment for Energy usage</p>
                            <p className="small hint-text">Kindly confirm the details below</p>
                            <table className="table table-condensed">
                                <tr>
                                    <td className=" col-md-9 tableTitle ">
                                        <span className=" all-caps">Metering Type</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right" style={{width: "200px"}}>
                                        <span className="">{Values.metering_type}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Customer Name</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right">
                                        <span> {Values.name}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Email</span>
                                    </td>
                                    <td className=" col-md-3  TableSubText text-right">
                                        <span className=''> {Values.email}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Phone Number</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right">
                                        <span> {Values.phone_no}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Account Number</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right">
                                        <span>{Values.acc_no}</span>
                                        <input id="accNumber" type="hidden" value={Values.acc_no}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Meter Number</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right">
                                        <span>{Values.meter_no}</span>
                                        <input id="accNumber" type="hidden" value={Values.meter_no}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Amount</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right">
                                        <span>{Values.amount}</span>
                                        <input id="accNumber" type="hidden" value={Values.amount}></input>
                                    </td>
                                </tr>

                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Transaction Fee</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right">
                                        <span>{Values.fees}</span>
                                        <input id="accNumber" type="hidden" value={Values.fees}></input>
                                    </td>
                                </tr>
                                <br/>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Total</span>
                                    </td>
                                    <td  className=" col-md-3 TableSubText text-right">
                                        <span className="">&#8358;
                                            {Values.totalAmount}</span>
                                    </td>
                                </tr>
                            </table>

                            <button id="payBtn" class="loginBtnP mt-4"  type="button"  onClick={(e)=>{e.preventDefault();Paystack()}}>
                                            <span>Pay with Paystack</span>
                                        </button>
                                        <Backdrop
                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                        open={loaded}>
                                            <CircularProgress color="inherit" />
                                        </Backdrop>
  
                        
                </div>
            </div>
        </div>
    )

}