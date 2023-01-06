import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function VendorView({loaded,Send}){
    const name = sessionStorage.getItem('name');
    const meter = sessionStorage.getItem('category');
    const meter_no = sessionStorage.getItem('meter_no');
    const number = sessionStorage.getItem('account');
    const amount = sessionStorage.getItem('amount');
    const payment = sessionStorage.getItem('payment');
    const bill_type = sessionStorage.getItem('bill_type');
    return(
        <div className='contain'>
            <div className="order001">
                <div className="row row-same-height" style={{background:"white"}}>
                    <div className="col-md b-r b-dashed " >
                        <div className="padding-30 sm-padding-5 sm-m-t-15" >
                            <h2>We Secured Your Line</h2>
                            <p>You are about to make the following payment to BEDC, as payment for Energy usage</p>
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
                                        <span className="m-l-10 font-montserrat fs-11 all-caps">Payment type</span>
                                    </td>
                                    <td className=" col-md-3 text-right">
                                        <span>{bill_type}</span>
                                        <input id="accNumber" type="hidden" value={bill_type}></input>
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
                            {/* <p className="small">By clicking Pay Now You will Agree to the Payment <a target="_blank" href="#">Terms &amp; Conditions</a></p> */}
                            <ul class="pager wizard no-style">
                                    <li class="next finish">
                                        <button id="payBtn" class="btn  btn-cons btn-animated from-left fa fa-check pull-right" style={{background:"#017cc2",color:"white",border:"#017cc2"}} type="button"  onClick={(e)=>{e.preventDefault();Send(amount,meter,number,name,meter_no,payment)}}>
                                            <span>Pay</span>
                                        </button>
                                        {loaded?
                                        <Backdrop
                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                        open
                                        
                                    >
                                        <CircularProgress color="inherit" />
                                    </Backdrop>
                                        :
                                        ""
                                        }
                                        
                                    </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}