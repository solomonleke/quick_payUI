import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import { Box, Flex, Stack } from '@chakra-ui/react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { TbCurrencyNaira } from 'react-icons/tb'
import Header from '../../Components/Header'
import { MdAlternateEmail } from 'react-icons/md'
import { usePaystackPayment } from 'react-paystack'
import { FundWalletAPI } from '../../Utils/ApiCalls'
import { showToast } from '../../utility/tool'
import { useNavigate } from 'react-router-dom'

export default function FundWallet() {
    const [Payload,setPayload] =useState({
        amount: "",
        email: ""
    })
   
    const handlePayload = (e)=>{
        setPayload({...Payload, [e.target.id]: e.target.value})
    }

    const onlineUser = JSON.parse(localStorage.getItem("user"))
    const onlineUserToken = JSON.parse(localStorage.getItem("CustomerToken"))
   

    const config = {
      reference: (new Date()).getTime().toString(),
      email: `${onlineUser?.email||"name@gmail.com"}`,
      amount: Payload.amount * 100, 
      publicKey: 'pk_test_90f04cc9153e8effe41ec6a028c75e4999bea6bd',
  };

  const nav = useNavigate()
  const sendTransRef = async (payload)=>{
    try {
  
      let result = await FundWalletAPI(payload);
      console.log("FundWalletAPI", result);

      
      if (result.status === 200) {
   
        showToast({
          message: "Wallet Funded successfully",
          type: 'success'
      });

      nav("/portal/dashboard")

      setPayload({
        amount: "",
        email: ""
    })
         
      }


  } catch (e) {

      showToast({
          message: e.message,
          type: 'error'
      });
    
      console.error('consumptionError:', e.message);
  }

  }

  const onSuccess = (reference) => {
   
    let PayloadData =  {
      token: onlineUserToken,
      trans_ref: reference.reference,
      payment_for: "wallet"
    }

    sendTransRef(PayloadData)

    // Implementation for whatever you want to do with reference and after success call.
    console.log("onSuccess",reference);

  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }

  const initializePayment = usePaystackPayment(config)

    const fundWalletPaystack = (e)=>{
      e.preventDefault()

      initializePayment(onSuccess, onClose)
      
    }


    useEffect(() => {
     
    }, []);
  return (
    <MainLayout>
    <Seo title='fund Wallet' description='APLE fund wallet'/>

    <Flex mt="32px" justifyContent={"center"} flexWrap={"wrap"}>
    <Box w={["100%", "100%", "60%", "60%", "60%"]} mt="12px" >
          <div className='LoginCardX'>
          <Header title={"fund wallet"} size="18px" mt="10px"/>
              <form onSubmit={fundWalletPaystack}>
            <Stack spacing={"26px"} mt="32px">

              <Input isRequired={true} label='Amount' leftIcon={<TbCurrencyNaira />} id="amount" value={Payload.amount} val={Payload.amount !== "" ? true : false} type='number' onChange={handlePayload} />
              {/* <Input  label='Email' leftIcon={<MdAlternateEmail />} id="email" value={Payload.email} val={Payload.email !== "" ? true : false} type='email' onChange={handlePayload} /> */}
              <Button mt="32px" isSubmit={true}  >Fund Wallet</Button>
             
            </Stack>
            </form>
          </div>
        </Box>

    </Flex>

      
    </MainLayout>
  )
}
