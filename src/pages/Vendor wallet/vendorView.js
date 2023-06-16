import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Header from '../../Components/Header';

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
            <div className="container">
                <div className="singleCardX" style={{background:"white"}}>
                   
                <Header title="We Secured Your Line" mt='12px'/>
                            <p className='mt-4'>You are about to make the following payment to APLE, as payment for Energy usage</p>
                            <p className="small hint-text">Kindly confirm the details below</p>
                            <table className="table table-condensed">
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Metering Type</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right" style={{width: "200px"}}>
                                        <span className="">{meter}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Customer Name</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right">
                                        <span> {name}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Account Number</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right">
                                        <span>{number}</span>
                                        <input id="accNumber" type="hidden" value={number}></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Payment type</span>
                                    </td>
                                    <td className=" col-md-3 TableSubText text-right">
                                        <span>{bill_type}</span>
                                        <input id="accNumber" type="hidden" value={bill_type}></input>
                                    </td>
                                </tr>
                            <br/>
                                <tr>
                                    <td className=" col-md-9 tableTitle">
                                        <span className=" all-caps">Total</span>
                                    </td>
                                    <td  className=" col-md-3 TableSubText text-right">
                                        <span className="">&#8358;
                                            {amount}</span>
                                    </td>
                                </tr>
                            </table>
                            <button id="payBtn" class="loginBtnP mt-4"  type="button"  onClick={(e)=>{e.preventDefault();Send(amount,meter,number,name,meter_no,payment)}}>
                                            <span>Pay</span>
                                        </button>
                                        {/* {loaded?
                                        <Backdrop
                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                        open
                                        
                                    >
                                        <CircularProgress color="inherit" />
                                    </Backdrop>
                                        :
                                        ""
                                        } */}
                        
                </div>
            </div>
        </div>
    )
}