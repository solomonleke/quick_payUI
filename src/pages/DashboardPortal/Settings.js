import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import { Avatar, Box, Flex, FormControl, FormLabel, HStack, Stack, Switch, Text } from '@chakra-ui/react'
import { IoMdSettings } from 'react-icons/io'
import Header from '../../Components/Header'
import Input from '../../Components/Input'
import { BsFillCloudUploadFill, BsTelephoneFill } from 'react-icons/bs'
import { FaPen, FaUserAlt } from 'react-icons/fa'
import { AiTwotoneMail } from 'react-icons/ai'
import Button from '../../Components/Button'
import { MdPassword } from 'react-icons/md'
import ProgressBar from '../../Components/ProgressBar'
import { ChangePasswordAPI, TwoFactorToggleApi } from '../../Utils/ApiCalls'
import { showToast } from '../../utility/tool'

export default function Settings() {

    const [Image, setImage] = useState(null)
    const [Loading, setLoading] = useState(false)
    const [LoadingOTP, setLoadingOTP] = useState(false)
    const [Match, setMatch] = useState(false)
    const [TwoFactorAuth, setTwoFactorAuth] = useState(false)


    const OnlineUSerDetails = JSON.parse(localStorage.getItem("user"))
    const onlineUserToken = JSON.parse(localStorage.getItem("CustomerToken"))
    const OtpStatus = JSON.parse(localStorage.getItem("OtpStatus"))


    console.log("online user", OnlineUSerDetails)
    console.log("OtpStatus", OtpStatus)

    const handleImg = (e) => {

        setImage(null)
        let file = e.target.files[0]
        console.log("file", file.name)
        setImage(file)

        //     const formData = new FormData();
        //     formData.append("image", Image);
        //    console.log("img",  formData.get("image"))

    }

    const [Payload, setPayload] = useState({
        firstName: "",
        lastName: "",
        image: Image,
        phone: ""
    });

    const [PasswordPayload, setPasswordPayload] = useState({
        password: "",
        new_password: "",
        confirmNewPassword: "",

    });

    const handlePayload = (e) => {
        setPayload({ ...Payload, [e.target.id]: e.target.value })
    }
    const handlePayloadPassword = (e) => {
        setPasswordPayload({ ...PasswordPayload, [e.target.id]: e.target.value })
    }

    const UpdatePassword = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            let result = await ChangePasswordAPI({
                token: onlineUserToken,
                password: PasswordPayload.password,
                new_password: PasswordPayload.new_password
            });
            console.log("UpdatePassword", result);

            if (result.status === 200) {

                showToast({
                    message: "Password Updated Successfully",
                    type: 'success'
                });
                setLoading(false)


                setPasswordPayload({
                    password: "",
                    new_password: "",
                    confirmNewPassword: "",

                })

            }


        } catch (e) {

            showToast({
                message: e.message,
                type: 'error'
            });
            setLoading(false)



            console.error('password update:', e.message);
        }

    }


    const checkRetypePassword = () => {
        if (PasswordPayload.new_password === PasswordPayload.confirmNewPassword)
            setMatch(false)
        else {

            setMatch(true)
        }

    }

    const handleTwoFactor =(e)=> {

        setTwoFactorAuth(e.target.checked)

    }
    console.log("TwoFactorAuth", TwoFactorAuth)

    const Activate = async ()=>{

        try {
            setLoadingOTP(true)
            let result = await TwoFactorToggleApi({
                token: onlineUserToken,
                otpkey: `${TwoFactorAuth}`
            });
            console.log("TwoFactorToggleApi", result);

            if (result.status === 200) {

                showToast({
                    message: "OTP Updated Successfully",
                    type: 'success'
                });

                // localStorage.setItem("OtpStatus", JSON.stringify(result.data[0].token_response))

                setLoadingOTP(false)



            }


        } catch (e) {

            showToast({
                message: e.message,
                type: 'error'
            });
            setLoadingOTP(false)




          
        }

    }


    useEffect(() => {
        setPayload({
            firstName: OnlineUSerDetails?.name.split(" ")[0],
            lastName: OnlineUSerDetails?.name.split(" ")[1],
            image: Image,
            phone: OnlineUSerDetails?.phone_no
        })

        setTwoFactorAuth(OtpStatus)

        checkRetypePassword()

    }, [PasswordPayload.confirmNewPassword]);
    return (
        <MainLayout>
            <Seo title='Settings' description='APLE Settings' />

            <HStack fontSize={"2em"} >
                <Box color="yellow.500"><IoMdSettings /></Box>
                <Box color="#757474" fontWeight={"600"}>Settings</Box>
            </HStack>

            <Flex mt="32px" justifyContent={"space-between"} flexWrap={"wrap"}>
                <Box w={["100%", "100%", "48%", "48%", "48%"]} mt="12px">
                    <div className='LoginCardX'>
                        <Header title={"account settings"} size='1.3em' />
                        <Text color="#757474" mt="5px" fontSize={"13px"} fontWeight={"400"}>Profile picture, personal information & phone number</Text>


                        <Text color="#242424" mt="22px" textTransform={"capitalize"} fontSize={"16px"} fontWeight={"600"}>Profile picture</Text>

                        <Box pos={"relative"} mt="22px">
                            <label for="upload">
                                <Avatar pos={"relative"} name={`${OnlineUSerDetails.name}`} src={Image?.name || `https://bit.ly/broken-link`} size='2xl'>
                                    <Box color={"#242424"} pos={"absolute"} right={"-18px"} top={"70px"}>
                                        <Input onChange={handleImg} type="file" id="upload" hidden />
                                        <Box bgColor={"#ddd"} color={"yellow.500"} rounded="100" display="flex" justifyContent={"center"} cursor={"pointer"} alignItems={"center"} w="30px" h="30px">
                                            <label className='label2' for="upload"><FaPen /></label>
                                        </Box>
                                    </Box>
                                </Avatar>
                            </label>
                        </Box>



                        <Text color="#242424" mt="32px" textTransform={"capitalize"} fontSize={"16px"} fontWeight={"600"}>personal information & phone number</Text>
                        <Text color="#757474" mt="-10px" fontWeight={"400"} fontSize={"13px"}>Update your profile name. You can also edit your phone number. Click on the 'Save Changes' when done</Text>

                        <Stack spacing={"26px"} mt="32px">

                            <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
                                <Box w={["100%", "100%", "48%", "48%", "48%"]}>
                                    <Input label='First name' leftIcon={<FaUserAlt />} id="firstName" value={Payload.firstName} val={Payload.firstName !== "" ? true : false} type='text' onChange={handlePayload} />

                                </Box>
                                <Box w={["100%", "100%", "48%", "48%", "48%"]} mt={["32px", "32px", "0px", "0px", "0"]}>

                                    <Input label='Last name' leftIcon={<FaUserAlt />} id="lastName" value={Payload.lastName} val={Payload.lastName !== "" ? true : false} type='text' onChange={handlePayload} />
                                </Box>


                            </Flex>
                            {/* <Input label='Email' leftIcon={<AiTwotoneMail />} id="email" value={Payload.email} val={Payload.email !== "" ? true : false} type='email' onChange={handlePayload} /> */}
                            <Input label='Phone No' leftIcon={<BsTelephoneFill />} id="phone" value={Payload.phone} val={Payload.phone !== "" ? true : false} type='number' onChange={handlePayload} />
                            <Button>Save Changes</Button>
                        </Stack>







                    </div>
                </Box>
                <Box w={["100%", "100%", "48%", "48%", "48%"]} mt="12px">
                    <div className='LoginCardX'>
                        <Header title={"Security settings"} size='1.3em' />
                        <Text color="#757474" mt="5px" fontSize={"13px"} fontWeight={"400"}>Change your password</Text>


                        <Text color="#242424" mt="22px" textTransform={"capitalize"} fontSize={"16px"} fontWeight={"600"}>Change password</Text>
                        <form onSubmit={UpdatePassword}>
                            <Stack spacing={"26px"} mt="32px">

                                <Input isRequired={true} label='Current Password' leftIcon={<MdPassword />} id="password" value={PasswordPayload.password} val={PasswordPayload.password !== "" ? true : false} type='password' onChange={handlePayloadPassword} />
                                <div>
                                    <Input isRequired={true} label='New Password' leftIcon={<MdPassword />} id="new_password" value={PasswordPayload.new_password} val={PasswordPayload.new_password !== "" ? true : false} type='password' onChange={handlePayloadPassword} />
                                    <ProgressBar password={PasswordPayload.new_password} />

                                </div>
                                <Input borderColor={Match ? "#E02828" : "#017CC2"} isRequired={true} label='Confirm New Password' leftIcon={<MdPassword />} id="confirmNewPassword" value={PasswordPayload.confirmNewPassword} val={PasswordPayload.confirmNewPassword !== "" ? true : false} type='password' onChange={handlePayloadPassword} />
                                <Text color="red" fontSize={"12px"} pos="relative" textAlign={"center"} top="-10px">{Match && "*Password does not match*"}</Text>

                               {
                                 Match === false && (
                                    <Button isSubmit={true} isLoading={Loading} >Change Password</Button>
                                 )
                               }
                            </Stack>
                        </form>

                        <Header title={"Two factor authentication"} size='1.3em' mt='32px' />
                        <Text color="#757474" mt="5px" fontSize={"13px"} fontWeight={"400"}>Activate two factor authenticator</Text>

                        <Stack spacing={"26px"} mt="32px">

                            <FormControl display='flex' alignItems='center'>
                                <FormLabel htmlFor='twoFactor' mb='0'>
                                    Enable two factor authenticator?
                                </FormLabel>
                                <Switch id='twoFactor' isChecked={TwoFactorAuth} checked={TwoFactorAuth} onChange={handleTwoFactor} />
                            </FormControl>

                                {
                                    TwoFactorAuth ?  <Button onClick={Activate} isLoading={LoadingOTP}>Activate</Button>: <Button isLoading={LoadingOTP} onClick={Activate}>Deactivate</Button>
                                }
                           
                        </Stack>









                    </div>
                </Box>


            </Flex>

        </MainLayout>
    )
}
