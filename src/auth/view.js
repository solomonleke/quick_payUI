import { useState } from "react";
import Header from "../Components/Header";
import img from "../assets/img/13151.jpg";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Input from "../Components/Input";
import { AiTwotoneMail } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import Button from "../Components/Button";
import { useNavigate } from "react-router-dom";


export default function View({
    isLoggedIn,
    Click,
}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [Loading, setLoading] = useState(false);

    const nav = useNavigate()
    console.log(process.env)
    return (
        <Box bgImage={'/signUpImg.jpg'} bgPos={"center"} bgSize={"cover"}>

            <div className="container">
                <Flex justifyContent={"center"} >
                    <Box w={["100%", "100%", "50%", "50%", "50%"]} my="32px">
                        <div className=" LoginCardX mt-4">
                            <Header title="Sign in to your vendor account " />
                            <Text mt="20px">Welcome back. Please input your Credentials</Text>

                            <form action="" onSubmit={(e) => { e.preventDefault(); setLoading(true); Click({ username, password }) }}>
                                <Stack spacing={"22px"} mt="32px">
                                    <Input isRequired={true} label='Username' leftIcon={<AiTwotoneMail />} id="username" value={username} val={username !== "" ? true : false} type='text' onChange={e => setUsername(e.target.value)} />

                                    <Box>
                                        <Input isRequired={true} label='Password' leftIcon={<MdPassword />} id='password' value={password} val={password !== "" ? true : false} type='password' onChange={e => setPassword(e.target.value)} />
                                        <Text color="blue.blue400" display={"flex"} mt="5px" justifyContent={"flex-end"} >Forget password?</Text>
                                    </Box>

                                    <Button isSubmit={true}   isLoading={Loading}>Sign in</Button>

                                </Stack>
                              

                                <span>{isLoggedIn}</span>

                            </form>

                            <Text fontWeight={"500"} color="blue.blue400" textAlign={"center"} mt="32px" >Don't have an account ? <Box as="span" onClick={() => nav("/vendor-signUp")} color="yellow.yellow500">Sign up</Box></Text>

                        </div>
                    </Box>

                </Flex>


            </div>
        </Box>


    )
}