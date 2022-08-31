import { useNavigate } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';

export default function Success(){
    const message = sessionStorage.getItem('message');
    const account = sessionStorage.getItem('account');
    const category = sessionStorage.getItem('category');
    const token = sessionStorage.getItem('token_id');
    const unit = sessionStorage.getItem('unit');
    const amount = sessionStorage.getItem('amount');
    const navigate = useNavigate()
    return(
        <div className="container">
                <div className="row row-same-height" style={{background:"white"}}>
                    <div className="col-md-5 b-r b-dashed " >
                        <div className="padding-30 sm-padding-5 sm-m-t-15" >
                            <h2>{message}</h2>
                            <p className="small hint-text">Kindly confirm the details below</p>
                            <table className="table table-condensed">
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Account</span>
                                    </td>
                                    <td className=" col-md-3 text-right" style={{width: "200px"}}>
                                        <span className="bold">{account}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Metering Type</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span> {category}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Token</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{token}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Units</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{unit}</span>
                                    </td>
                                </tr>

                                <tr>
                                    <td className=" col-md-9">
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Amount</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{amount}</span>
                                    </td>
                                </tr>
                    
                            </table>
                            <div className="padding-20 sm-padding-5 sm-m-b-20 sm-m-t-20 bg-white clearfix">

                            <ul className="pager wizard no-style">
                                <li  className="next">
                                    <button className="btn btn-primary btn-cons btn-animated from-left fa fa-forward pull-right"
                                            type="submit" onClick={()=>{
                                                
                                                    navigate('/receipt')
                                                
                                            }} >
                                        <span>Go to Receipt</span>
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