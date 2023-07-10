import React, { useState } from 'react'
import MainLayout from '../../../Layout/DashboardLayout/Index'
import Seo from '../../../Utils/Seo'
import { Box, Flex, Stack } from '@chakra-ui/react'
import Input from '../../../Components/Input'
import Button from '../../../Components/Button'
import { TbCurrencyNaira } from 'react-icons/tb'
import Header from '../../../Components/Header'
import { AiTwotoneMail } from 'react-icons/ai'


export default function BuyToken() {

    const [Payload, setPayload] = useState({
        amount: "",
        email:"",
    })

    const handlePayload = (e)=>{
        setPayload({...Payload, [e.target.id]: e.target.value})
    }
  return (
    <MainLayout>
    <Seo title='Buy Token' description='Aple Buy Token'/>
   
        <Flex justifyContent={"center"}>
        <Box w={["100%", "100%", "48%", "48%", "48%"]} mt="12px" >
          <div className='LoginCardX'>
          <Header title={"Buy token"} mt="15px"/>
            <Stack spacing={"26px"} mt="20px">
              <Input label='Amount' leftIcon={<TbCurrencyNaira />} id="amount" value={Payload.amount} val={Payload.amount !== "" ? true : false} type='number' onChange={handlePayload} />
              <Input label='Email' leftIcon={<AiTwotoneMail />} id="email" value={Payload.email} val={Payload.email !== "" ? true : false} type='email' onChange={handlePayload} />
              <Button>Pay online</Button>
              <Flex justifyContent={"center"} mt="15px">
                    <Box w={"135px"} border="1px solid #808080"></Box>

                </Flex>
              <Flex justifyContent={"center"} mt="-43px">

                <Box textAlign={"center"} fontWeight={"400"} fontSize={"18px"} bg={"#fff"} w="45px" color="#242424" >or</Box>
              </Flex>

              <Button mt="10px">Pay From wallet</Button>
            </Stack>
          </div>
        </Box>
        </Flex>
    </MainLayout>
  )
}
