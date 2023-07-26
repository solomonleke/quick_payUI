import React, { useEffect, useState } from 'react'
import Heading from '../header/top'
import Footer from '../footer/footer'
import { Box, Flex, Img, Stack, Text, useDisclosure } from '@chakra-ui/react'
import Header from '../Components/Header'
import Input from '../Components/Input'
import img from "../assets/img/13151.jpg";
import { AiOutlineUser, AiTwotoneMail } from 'react-icons/ai'
import { MdPassword } from 'react-icons/md'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa'
import { PortalSignInApi, UserDetails } from '../Utils/ApiCalls'
import { showToast } from '../utility/tool'
import { isAuthenticated } from '../Authentication'
import OtpPop from '../Components/OtpPop'


export default function CustomerLogin() {

  const [Payload, setPayload] = useState({
    email: "",
    password: ""
  });

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [Loading, setLoading] = useState(false);

  const nav = useNavigate()

  const handlePayload = (e) => {
    setPayload({ ...Payload, [e.target.id]: e.target.value })
  }


  const getOnlineUserData = async () => {

    try {

      let result = await UserDetails();
      if (result.status === 200) {

        localStorage.setItem("user", JSON.stringify(result.data))
        showToast({
          message: 'Login successful. Welcome back',
          type: 'success'
        });

        setLoading(false)
        setTimeout(() => {

          nav("/portal/dashboard")
          window.location.reload(true);
        }, 2000);



      } else {

      }


    } catch (e) {

      showToast({
        message: e.message,
        type: 'error'
      });
      console.log('UserDetailsError:', e.message);
    }

  }
  const SignInCus = async () => {

    try {
      setLoading(true)
      let result = await PortalSignInApi(Payload);
      console.log("result", result);
      if (result.status === 200) {

        if (result.data.token_response === true) {
          // localStorage.setItem("CustomerToken", JSON.stringify(result.data.token))
          localStorage.setItem("tokenID", JSON.stringify(result.data.token))
          localStorage.setItem("otp", JSON.stringify(result.data.otp_secret_key))
          localStorage.setItem("otpDate", JSON.stringify(result.data.otp_valid_date))
          localStorage.setItem("OtpStatus", JSON.stringify(result.data.token_response))
          
          onOpen()
          setLoading(false)
          
        } else {
          
          localStorage.setItem("OtpStatus", JSON.stringify(result.data.token_response))
          localStorage.setItem("CustomerToken", JSON.stringify(result.data.token))

          setTimeout(() => {
            getOnlineUserData()

          }, 1000);

        }



      } else {
        console.log("errorMessage", result.response.data[0].Error)
        setLoading(false)

      }


    } catch (e) {

      setLoading(false)
      showToast({
        message: e.message,
        type: 'error'
      });
      console.error('Errorssss:', e.response.data.message);
    }
  }



  useEffect(() => {
    return () => {
      if (isAuthenticated()) {
        nav("/portal/dashboard")
      }
    };
  }, []);



  return (
    <>
      <Heading />
      <Box bgImage={'/signUpImg.jpg'} bgPos={"center"} bgSize={"cover"}>

        <div className='container'>
          <Flex justifyContent={"center"} >
            <Box w={["100%", "100%", "50%", "50%", "50%"]} my="32px">

              <div className=" LoginCardX mt-4" >
                <Header title={"sign in to your customer Portal"} />

                <Text mt="20px">Welcome back. Please input your Credentials cj</Text>
                <form onSubmit={SignInCus}>
                  <Stack spacing={"22px"} mt="32px">

                    <Input isRequired={true} label='Username' leftIcon={<FaUserAlt />} id="username" value={Payload.username} val={Payload.username !== "" ? true : false} type='text' onChange={handlePayload} />

                    <Box>
                      <Input isRequired={true} label='Password' leftIcon={<MdPassword />} id='password' value={Payload.password} val={Payload.password !== "" ? true : false} type='password' onChange={handlePayload} />
                      <Text color="blue.blue400" display={"flex"} mt="5px" justifyContent={"flex-end"} >Forget password?</Text>
                    </Box>

                    <Button isSubmit={true} disabled={Payload.email !== " " && Payload.password !== " " ? false : true} onClick={SignInCus} isLoading={Loading}>Sign in</Button>
                  </Stack>
                </form>


                <Text fontWeight={"500"} color="blue.blue400" textAlign={"center"} mt="32px" >Don't have an account ? <Box as="span" onClick={() => nav("/cus-signUp")} color="yellow.yellow500">Sign up</Box></Text>
              </div>

            </Box>

          </Flex>
        </div>
      </Box>


      <OtpPop isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      <Footer />
    </>
  )
}
