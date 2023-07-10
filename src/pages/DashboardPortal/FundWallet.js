import React, { useState } from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import { Box, Flex, Stack } from '@chakra-ui/react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import { TbCurrencyNaira } from 'react-icons/tb'
import Header from '../../Components/Header'
import { MdAlternateEmail } from 'react-icons/md'

export default function FundWallet() {
    const [Payload,setPayload] =useState({
        amount: "",
        email: ""
    })

    const handlePayload = (e)=>{
        setPayload({...Payload, [e.target.id]: e.target.value})
    }
  return (
    <MainLayout>
    <Seo title='fund Wallet' description='APLE fund wallet'/>

    <Flex mt="32px" justifyContent={"center"} flexWrap={"wrap"}>
    <Box w={["100%", "100%", "60%", "60%", "60%"]} mt="12px" >
          <div className='LoginCardX'>
          <Header title={"fund wallet"} mt="10px"/>
            <Stack spacing={"26px"} mt="32px">
              <Input  label='Amount' leftIcon={<TbCurrencyNaira />} id="amount" value={Payload.amount} val={Payload.amount !== "" ? true : false} type='number' onChange={handlePayload} />
              <Input  label='Email' leftIcon={<MdAlternateEmail />} id="email" value={Payload.email} val={Payload.email !== "" ? true : false} type='email' onChange={handlePayload} />
              <Button mt="32px" >Fund Wallet</Button>
             

              
            </Stack>
          </div>
        </Box>

    </Flex>

      
    </MainLayout>
  )
}
