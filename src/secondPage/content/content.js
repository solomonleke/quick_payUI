import React from 'react';
import '../../header/css/bootstrap.min.css';
import '../../header/css/pages.css';
import '../../header/css/home.css';
import logo from '../../header/logo_black.png';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Content2(){
    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [isprepaid,setIsprepaid] = useState(true);
    const [amount,setAmount]=useState('');
    const acc_no=sessionStorage.getItem('account');
    const name=sessionStorage.getItem('name');
    const billedamount=sessionStorage.getItem('billed');
    const vat=sessionStorage.getItem('vat');
    const credit=sessionStorage.getItem('credit');
    const metering_type=sessionStorage.getItem('category');
    const Total=sessionStorage.getItem('Total');

    sessionStorage.setItem('amount', amount);

    React.useEffect(() => {
        if (metering_type == 'postpaid') {
            setIsprepaid(false);
        }
    }, []);

    return(
    <div className="page-content-wrapper ">

        <div className="content " id="formController">

            <div className=" container-fluid   container-fixed-lg">

                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to='/' >Home</Link></li>
                    <li className="breadcrumb-item active">Payment</li>
                </ol>

                <div id="rootwizard" className="m-t-0 p-t-0 section">

                    <ul className="nav nav-tabs nav-tabs-linetriangle nav-tabs-separator nav-stack-sm" role="tablist"
                        data-init-reponsive-tabs="dropdownfx">
                        <li className="nav-item">
                            <a data-toggle="tab" href=" " role="tab"><i
                                    className="fa fa-user tab-icon"></i> <span>Payment Detail</span></a>
                        </li>
                    </ul>

                    <div className="" style={{background:"white"}}>
                        <div className="tab-pane slide-left  p-l-20 p-r-20 sm-no-padding" id="tab1">
                            <div className="row row-same-height">
                                <div className="col-md-5 b-r b-dashed b-grey ">
                                    <div className="padding-30 sm-padding-5 sm-m-t-15">


                                        <h3>Your current bill </h3>
                                        <div>{isLoading ? (
                                            <p className="pull-right bold">Loading...</p>
                                        ) : (
                                            
                                            <p className="pull-right bold">
                                                {acc_no}
                                            </p>
                                         
                                        )}
                                            <p> {isLoading ? ( <p>Loading...</p>) : (
                                            <p>{name}</p>
                                            )}</p></div>

                                        <p className="small hint-text">
                                        {isLoading ? ( <p>Loading...</p>) : (
                                            <p>{name} {acc_no}</p>
                                            )}</p>
                                        <table className="table table-condensed">
                                        {isprepaid ? (<span></span>):
                                            (
                                            <tr>
                                                <td className=" col-md-8">
                                                    <span className="m-l-10 font-montserrat fs-11 all-caps">Billed amount</span>
                                                </td>
                                                <td className=" col-md-4 text-right">
                                                
                                                    {isLoading ? (
                                                        <span>Loading...</span>
                                                    ) : (
                                                        
                                                        <span>
                                                            &#8358; {billedamount}
                                                        </span>
                                                    
                                                    )}
                                                </td>
                                            </tr>
                                            )
                                            }
                                            <tr>
                                                <td className=" col-md-8">
                                                    <span className="m-l-10 font-montserrat fs-11 all-caps">VAT</span>
                                                </td>
                                                <td className=" col-md-4 text-right">
                                                {isLoading ? (
                                                        <span>Loading...</span>
                                                    ) : (
                                                        
                                                        <span>
                                                            &#8358; {vat}
                                                        </span>
                                                        
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className=" col-md-8">
                                                    <span className="m-l-10 font-montserrat fs-11 all-caps">Arrears</span>
                                                </td>
                                                <td className=" col-md-4 text-right">
                                                {isLoading ? (
                                                        <span>Loading...</span>
                                                    ) : (
                                                        
                                                        <span>
                                                            &#8358; {credit}
                                                        </span>
                                                        
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" className=" col-md-4 text-right">
                                                    <h4 className="text-primary no-margin font-montserrat">
                                                    {isLoading ? (
                                                        <span>Loading...</span>
                                                    ) : (
                                                        <span>
                                                            &#8358; {Total}
                                                        </span>
                                                       
                                                    )}</h4>
                                                </td>
                                            </tr>
                                        </table>

                                        
                                    </div>
                                </div>
                                <div className="col-md-7" >
                                    <div className="padding-30 sm-padding-5">
                                        <br/>
                                        <br/>
                                        <form id="paydetail"  autocomplete="off">
                                            <p>Payments</p>
                                            <div className="form-group-attached">
                                                <div className="row clearfix">
                                                    <div className="col-md-6">
                                                        <div className="form-group form-group-default input-group">
                                                            <div className="form-input-group">
                                                                <label>Amount</label>
                                                                <input id="amount" 
                                                                       type="text"
                                                                       onChange={e=>setAmount(e.target.value)}
                                                                       className="autonumeric form-control" required></input>
                                                            </div>
                                                            <div className="input-group-addon">
                                                                NGN
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <br></br>
                                            <p>Feedback </p>
                                            <div className="form-group-attached">
                                                <div className="form-group form-group-default ">
                                                    <label for="email">Email Address</label>
                                                    <input id="email" ng-model="email" name="email"
                                                           value="" type="email" className="form-control"
                                                           placeholder="email address"></input>
                                                </div>
                                                <div className="form-group form-group-default required">
                                                    <label for="phoneNumber">Phone Number</label>
                                                    <input id="phoneNumber" name="phoneNumber" ng-model="phoneNumber"
                                                           type="tel" className="form-control"
                                                           placeholder="active phone number"
                                                           value="" required></input>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="padding-20 sm-padding-5 sm-m-b-20 sm-m-t-20 bg-white clearfix">
                        
                            <ul className="pager wizard no-style">
                                <li  className="next">
                                    {
                                        (amount !=="") &&
                                    <Link to={"/payment"} className="btn btn-primary btn-cons btn-animated from-left fa fa-forward pull-right"
                                            type="button" >
                                        <span>Confirm</span>
                                    </Link>
                                }
                                </li>
                            </ul>
                                                            
                            
                        </div>
                        <div className="wizard-footer padding-20 bg-master-light">
                            <p className="small hint-text pull-left no-margin">
                                <Link to="/">Return home</Link>
                            </p>
                            <div className="pull-right">
                                <img src={logo} alt="logo" width="50" height="22"></img>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}



export default Content2;