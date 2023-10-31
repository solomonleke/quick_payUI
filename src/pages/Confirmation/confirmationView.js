import { Box, Stack } from '@chakra-ui/react';
import Header from '../../Components/Header';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import React from 'react';
import { useState } from 'react';
import ListRow from '../../Components/ListRow';
import Button from '../../Components/Button';

export default function ConfirmationView({ Send }) {
    // const [state, setState] = useState("");
    const [bill, setBill] = useState("");
    const [isloggedIn, setisloggedIn] = useState(false);
    const [payment, setPayment] = useState("");
    const name = sessionStorage.getItem('name');
    const token = sessionStorage.getItem('token');
    const meter = sessionStorage.getItem('category');
    const meter_no = sessionStorage.getItem('meter_no');
    const number = sessionStorage.getItem('account');

    const [ispostpaid, setIspostpaid] = React.useState(true);

    React.useEffect(() => {
        if (meter == 'prepaid') {
            setIspostpaid(false);
        }
    }, [meter]);

    React.useEffect(() => {
        if (token) {
            setisloggedIn(true);
        }
    }, []);

    return (
        <div className='contain '>
            <div className="container">
                <div className="singleCardX">
                    <Header mt="12px" title={"Kindly confirm the details below"} />

                    <Stack my="20px" spacing={"10px"}>
                        <ListRow 
                            title={"Current metering Type"}
                            value={meter}
                        />
                        <ListRow 
                            title={"Customer Name"}
                            value={name}
                        />
                        <ListRow 
                            title={"Account Number"}
                            value={number}
                        />
                        <ListRow 
                            title={"Meter Number"}
                            value={meter_no}
                        />
                       
                    </Stack>
                   
                    <Header title={"Select your payment type"} size='1.5em' mt='10px'/>
                    <table className='table table-condensed mb-3'>
                        <tr>
                            <td className=" col-md-6 ">
                            <Box textTransform={"capitalize"} fontWeight={"600"} fontSize={"14px"} color={"#242424"}>Bill Type: </Box>

                              
                            </td>
                            {isloggedIn ? (
                                ispostpaid ? (
                                    <td colspan="2" className=" col-md-6 text-right">
                                        <select value={bill} onChange={e => setBill(e.target.value)} className="selectDrop">
                                            <option>--------</option>
                                            <option value="bill">Pay your bill</option>
                                            <option value="reconnection cost">Pay for reconnection cost</option>
                                            <option value="reconnection fee">Pay for reconnection fee</option>
                                            <option value="lor(revenue loss)">Pay for lor(revenue loss)</option>
                                            <option value="administrative charge">Pay for administrative charge</option>
                                        </select>
                                    </td>
                                ) : (
                                    <td colspan="2" className=" col-md-6 text-right">
                                        <select value={bill} onChange={e => setBill(e.target.value)} className="selectDrop">
                                            <option>--------</option>
                                            <option value="bill">Buy Energy</option>
                                            <option value="reconnection cost">Pay for reconnection cost</option>
                                            <option value="reconnection fee">Pay for reconnection fee</option>
                                            <option value="lor(revenue loss)">Pay for lor(revenue loss)</option>
                                            <option value="administrative charge">Pay for administrative charge</option>
                                        </select>
                                    </td>
                                )
                            ) : (
                                ispostpaid ? (
                                    <td colspan="2" className=" col-md-6 text-right">
                                        <select value={bill} onChange={e => setBill(e.target.value)} className="selectDrop">
                                            <option>--------</option>
                                            <option value="bill">Pay your bill</option>
                                        </select>
                                    </td>
                                ) : (
                                    <td colspan="2" className=" col-md-6 text-right">
                                        <select value={bill} onChange={e => setBill(e.target.value)} className="selectDrop">
                                            <option>--------</option>
                                            <option value="bill">Buy Energy</option>
                                        </select>
                                    </td>
                                )
                            )
                            }
                        </tr>
                    </table>
                
                    <Header title={"Select your payment mode"} size='1.5em' mt='10px'/>
                 
                    <table className='table table-condensed mb-3'>
                        <tr>
                            <td className=" col-md-6 ">
                            <Box textTransform={"capitalize"} fontWeight={"600"} fontSize={"14px"} color={"#242424"}>Payment mode : </Box>

                                {/* <span className="all-caps">Payment mode</span> */}
                            </td>
                            <td colspan="2" className=" col-md-6 text-right">
                                <select value={payment} onChange={e => setPayment(e.target.value)} className="selectDrop">
                                    <option>--------</option>
                                    <option value="Cash">Cash</option>
                                    <option value="Direct payment">Direct payment</option>
                                </select>
                            </td>
                        </tr>
                    </table>

                    <Button onClick={() => { Send(meter_no, meter, bill, payment) }}>Confirm</Button>

                    {/* <p className="small">By clicking Pay Now You will Agree to the Payment <a target="_blank" href="#">Terms &amp; Conditions</a></p> */}
                    <ul class="pager wizard no-style">
                        <li class="next finish">
                            {/* <button id="payBtn" class="loginBtnP"  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { Send(meter_no, meter, bill, payment) }}>
                                <span>Confirm</span>
                            </button> */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}