import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import user from "../assets/img/user.png"
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineCaretDown, AiOutlineCaretUp, AiOutlineClose } from 'react-icons/ai';
import Button from '../Components/Button';
import { Box, Fade, Flex, useDisclosure } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
export default function OuterHeader({ bg = "#242424" }) {

    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [OpenMenu, setOpenMenu] = useState(false);
    let token = sessionStorage.getItem('token');
    let name = sessionStorage.getItem('vendor');
    let amount = sessionStorage.getItem('limit_amount');


    const { isOpen, onToggle } = useDisclosure()


    useEffect(() => {
        if (token) {
            setisLoggedIn(true);
        }
    }, []);
    return (
        <>
            {
                OpenMenu && (
                    <div className='drawer' >
                        <div className='sideBar'>
                            <div className='sideImg'>
                                <img src={`./${process.env.REACT_APP_QUIKPAY_LOGO}`} alt="aple-logo" srcset=""></img>
                            </div>
                            <div className='pt-64'>

                                <p className='list'>#2<a href=''>Buy Electricity</a></p>
                                <p className='list'>#3<a href=''>About us</a></p>
                                <p className='list'>#1<a href=''>Support</a></p>
                                <p className='list'>#4<a href=''>Contact us</a></p>

                                {
                                    isLoggedIn ? (
                                        <Box mr='20px' pos="relative">
                                            <Button fw='500' leftIcon={<FaUserCircle />} rightIcon={isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />} py="25px" mt={"20px"} px='30px' w={['100%','100%','100%','auto','auto']} onClick={onToggle}>{name}</Button>
                                            <Fade in={isOpen}>
                                                <Box rounded="8" top="72px" zIndex={"2"} p="10px" w="100%" bg="#fff" pos={"absolute"}>
                                                    <li><p class="dropdown-item" href="#">Balance: {amount}</p></li>
                                                    <li><button class="dropdown-item" onClick={() => { sessionStorage.clear(); window.location.href = "/login" }}>Logout</button></li>
                                                </Box>
                                            </Fade>
                                        </Box>
                                    ) : (
                                        <Button fw='500' mr='20px' link="/login" py="25px" mt={"20px"} px='30px'  w={['95%','95%','95%','auto','auto']}>Vendor Login</Button>
                                    )
                                }

                                <Button fw='500' mt="20px" link="/cus-login" py="25px"  px='30px'  w={['95%','95%','95%','auto','auto']}>Customer Portal</Button>

                            </div>

                        </div>
                    </div>
                )
            }

            <div style={{ background: bg, paddingTop: "10px" }}>

                <div className='container'>
                    <div className='web'>
                        <Flex justifyContent={"space-between"} pt="20px">


                            <div className=''>
                                <a href='/'>

                                    <img src={`./${process.env.REACT_APP_QUIKPAY_LOGO}`} alt="aple-logo" width="60px" srcset=""></img>
                                </a>

                            </div>
                            <div className=''>
                                <ul className='nav justify-content-end d-flex align-items-center'>
                                    <li class="nav-item "><Link to="/" class="new rel nav-link">Buy Electricity</Link></li>
                                    <li class="nav-item "><a href="http://" class="new nav-link">Support</a></li>

                                    {isLoggedIn ? (
                                        <Box mr='20px'>
                                            <Button fw='500' leftIcon={<FaUserCircle />} rightIcon={isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />} py="25px" mt={"0"} px='30px' w='auto' onClick={onToggle}>{name}</Button>
                                            <Fade in={isOpen}>
                                                <Box rounded="8" top="72px" p="10px" w="190px" bg="#fff" pos={"absolute"}>
                                                    <li><p class="dropdown-item" href="#">Balance: {amount}</p></li>
                                                    <li><button class="dropdown-item" onClick={() => { sessionStorage.clear(); window.location.href = "/login" }}>Logout</button></li>
                                                </Box>
                                            </Fade>
                                        </Box>


                                    ) : (<Button fw='500' mr='20px' link="/login" py="25px" mt={"0"} px='30px' w='auto'>Vendor Login</Button>
                                    )}
                                    <Button fw='500' link="/cus-login" py="25px" mt={"0"} px='30px' w='auto'>Customer Portal</Button>



                                </ul>

                            </div>

                        </Flex>
                    </div>
                    <div className='navFlex mobile'>
                        <div className='MobileLogo'>
                            <img src={`./${process.env.REACT_APP_QUIKPAY_LOGO}`} alt="aple-logo" width="60px" srcset=""></img>
                        </div>
                        <div className='MobileIcon' onClick={() => setOpenMenu(!OpenMenu)}>
                            {
                                OpenMenu === false ? (

                                    <HiOutlineMenuAlt3 />
                                ) : (
                                    <AiOutlineClose />
                                )
                            }
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
