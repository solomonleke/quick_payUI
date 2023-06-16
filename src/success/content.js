import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import { useNavigate } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';
import Header from '../Components/Header';
import Heading from '../header/top';

export default function Success() {
    const message = sessionStorage.getItem('message');
    const account = sessionStorage.getItem('account');
    const category = sessionStorage.getItem('category');
    const token = sessionStorage.getItem('token_id');
    const unit = sessionStorage.getItem('unit');
    const amount = sessionStorage.getItem('amount');
    const navigate = useNavigate()
    return (
        <>
         <Heading/>
    <div className="contain">
            <div className='container'>
                <div className="singleCardX" >
                    <Header title="Transaction receipt" mt="12px" />
                    <h2>{message}</h2>
                    <table className="table table-condensed">
                        <tr>
                            <td className=" col-md-9 tableTitle">
                                <span className="all-caps">Account</span>
                            </td>
                            <td className=" col-md-3 TableSubText text-right" style={{ width: "200px" }}>
                                <span className="">{account}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className=" col-md-9 tableTitle">
                                <span className="all-caps">Metering Type</span>
                            </td>
                            <td className=" col-md-3 TableSubText text-right">
                                <span> {category}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className=" col-md-9 tableTitle">
                                <span className="all-caps">Token</span>
                            </td>
                            <td className=" col-md-3 TableSubText text-right">
                                <span>{token}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className=" col-md-9 tableTitle">
                                <span className="all-caps">Units</span>
                            </td>
                            <td className=" col-md-3 TableSubText text-right">
                                <span>{unit}</span>
                            </td>
                        </tr>

                        <tr>
                            <td className=" col-md-9 tableTitle">
                                <span className="all-caps">Amount</span>
                            </td>
                            <td className=" col-md-3 TableSubText text-right">
                                <span>{amount}</span>
                            </td>
                        </tr>

                    </table>

                    <div className='flex'>
                        
                        <button className="loginBtnP mt-4"
                            type="submit" onClick={() => {

                                navigate('/receipt')

                            }} >
                            <span>Get Receipt</span>
                        </button>
                    </div>
                 

                </div>
            </div>
        </div>
           
        </>
        

    )
}