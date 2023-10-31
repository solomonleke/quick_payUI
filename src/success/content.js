import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import { useNavigate } from 'react-router-dom';
import { usePaystackPayment } from 'react-paystack';
import Header from '../Components/Header';
import Heading from '../header/top';
import { Stack } from '@chakra-ui/react';
import ListRow from '../Components/ListRow';
import Button from '../Components/Button';

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

                    <Stack my="20px" spacing={"15px"}>
                    <ListRow
                            title={"Account"}
                            value={account}
                        />
                    <ListRow
                            title={"Metering Type"}
                            value={category}
                        />
                    <ListRow
                            title={"Token"}
                            value={token}
                        />
                    <ListRow
                            title={"Units"}
                            value={unit}
                        />
                    <ListRow
                            title={"Amount"}
                            value={amount}
                        />
                    </Stack>
                  
                  <Button onClick={() => {navigate('/receipt')}} mt="12px">Get Receipt</Button>
{/* 
                    <div className='flex'>
                        
                        <button className="loginBtnP mt-4"
                            type="submit" onClick={() => {

                                navigate('/receipt')

                            }} >
                            <span>Get Receipt</span>
                        </button>
                    </div> */}
                 

                </div>
            </div>
        </div>
           
        </>
        

    )
}