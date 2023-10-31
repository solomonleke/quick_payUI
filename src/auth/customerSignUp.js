import React, { useState } from 'react'
import Heading from '../header/top'
import Footer from '../footer/footer'
import { Box, Flex, Img, Stack, Text } from '@chakra-ui/react'
import Header from '../Components/Header'
import Input from '../Components/Input'
import img from "../assets/img/13151.jpg";
import { AiFillPhone, AiOutlineUser, AiTwotoneMail } from 'react-icons/ai'
import { MdPassword } from 'react-icons/md'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import { FaAddressBook, FaUserAlt } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'


export default function CustomerSignUp() {

    const [Payload, setPayload] = useState({
        firstName: "",
        lastName: "",
        phoneNo: "",
        address: "",
        accountType: "",
        email: "",
        password: ""
    });

    const [Loading, setLoading] = useState(false);

    const nav = useNavigate()

    const handlePayload = (e) => {
        setPayload({ ...Payload, [e.target.id]: e.target.value })
    }

    const SignInCus = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)

            nav("/portal/dashboard")
        }, 3000);
    }
    return (
        <>
            <Heading />
            <Box bgImage={'/signUpImg.jpg'} bgPos={"center"} bgSize={"cover"}>
                <div className='container'>


                    <Flex justifyContent={"center"} >
                        <Box w={["100%", "100%", "50%", "50%", "50%"]} my="32px">

                            <div className="LoginCardX mt-4" >
                            <Header title={"sign up for a customer account"} />

                                <Text mt="20px">Create an account by inputting your Credentials</Text>

                                <Stack spacing={"22px"} mt="32px">

                                        <Input label='First name' leftIcon={<FaUserAlt />} id="firstName" value={Payload.firstName} val={Payload.firstName !== "" ? true : false} type='text' onChange={handlePayload} />
                                    <Input label='Last name' leftIcon={<FaUserAlt />} id="lastName" value={Payload.lastName} val={Payload.lastName !== "" ? true : false} type='text' onChange={handlePayload} />
                                    <Input label='Phone number' leftIcon={<BsTelephoneFill />} id="phoneNo" value={Payload.phoneNo} val={Payload.phoneNo !== "" ? true : false} type='text' onChange={handlePayload} />
                                    <Input label='Address' leftIcon={<FaAddressBook />} id="address" value={Payload.address} val={Payload.address !== "" ? true : false} type='text' onChange={handlePayload} />


                                    <Input label='Email address / username' leftIcon={<AiTwotoneMail />} id="email" value={Payload.email} val={Payload.email !== "" ? true : false} type='email' onChange={handlePayload} />

                                    <Box>
                                        <Input label='Password' leftIcon={<MdPassword />} id='password' value={Payload.password} val={Payload.password !== "" ? true : false} type='password' onChange={handlePayload} />
                                        <Text color="blue.blue400" display={"flex"} mt="5px" justifyContent={"flex-end"} >Forget password?</Text>
                                    </Box>

                                    <Button disabled={Payload.email !== " " && Payload.password !== " " ? false : true} onClick={SignInCus} isLoading={Loading}>Create account</Button>
                                </Stack>

                                <Text fontWeight={"500"} color="blue.blue400" textAlign={"center"} mt="32px" >Already have an account ? <Box as="span" onClick={() => nav("/cus-login")} color="yellow.yellow500">Sign in</Box></Text>
                            </div>

                        </Box>
                       
                    </Flex>
                </div>
            </Box>

            <Footer />
        </>
    )
}
