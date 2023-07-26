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
import { Box, Flex, Menu, MenuButton, MenuItem, MenuList, Select, Stack, Text } from '@chakra-ui/react';
import ListRow from '../../../Components/ListRow';
import Input from '../../../Components/Input';
import { FaUserAlt } from 'react-icons/fa';
import { AiOutlineNumber, AiTwotoneMail } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import Button from '../../../Components/Button';

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
    let VendorName = sessionStorage.getItem('vendor');
    let VendorAmount = sessionStorage.getItem('limit_amount');

    sessionStorage.setItem('amount', amount);
    sessionStorage.setItem('email', email);
    // sessionStorage.setItem('paystack',amount*100);


    const [bill, setBill] = useState("");
    const [payment, setPayment] = useState("");
    const [ispostpaid, setIspostpaid] = React.useState(true);



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
        if (metering_type == 'prepaid') {
            setIspostpaid(false);
        }
    }, [metering_type]);



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

    const [ShowPayment, setShowPayment] = useState(false);

    const Proceed = () => {
        if (bill !== "" && payment !== "") {
            sessionStorage.setItem('category', metering_type);
            sessionStorage.setItem('bill_type', bill);
            sessionStorage.setItem('payment_type', payment);
            setShowPayment(true)
        } else {
            alert("please make sure all fields are filled")

        }


    }



    return (
        <>
            <div class="">

                <div id="rootwizard" class="container">
                    <Flex justifyContent={"space-between"} flexDir={["column-reverse", "row"]}>

                        <Header title={"account details"} mt="32px" />
                        {
                            isloggedIn  && (
                                <Menu>
                                    {({ isOpen }) => (
                                        <>
                                            <MenuButton isActive={isOpen} pos={"relative"} top={"10px"} px={"15px"} rounded="12px" py="0px important" bg="yellow.yellow500" color={"#fff"}>
                                                {isOpen ? 'Hide Current Vending Balance' : 'Show Current Vending Balance'}
                                            </MenuButton>
                                            <MenuList>
                                                <MenuItem>Current Vending Limit:  <Text ml={"10px"} color="#242424" fontWeight={"600"} pos={"relative"} top="5px">₦500,000</Text> </MenuItem>
                                                <MenuItem>Amount Collected: <Text ml={"10px"} color="#242424" fontWeight={"600"} pos={"relative"} top="5px">₦{totalDebt !== "null" ? totalDebt : "0.00"}</Text></MenuItem>
                                                <MenuItem>Available to Vend: <Text ml={"10px"} color="#242424" fontWeight={"600"} pos={"relative"} top="5px">₦{VendorAmount}</Text></MenuItem>
                                            </MenuList>
                                        </>
                                    )}
                                </Menu>
                            )
                        }

                    </Flex>

                    <div class="row mb-4">
                        <div class=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="singleCardX mt-4">
                                <Header title="Customer info" size='1.2em' />
                                <Stack my="20px" spacing={"32px"}>
                                    <ListRow
                                        title={"name"}
                                        value={name}
                                    />
                                    <ListRow
                                        title={"address"}
                                        value={address}
                                    />
                                    <ListRow
                                        title={"phone number"}
                                        value={phone_no}
                                    />
                                </Stack>

                            </div>
                        </div>

                        <div class=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="singleCardX mt-4">

                                <Header title="Current bill" size='1.2em' />
                                <Stack my="20px" spacing={"32px"}>
                                    {isprepaid ? (
                                        <>
                                            <ListRow
                                                title={"Minimum Vend"}
                                                value={`₦ ${minimumVend !== "null" ? minimumVend : "0.00"}`}
                                            />
                                            <ListRow
                                                title={"VAT"}
                                                value={`₦ ${vat || "0.00"}`}
                                            />
                                            <ListRow
                                                title={"Total Balance"}
                                                value={`₦ ${totalDebt !== "null" ? totalDebt : "0.00"}`}
                                            />


                                        </>
                                    ) : (
                                        <>
                                            <ListRow
                                                title={"Billed amount"}
                                                value={`₦ ${billedamount}`}
                                            />
                                            <ListRow
                                                title={"VAT"}
                                                value={`₦ ${vat}`}
                                            />
                                            <ListRow
                                                title={"Arrears"}
                                                value={`₦ ${credit}`}
                                            />

                                            <ListRow
                                                title={"Total"}
                                                value={`₦ ${Total}`}
                                            />


                                        </>
                                    )}
                                </Stack>
                            </div>
                        </div>


                        <div class=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="singleCardX mt-4">

                                <Header title="account info" size='1.2em' />

                                <Stack my="20px" spacing={"32px"}>
                                    <ListRow
                                        title={"Account number"}
                                        value={` ${acc_no}`}
                                    />
                                    <ListRow
                                        title={"Meter Number"}
                                        value={` ${meter_no}`}
                                    />
                                    <ListRow
                                        title={"Account type"}
                                        value={` ${metering_type}`}
                                    />
                                </Stack>


                            </div>
                        </div>

                        <div class=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div class="singleCardX mt-4">
                                <Header title="Payment" size='1.2em' />
                                {
                                    ShowPayment === false ? (
                                        <Box>
                                            <Stack spacing="20px">
                                                {
                                                    isloggedIn ? (

                                                        ispostpaid ? (
                                                            <Select id='bill' _focus={{ borderColor: "#017CC2" }} color="#000" _hover={{ color: "black" }} placeholder='Select Bill Type' borderColor={bill !== "" ? "#017CC2" : "#242424"} fontSize={bill ? "16px" : "12px"} fontWeight={"400"} value={bill} size='lg' onChange={e => setBill(e.target.value)} >
                                                                <option value="bill">Pay your bill</option>
                                                                <option value="reconnection cost">Pay for reconnection cost</option>
                                                                <option value="reconnection fee">Pay for reconnection fee</option>
                                                                <option value="lor(revenue loss)">Pay for lor(revenue loss)</option>
                                                                <option value="administrative charge">Pay for administrative charge</option>
                                                            </Select>
                                                        ) : (

                                                            <Select id='bill' _focus={{ borderColor: "#017CC2" }} _hover={{ color: "black" }} color="#000" placeholder='Select Bill Type' borderColor={bill !== "" ? "#017CC2" : "#242424"} fontSize={bill ? "16px" : "12px"} fontWeight={"400"} value={bill} size='lg' onChange={e => setBill(e.target.value)} >
                                                                <option value="bill">Buy Energy</option>
                                                                <option value="reconnection cost">Pay for reconnection cost</option>
                                                                <option value="reconnection fee">Pay for reconnection fee</option>
                                                                <option value="lor(revenue loss)">Pay for lor(revenue loss)</option>
                                                                <option value="administrative charge">Pay for administrative charge</option>

                                                            </Select>
                                                        )
                                                    ) : (

                                                        ispostpaid ? (
                                                            <Select id='bill' _focus={{ borderColor: "#017CC2" }} placeholder='Select Bill Type' color="#000" borderColor={bill !== "" ? "#017CC2" : "#242424"} fontSize={bill ? "16px" : "12px"} fontWeight={"400"} value={bill} size='lg' onChange={e => setBill(e.target.value)} >
                                                                <option value="bill">Pay your bill</option>
                                                            </Select>
                                                        ) : (
                                                            <Select id='bill' _focus={{ borderColor: "#017CC2" }} placeholder='Select Bill Type' borderColor={bill !== "" ? "#017CC2" : "#242424"} fontSize={bill ? "16px" : "12px"} fontWeight={"400"} value={bill} size='lg' onChange={e => setBill(e.target.value)} >
                                                                <option value="bill">Buy Energy</option>
                                                            </Select>
                                                        )

                                                    )
                                                }

                                                <Select id='payment' _focus={{ borderColor: "017CC2" }} placeholder='Select Payment Type' borderColor={payment !== "" ? "#017CC2" : "#242424"} fontSize={payment ? "16px" : "12px"} fontWeight={"400"} value={payment} size='lg' onChange={e => setPayment(e.target.value)} >
                                                    <option value="Cash">Cash</option>
                                                    <option value="Direct payment">Direct payment</option>
                                                </Select>
                                            </Stack>

                                            <Button mt="20px" disabled onClick={Proceed}>Proceed</Button>
                                        </Box>
                                    ) : (
                                        <Box>
                                            <form id="paydetail" role="form" autocomplete="off" class="ng-pristine ng-valid-email ng-invalid ng-invalid-required" novalidate="novalidate">
                                                <Stack my="20px" spacing={"20px"}>
                                                    <Input isRequired={true} label='Amount(NGN)' leftIcon={<AiOutlineNumber />} id="amount" value={amount} val={amount !== "" ? true : false} type='number' onChange={e => setAmount(e.target.value)} />
                                                    <Input isRequired={true} label='Email' leftIcon={<AiTwotoneMail />} id="email" value={email} val={email !== "" ? true : false} type='email' onChange={e => setEmail(e.target.value)} />
                                                    <Input isRequired={true} label='Phone No' leftIcon={<BsFillTelephoneFill />} id="phone" value={phone} val={phone !== "" ? true : false} type='number' onChange={e => setPhone(e.target.value)} />
                                                    {amount !== "" && email !== "" && phone !== "" ? (
                                                        <button id="payBtn" class="loginBtnP" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Pay Now</button>

                                                    ) : (

                                                        <button id="payBtn" class="loginBtnP" type="button" onClick={() => alert("Please make sure no field is empty")}>please fill all fields</button>
                                                    )


                                                    }
                                                </Stack>

                                            </form>

                                        </Box>
                                    )
                                }











                            </div>
                        </div>

                    </div>

                </div>
                <Heading />
            </div>
            {/* modal */}
            <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div class="container">
                                <div class="row">
                                    <Header title="Checkout" size='1.7em' />

                                </div>
                            </div>
                            <hr />
                            <div class="container">
                                <div class="row">
                                    <Header title="Select payment method" size='1.3em' />
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