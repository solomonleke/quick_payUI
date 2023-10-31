import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import React from 'react';
import Header from '../../Components/Header';
import Preloader from '../../Components/Preloader';
import { Stack } from '@chakra-ui/react';
import ListRow from '../../Components/ListRow';
import Button from '../../Components/Button';


export default function PaystackView({ Values, Paystack, loaded }) {
    // console.log(loaded)
    return (
        <div className='contain'>
            <div className="container">
                <div className="singleCardX" >


                    <Header title="We Secured Your Line" mt='12px' />
                    <p className='mt-4'>You are about to make the following payment to {process.env.REACT_APP_QUIKPAY_DESC}, as payment for Energy usage</p>
                    <p className="small hint-text">Kindly confirm the details below</p>

                    <Stack my="20px" spacing= "12px">
                    <ListRow
                            title={"Metering Type"}
                            value={Values.metering_type}
                        />
                    <ListRow
                            title={"Customer Name"}
                            value={Values.name}
                        />
                    <ListRow
                            title={"Email"}
                            value={Values.email}
                        />
                    <ListRow
                            title={"Phone Number"}
                            value={Values.phone_no}
                        />
                    <ListRow
                            title={"Account Number"}
                            value={Values.acc_no}
                        />
                    <ListRow
                            title={"Meter Number"}
                            value={Values.meter_no}
                        />
                    <ListRow
                            title={"Amount"}
                            value={Values.amount}
                        />
                    <ListRow
                            title={"Transaction Fee"}
                            value={Values.fees}
                        />
                    <ListRow
                            title={"Total"}
                            value={Values.totalAmount}
                        />
                   {/* <input id="accNumber" type="hidden" value={Values.acc_no}></input>

                   <input id="accNumber" type="hidden" value={Values.meter_no}></input>
                
                   <input id="accNumber" type="hidden" value={Values.amount}></input>
                               
                   <input id="accNumber" type="hidden" value={Values.fees}></input> */}
                    </Stack>
                  
                  <Button mt="20px" onClick={(e) => {  Paystack() }} >Pay with Paystack</Button>

                   
                    {
                        loaded && (

                            <Preloader />
                        )
                    }


                </div>
            </div>
        </div>
    )

}