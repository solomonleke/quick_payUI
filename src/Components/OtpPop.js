import React, { useEffect, useRef } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Box,

} from '@chakra-ui/react'
import Input from './Input';
import { useState } from 'react';
import { FaUser, FaUserAlt } from "react-icons/fa";
import Button from './Button';
import { CreateCategory, CreateStore, CreateUser, FundWalletAPI, ResendOtpAPI, UpdateCategoryApi, UpdateStoreApi, UserDetails, VerifyOtpAPI } from '../Utils/ApiCalls';
import { AiOutlineFieldNumber, AiTwotoneMail, AiFillShopping, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../utility/tool';




export default function OtpPop({ isOpen, onOpen, onClose }) {

    const [Otp, setOtp] = useState("")
    const [Disable, setDisable] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [ResendLoading, setResendLoading] = useState(false)

    const [timer, setTimer] = useState('00:00:00');

    const id = localStorage.getItem("tokenID")
    const otp_secret_key = JSON.parse(localStorage.getItem("otp"))
    const otp_valid_date = JSON.parse(localStorage.getItem("otpDate"))


    const nav = useNavigate()

    const handleOtp = (e)=>{
        setOtp(e.target.value)

      
    }

    

  
    const VerifyOtp = async () => {
        setLoading(true)
        try {

            let result = await VerifyOtpAPI({
                id: id,
                otpcode: Otp,
                otp_secret_key: otp_secret_key,
                otp_valid_date: otp_valid_date

            });
            
            console.log("VerifyOtp", result);


            if (result.status === 200) {

                setLoading(false)
                showToast({
                    message: "OTP Verified successfully",
                    type: 'success'
                });

                localStorage.setItem("CustomerToken", JSON.stringify(result.data.token))

                setTimeout(() => {
                    getOnlineUserData()

                }, 1000);
             
                setOtp("")
                
            }else{
                setOtp("")
                setLoading(false)

            }


        } catch (e) {

            showToast({
                message: e.message,
                type: 'error'
            });
            setOtp("")
            setLoading(false)


            console.error('VerifyOtp:', e.message);
        }

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
                setTimeout(() => {

                    nav("/portal/dashboard")
                    window.location.reload(true);
                }, 3000);



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


    const ResendOtp = async () => {
        setResendLoading(true)
        try {

            let result = await ResendOtpAPI({
                id: id
            });

            console.log('ResendOtp:', result);

            if (result.status === 200) {
                localStorage.setItem("otp", JSON.stringify(result.data.otp_secret_key))
                localStorage.setItem("otpDate", JSON.stringify(result.data.otp_valid_date))
      
                showToast({
                    message: "An OTP as been sent successfully",
                    type: 'success'
                });
                setResendLoading(false)
              
            } else {

            }


        } catch (e) {

            showToast({
                message: e.message,
                type: 'error'
            });
            console.log('ResendOtp:', e.message);
        }

    }
    return (


        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <Box mx="10%" mb="32px">
                    <Text mt="32px" textAlign={"center"} fontWeight={"600"} fontSize={"18px"}>Enter OTP</Text>
                    <Text mt="5px" textAlign={"center"} color="blue.blue600" fontWeight={"600"} fontSize={"13px"}>An otp has been sent to your email, Kindly enter the OTP Sent </Text>

                    <Input label='OTP' type="number" isDisabled={ Otp.length > 5 ? true: false} onChange={handleOtp} value={Otp} val={Otp !== "" ? true : false} />

        {
            Otp.length > 5 && (

                    <Button mt="10px" isDisabled={true} isLoading={Loading} onClick={VerifyOtp}>Submit</Button>
            )
        }


                    <Box mt="15px" display={"flex"} justifyContent={"flex-end"}>
                        <Box bg="yellow.yellow500" px="10px" py="5px" rounded="8px" cursor={"pointer"} fontWeight={"500"} color="#fff" as="span" onClick={ResendOtp}>{ResendLoading ? "Resending...": "Resend"}</Box>
                    </Box>
                </Box>
            </ModalContent>
        </Modal>

    )
}
