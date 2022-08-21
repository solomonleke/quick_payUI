import React from 'react';
import '../../header/css/bootstrap.min.css';
import '../../header/css/pages.css';
import '../../header/css/home.css';
import logo from '../../header/logo_black.png';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Content2(){
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);
    const {number} = useParams();
    const [amount,setAmount]=useState('');
    const token = sessionStorage.getItem('token');
    React.useEffect(() => {
        const url = "https://aplecash.smartpowerbilling.com/cashcollect/customer/find?account_number="+number;
        const other = {
            method: 'GET',
            headers: {
                "Content-Type": "text/plain",
                Authorization:'Bearer'+' '+`${token}`
            }
           
        }
        fetch(url,other)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error));
        
    }, []);

    React.useEffect(() => {
        if (data.length !== 0) {
        setIsLoading(false);
        }
        console.log(data);
        sessionStorage.setItem('name', data.map((name)=>data[0].name));
        sessionStorage.setItem('category', data.map(()=>data[0].metering_type));
    }, [data]);

    return(
    <div className="page-content-wrapper ">

        <div className="content " id="formController">

            <div className=" container-fluid   container-fixed-lg">

                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/energypay/">Home</a></li>
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
                                            data.map((acc_no) => (
                                            <p className="pull-right bold">
                                                {data[0].acc_no}
                                            </p>
                                            ))
                                        )}
                                            <p> {isLoading ? ( <p>Loading...</p>) : (
                                            data.map((name) => (<p>{data[0].name}</p>))
                                            )}</p></div>

                                        <p className="small hint-text">
                                        {isLoading ? ( <p>Loading...</p>) : (
                                            data.map((name) => (<p>{data[0].name} ({data[0].acc_no})</p>))
                                            )}</p>
                                        <table className="table table-condensed">
                                            <tr>
                                                <td className=" col-md-8">
                                                    <span className="m-l-10 font-montserrat fs-11 all-caps">Billed amount</span>
                                                </td>
                                                <td className=" col-md-4 text-right">
                                                    {isLoading ? (
                                                        <span>Loading...</span>
                                                    ) : (
                                                        data.map((billedamount) => (
                                                        <span>
                                                            &#8358; {data[0].billedamount}
                                                        </span>
                                                        ))
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className=" col-md-8">
                                                    <span className="m-l-10 font-montserrat fs-11 all-caps">VAT</span>
                                                </td>
                                                <td className=" col-md-4 text-right">
                                                {isLoading ? (
                                                        <span>Loading...</span>
                                                    ) : (
                                                        data.map((vat) => (
                                                        <span>
                                                            &#8358; {data[0].vat}
                                                        </span>
                                                        ))
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
                                                        data.map((vat) => (
                                                        <span>
                                                            &#8358; {data[0].credit}
                                                        </span>
                                                        ))
                                                    )}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" className=" col-md-4 text-right">
                                                    <h4 className="text-primary no-margin font-montserrat">
                                                    {isLoading ? (
                                                        <span>Loading...</span>
                                                    ) : (
                                                        data.map((vat) => (
                                                        <span>
                                                            &#8358; {data[0].credit + data[0].billedamount}
                                                        </span>
                                                        ))
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
                                    <Link to={"/details/"+number+"/"+amount+"/pay"} className="btn btn-primary btn-cons btn-animated from-left fa fa-forward pull-right"
                                            type="button" >
                                        <span>Confirm</span>
                                    </Link>
                                </li>
                                {/* <li className="next finish hidden">
                                    <button  id="payBtn"
                                            className="btn btn-primary btn-cons btn-animated from-left fa fa-check pull-right"
                                            type="button">
                                        <span>Pay Now</span>
                                    </button>
                                </li>
                                <li className="previous first hidden">
                                    <button className="btn btn-default btn-cons btn-animated from-left fa fa-cog pull-right"
                                            type="button">
                                        <span>First</span>
                                    </button>
                                </li>
                                <li className="previous">
                                    <button className="btn btn-default btn-cons pull-right"
                                            type="button">
                                        <span>Previous</span>
                                    </button>
                                </li> */}
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