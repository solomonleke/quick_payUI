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

export default function Settings() {

    const [Image, setImage] = useState(null)
    const [TwoFactorAuth, setTwoFactorAuth] = useState("")

    console.log("TwoFactorAuth",TwoFactorAuth)

    const OnlineUSerDetails = JSON.parse(localStorage.getItem("user"))

    console.log("online user", OnlineUSerDetails)

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
        currentPassword: "password",
        newPassword: "",
        confirmNewPassword: "",

    });

    const handlePayload = (e) => {
        setPayload({ ...Payload, [e.target.id]: e.target.value })
    }
    const handlePayloadPassword = (e) => {
        setPasswordPayload({ ...Payload, [e.target.id]: e.target.value })
    }

    useEffect(() => {
        setPayload({
            firstName: OnlineUSerDetails?.name.split(" ")[0],
            lastName: OnlineUSerDetails?.name.split(" ")[1],
            image: Image,
            phone: OnlineUSerDetails?.phone_no
        })

    }, []);
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

                        <Stack spacing={"26px"} mt="32px">

                            <Input label='Current Password' leftIcon={<MdPassword />} id="currentPassword" value={PasswordPayload.currentPassword} val={PasswordPayload.currentPassword !== "" ? true : false} type='password' />
                            <Input label='New Password' leftIcon={<MdPassword />} id="newPassword" value={PasswordPayload.newPassword} val={PasswordPayload.newPassword !== "" ? true : false} type='password' onChange={handlePayloadPassword} />
                            <Input label='Confirm New Password' leftIcon={<MdPassword />} id="confirmNewPassword" value={PasswordPayload.confirmNewPassword} val={PasswordPayload.confirmNewPassword !== "" ? true : false} type='password' onChange={handlePayloadPassword} />
                            <Button>Change Password</Button>
                        </Stack>


                        <Header title={"Two factor authentication"} size='1.3em' mt='32px' />
                        <Text color="#757474" mt="5px" fontSize={"13px"} fontWeight={"400"}>Activate two factor authenticator</Text>

                        <Stack spacing={"26px"} mt="32px">

                            <FormControl display='flex' alignItems='center'>
                                <FormLabel htmlFor='twoFactor' mb='0'>
                                    Enable two factor authenticator?
                                </FormLabel>
                                <Switch id='twoFactor' value={TwoFactorAuth} onChange={(e)=>setTwoFactorAuth(e.target.value)} />
                            </FormControl>

                            <Button>Activate</Button>
                        </Stack>









                    </div>
                </Box>


            </Flex>

        </MainLayout>
    )
}
