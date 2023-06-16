import React from 'react';
import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/style.css';
import '../../../assets/css/pages.css';
import logo from "../../../assets/img/logo_black.png"
import bank from "../../../assets/img/card.svg"
import Wallet from "../../../assets/img/wallet.svg"
import vendor from "../../../assets/img/ussd.svg"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';
import options from '../../Vendor wallet/apiPreps';
import { useNavigate } from 'react-router-dom';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
// import payStack from '../../Paystack/paystack';
// import { usePaystackPayment } from 'react-paystack';
import { showToast } from '../../../utility/tool';
import Header from '../../../Components/Header';
import Heading from '../../../header/top';

export default function AccountContent() {
    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [isprepaid, setIsprepaid] = useState(true);
    const [isloggedIn, setisloggedIn] = useState(false);
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const token = sessionStorage.getItem('token');
    const acc_no = sessionStorage.getItem('account');
    const name = sessionStorage.getItem('name');
    const billedamount = sessionStorage.getItem('billed');
    const vat = sessionStorage.getItem('vat');
    const credit = sessionStorage.getItem('credit');
    const metering_type = sessionStorage.getItem('category');
    const Total = sessionStorage.getItem('Total');
    const address = sessionStorage.getItem('address');
    const phone_no = sessionStorage.getItem('phone_no');
    const meter_no = sessionStorage.getItem('meter_no');
    const minimumVend = sessionStorage.getItem('minimumVend');
    const totalDebt = sessionStorage.getItem('totalDebt');

    sessionStorage.setItem('amount', amount);
    sessionStorage.setItem('email', email);
    // sessionStorage.setItem('paystack',amount*100);



    const wallet = async (acc, metering_type, amount) => {
        const url = "http://164.92.155.135:8001/pay/from-wallet"
        const other = {
            method: 'POST',
            body: JSON.stringify({
                "caller": "acc_no",
                "requester": acc,
                "amount": amount,
                "type": metering_type
            }),
            headers: {
                "Content-Type": "text/plain",
                "Authorization": "Bearer " + token
            }
        }
        try {
            const response = await fetch(url, other)
            const data = await response.json()
            alert(data.message)
            console.log(data)
        } catch (error) {
            console.log(error)
        }

    }

    React.useEffect(() => {
        if (metering_type == 'postpaid') {
            setIsprepaid(false);
        }
    }, []);

    React.useEffect(() => {
        if (token) {
            setisloggedIn(true);
        }
    }, []);

    return (
        <>
            <div class="">
                <div id="rootwizard" class="container">
                    <Header title={"account details"} mt="32px" />

                    <div class="row mb-4">
                        <div class="d-flex col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="singleCardX mt-4">
                                <Header title="Customer info" size='1.2em' />

                                <table class="table table-condensed">
                                    <tbody><tr>
                                        <td class=" col-md-9">
                                            <span class="m-l-10 font-montserrat fs-11 all-caps">Name</span>
                                        </td>
                                        <td class=" col-md-3 text-right">
                                            <span>{name}</span>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td class=" col-md-9">
                                                <span class="m-l-10 font-montserrat fs-11 all-caps">Address</span>
                                            </td>
                                            <td class=" col-md-3 text-right">
                                                <span>{address}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class=" col-md-9">
                                                <span class="m-l-10 font-montserrat fs-11 all-caps">Phone Number</span>
                                            </td>
                                            <td class=" col-md-3 text-right">
                                                <span>{phone_no}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="d-flex col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="singleCardX mt-4">

                                <Header title="Current bill" size='1.2em' />
                                <table class="table table-condensed">
                                    {isprepaid ? (
                                        <tbody>
                                            <tr>
                                                <td class=" col-md-9">
                                                    <span class="m-l-10 font-montserrat fs-11 all-caps">Minimum Vend</span>
                                                </td>
                                                <td class=" col-md-3 text-right">
                                                    <span>₦ {minimumVend}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class=" col-md-9">
                                                    <span class="m-l-10 font-montserrat fs-11 all-caps">VAT</span>
                                                </td>
                                                <td class=" col-md-3 text-right">
                                                    <span>₦ {vat}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class=" col-md-9">
                                                    <span class="m-l-10 font-montserrat fs-11 all-caps">Total Balance</span>
                                                </td>
                                                <td class=" col-md-3 text-right">
                                                    <span>₦ {totalDebt}</span>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                    <td colspan="2" class=" col-md-3 text-right">
                                                        <h4 class="text-primary no-margin font-montserrat">
                                                            ₦{Total}</h4>
                                                    </td>
                                                </tr> */}
                                        </tbody>
                                    ) : (
                                        <tbody>
                                            <tr>
                                                <td class=" col-md-9">
                                                    <span class="m-l-10 font-montserrat fs-11 all-caps">Billed amount</span>
                                                </td>
                                                <td class=" col-md-3 text-right">
                                                    <span>₦ {billedamount}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class=" col-md-9">
                                                    <span class="m-l-10 font-montserrat fs-11 all-caps">VAT</span>
                                                </td>
                                                <td class=" col-md-3 text-right">
                                                    <span>₦ {vat}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class=" col-md-9">
                                                    <span class="m-l-10 font-montserrat fs-11 all-caps">Arrears</span>
                                                </td>
                                                <td class=" col-md-3 text-right">
                                                    <span>₦ {credit}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class=" col-md-3 text-right">
                                                    <h4 class="text-primary no-margin font-montserrat">
                                                        ₦{Total}</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    )}
                                </table>
                            </div>
                        </div>


                        <div class="d-flex col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="singleCardX mt-4">

                                <Header title="account info" size='1.2em' />
                                <table class="table table-condensed">
                                    <tbody><tr>
                                        <td class=" col-md-9">
                                            <span class="m-l-10 font-montserrat fs-11 all-caps">Account Number</span>
                                        </td>
                                        <td class=" col-md-3 text-right">
                                            <span>{acc_no}</span>
                                        </td>
                                    </tr>
                                        <tr>
                                            <td class=" col-md-9">
                                                <span class="m-l-10 font-montserrat fs-11 all-caps">Meter Number</span>
                                            </td>
                                            <td class=" col-md-3 text-right">
                                                <span>{meter_no}</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class=" col-md-9">
                                                <span class="m-l-10 font-montserrat fs-11 all-caps">Account type</span>
                                            </td>
                                            <td class=" col-md-3 text-right">
                                                <span>{metering_type}</span>
                                            </td>
                                        </tr>
                                    </tbody></table>
                            </div>
                        </div>

                        <div class=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="singleCardX mt-4">
                                <Header title="Payment" size='1.2em' />
                                <form id="paydetail" role="form" autocomplete="off" class="ng-pristine ng-valid-email ng-invalid ng-invalid-required" novalidate="novalidate">

                                    <div class="form-group-attached">
                                        <div class="row clearfix">
                                            <div class="col-md-12">
                                                <div class="form-group form-group-default ">
                                                    <div class="">
                                                        <label style={{ color: '#017CC2' }}>Amount(NGN)</label>
                                                        <input id="amount" type="text" class="loginInput" placeholder='0.0' required="" value={amount} aria-required="true" onChange={e => setAmount(e.target.value)}></input>
                                                    </div>
                                                    {/* <div class="input-group-addon">
                                                        NGN
                                                    </div> */}
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                
                                    <div class="form-group-attached">
                                        <div class="form-group form-group-default ">
                                            <label for="email" style={{ color: '#017CC2' }}>Email Address</label>
                                            <input id="email" name="email" value={email} type="email" class=" loginInput" placeholder="email address" onChange={e => setEmail(e.target.value)}></input>
                                        </div>
                                    </div>
                                    <div class="form-group-attached">
                                        <div class="form-group form-group-default ">
                                            <label for="phone" style={{ color: '#017CC2' }}>Phone No</label>
                                            <input id="phone" name="phone" value={phone} type="text" class=" loginInput " placeholder="Phone no" onChange={e => setPhone(e.target.value)}></input>
                                        </div>
                                    </div>
                                </form>

                                <button id="payBtn" class="loginBtnP" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <span>Pay Now</span>

                                </button>

                            </div>
                        </div>

                    </div>

                </div>
                <Heading/>
            </div>
            {/* modal */}
            <div class="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="container">
                                <div class="row">
                                    <Header title="Checkout" size='1.7em'/>

                                </div>
                            </div>
                            <hr />
                            <div class="container">
                                <div class="row">
                                    <Header title="Select payment method" size='1.3em'/>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <div class="modal-body">
                            <div class="container ">
                                <button class="row mb-4 border p-3 shadow-lg bg-light w-100" onClick={() => {
                                    window.location.href = "/paystack"
                                }}>
                                    <div class="col-4">
                                        <img src={bank} alt="" srcset=""></img>
                                    </div>
                                    <div class="col-8">
                                        <h6>Pay with Paystack</h6>
                                    </div>

                                </button>


                                <button class="row mb-4 border p-3 shadow-lg bg-light w-100" onClick={() => wallet(acc_no, metering_type, amount)}>
                                    <div class="col-4">
                                        <img src={Wallet} alt="" srcset=""></img>
                                    </div>
                                    <div class="col-8"><h6>Pay with wallet</h6></div>
                                </button>

                                {
                                    isloggedIn ? (
                                        <button class="row mb-4 border p-3 shadow-lg bg-light w-100" onClick={() => { window.location.href = "/vendor" }} >
                                            <div class="col-4">
                                                <img src={vendor} alt="" srcset=""></img>
                                            </div>
                                            <div class="col-8"><h6>Pay with vendor balance</h6></div>
                                        </button>
                                    ) : ("")
                                }

                            </div>
                        </div>
                        <div class="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}