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
// import payStack from '../../Paystack/paystack';
// import { usePaystackPayment } from 'react-paystack';
import { showToast } from '../../../utility/tool';

export default function AccountContent(){
    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [isprepaid,setIsprepaid] = useState(true);
    const [isloggedIn,setisloggedIn] = useState(false);
    const [amount,setAmount]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const token=sessionStorage.getItem('token');
    const acc_no=sessionStorage.getItem('account');
    const name=sessionStorage.getItem('name');
    const billedamount=sessionStorage.getItem('billed');
    const vat=sessionStorage.getItem('vat');
    const credit=sessionStorage.getItem('credit');
    const metering_type=sessionStorage.getItem('category');
    const Total=sessionStorage.getItem('Total');
    const address = sessionStorage.getItem('address');
    const phone_no = sessionStorage.getItem('phone_no');
    const meter_no = sessionStorage.getItem('meter_no');

    sessionStorage.setItem('amount', amount);
    sessionStorage.setItem('email', email);
    // sessionStorage.setItem('paystack',amount*100);
    
    const meter = sessionStorage.getItem('category');
    
    const number = sessionStorage.getItem('account');

    const [state,setState] = useState(false);

    const navigate = useNavigate()

    const config = {
        reference: (new Date()).getTime().toString(),
        email: email,
        amount: amount*100,
        publicKey:'pk_live_2340dda9c382ed0455f857c27c4ebec6d42fb121'
        // publicKey: 'pk_test_2181b977ad77556cfce56d12392bdeb9f6c610f0',
    };
    
    // you can call this function anything
    const onSuccess = async(reference) => {
        // console.log(reference);
        let body = options(meter_no,metering_type,amount,name)
        if(metering_type == "postpaid"){
            body = options(acc_no,metering_type,amount,name)
        }
        const url = `${process.env.REACT_APP_QUIKPAY_BASEHOST}/verify/transaction/`+reference.reference
        // const url = "http://localhost:3001/verify/transaction/"+reference.reference
        // console.log(body)
        const other = {
            method: 'POST',
            body:JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",

            }
        }
        try {
            const response = await fetch(url,other)
            const data = await response.json()
            // console.log(data)
            // console.log(data.status)
            if(data.status===true){
            alert(data.message)
            // console.log(data.pay)
            sessionStorage.setItem('limit_amount', data.pay.vendorBal);
            sessionStorage.setItem('trans_ref', data.trans_ref);
            sessionStorage.setItem('token_id', data.pay.token);
            sessionStorage.setItem('unit', data.pay.unit);
            sessionStorage.setItem('vendor', data.pay.vendorName);
            sessionStorage.setItem('arrears', data.pay.arrears);
            showToast({
                message: data.message,
                type: 'success'
            });
            setTimeout(() => {
                window.location.href="/checkout"
              }, 1500);
            }else{
                showToast({
                    message: data.message,
                    type: 'error'
                });
            }
            } catch (error) {
                console.log(error)
                showToast({
                    message: 'Transaction Failed!',
                    type: 'error'
                });
                setTimeout(() => {
                    navigate("/details")
                  }, 1500);
            }
        
    };

    const sendSuccess = (reference) =>{
        onSuccess(reference)
    }
    
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
      if(state==true){
        navigate("/checkout")
      }
    }
    
    const initializePayment = usePaystackPayment(config);

    const wallet = async(acc,metering_type,amount)=>{
        const url = "http://164.92.155.135:8001/pay/from-wallet"
        const other = {
            method: 'POST',
            body:JSON.stringify({
                "caller":"acc_no",
                "requester":acc,
                "amount": amount,
                "type":metering_type
            }),
            headers: {
                "Content-Type": "text/plain",
                "Authorization":"Bearer "+token
            }
        }
        try {
            const response = await fetch(url,other)
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

    return(
        <>
            <div class=" container-fluid   container-fixed-lg">
                <div id="rootwizard" class="m-t-0 p-t-0 section">
                    <ul class="nav nav-tabs nav-tabs-linetriangle nav-tabs-separator nav-stack-sm" role="tablist" data-init-reponsive-tabs="dropdownfx">
                        <li class="nav-item" ng-click="selectedTab =1">
                            <a data-toggle="tab" href=" " role="tab" class="active"><i class="fa fa-user tab-icon"></i> <span>Account Detail</span></a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane slide-left  p-l-20 p-r-20 sm-no-padding active" id="tab1">
                            <div class="row row-same-height">
                                <div class="col-md-6 b-r b-dashed b-grey ">
                                    <div class="padding-30 sm-padding-5 sm-m-t-15">
                                        <h3>Customer info </h3>
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

                                <div class="col-md-6 b-r b-dashed b-grey ">
                                    <div class="padding-30 sm-padding-5 sm-m-t-15">
                                        <h3>Current bill </h3>
                                        <table class="table table-condensed">
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
                                        </table>
                                    </div>
                                </div>

                                <div class="row row-same-height">
                                    <div class="col-md-6 b-r b-dashed b-grey ">
                                        <div class="padding-30 sm-padding-5 sm-m-t-15">
                                            <h3>Account info </h3>
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

                                    <div class="col-md-6">
                            <div class="padding-30 sm-padding-5">
                                <br/>
                                <br/>
                                        <form id="paydetail" role="form" autocomplete="off" class="ng-pristine ng-valid-email ng-invalid ng-invalid-required" novalidate="novalidate">
                                                <p>Payments</p>
                                                <div class="form-group-attached">
                                                    <div class="row clearfix">
                                                        <div class="col-md-8">
                                                            <div class="form-group form-group-default input-group">
                                                                <div class="">
                                                                    <label>Amount</label>
                                                                    <input id="amount"  type="text" class="autonumeric form-control" placeholder='0.0' required="" value={amount} aria-required="true" onChange={e=>setAmount(e.target.value)}></input>
                                                                </div>
                                                                <div class="input-group-addon">
                                                                    NGN
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <br/>
                                                <div class="form-group-attached">
                                                    <div class="form-group form-group-default ">
                                                        <label for="email">Email Address</label>
                                                        <input id="email"name="email" value={email} type="email" class="form-control w-50" placeholder="email address" onChange={e=>setEmail(e.target.value)}></input>
                                                    </div>
                                                </div>
                                                <div class="form-group-attached">
                                                    <div class="form-group form-group-default ">
                                                        <label for="email">Phone No</label>
                                                        <input id="phone" name="phone" value={phone} type="text" class="form-control w-50 " placeholder="Phone no" onChange={e=>setPhone(e.target.value)}></input>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="padding-20 sm-padding-5 sm-m-b-20 sm-m-t-20 bg-white clearfix">

                                <ul class="pager wizard no-style">
                                    <li class="next finish">
                                        <button id="payBtn" class="btn  btn-cons btn-animated from-left fa fa-check pull-right" style={{background:"#017cc2",color:"white",border:"#017cc2"}} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <span>Pay Now</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="wizard-footer padding-20 bg-master-light">
                                {/* <p class="small hint-text pull-left no-margin">
                                    <Link to ="/">Return home</Link>
                                </p> */}
                                <p class="pull-left no-margin p-2 rounded" style={{background:"#000",border:"#017cc2"}}>
                                    <Link to ="/" style={{color:"white"}}>Return home</Link>
                                </p>
                                <div class="pull-right">
                                    <img src={`./${process.env.REACT_APP_QUIKPAY_LOGO}`} alt="" width="50" height="22"></img>
                                </div>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="container">
                            <div class="row">
                                <h5 class="modal-title align-items-center justify-content-center text-center" id="exampleModalLabel">Checkout</h5>
                            </div>
                        </div>
                        <hr/>
                        <div class="container">
                            <div class="row">
                                <h5 class="modal-title align-items-center justify-content-center text-center" id="exampleModalLabel">Select payment method</h5>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    <div class="modal-body">
                        <div class="container px-5 mx-3">
                        <button class="row mb-4 border p-3 shadow-sm bg-light w-100" onClick={()=>initializePayment(sendSuccess, onClose)}>
                            <div class="col-4">
                                <img src={bank} alt="" srcset=""></img>
                            </div> 
                            <div class="col-8">
                                <h6>Pay with card</h6>
                            </div>  
                        </button>
                        <button class="row mb-4 border p-3 shadow-sm bg-light w-100" onClick={()=>wallet(acc_no,metering_type,amount)}>
                            <div class="col-4">
                                <img src={Wallet} alt="" srcset=""></img>
                            </div>
                            <div class="col-8"><h6>Pay with wallet</h6></div>
                        </button>

                        {
                            isloggedIn?(
                                <button class="row mb-4 border p-3 shadow-sm bg-light w-100" onClick={()=>{window.location.href="/vendor"}} >
                                    <div class="col-4">
                                        <img src={vendor} alt="" srcset=""></img>
                                    </div>
                                    <div class="col-8"><h6>Pay with vendor balance</h6></div>
                                </button>
                            ):("")
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