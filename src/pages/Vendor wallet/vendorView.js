import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../../Components/Header';
import { Stack } from '@chakra-ui/react';
import ListRow from '../../Components/ListRow';
import Button from '../../Components/Button';
import Preloader from '../../Components/Preloader';

export default function VendorView({ loaded, Send }) {
    const name = sessionStorage.getItem('name');
    const meter = sessionStorage.getItem('category');
    const meter_no = sessionStorage.getItem('meter_no');
    const number = sessionStorage.getItem('account');
    const amount = sessionStorage.getItem('amount');
    const payment = sessionStorage.getItem('payment');
    const bill_type = sessionStorage.getItem('bill_type');
    return (
        <div className='contain'>
            <div className="container">
                <div className="singleCardX" style={{ background: "white" }}>

                    <Header title="We Secured Your Line" mt='12px' />
                    <p className='mt-4'>You are about to make the following payment to APLE, as payment for Energy usage</p>
                    <p className="small hint-text">Kindly confirm the details below</p>

                    <Stack my="20px" spacing={"12px"}>
                        <ListRow
                            title={"Metering Type"}
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
                            title={" Payment type"}
                            value={bill_type}
                        />
                        <ListRow
                            title={" Total"}
                            value={amount}
                        />

                        <button id="payBtn" class="loginBtnP mt-4" type="button" onClick={(e) => { e.preventDefault(); Send(amount, meter, number, name, meter_no, payment) }}>Pay</button>

                    </Stack>



                    {loaded && <Preloader />}

                </div>
            </div>
        </div>
    )
}