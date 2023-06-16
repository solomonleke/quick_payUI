import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import user from "../assets/img/user.png"
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
export default function OuterHeader({ bg = "#242424" }) {

    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [OpenMenu, setOpenMenu] = useState(false);
    let token = sessionStorage.getItem('token');
    let name = sessionStorage.getItem('vendor');
    let amount = sessionStorage.getItem('limit_amount');

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
                                    <li className="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle new avatarBoxHeader" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={user} width="10%"></img> {name}
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><p class="dropdown-item" href="#">Balance: {amount}</p></li>
                                        <li><button class="dropdown-item" onClick={() => { sessionStorage.clear(); window.location.href = "/login" }}>Logout</button></li>
                                    </ul>
                                </li>    
                            ):(
                                <li className="nav-item "><Link to="/login" className="new loginBtn nav-link">Vendor Login</Link></li>
                            )
                            }

                            <li className="nav-item mt-4"><Link to="/login" className="new loginBtnP nav-link">Customer Portal</Link></li>

                    </div>

                        </div>
                    </div>
                )
            }

            <div style={{ background: bg, paddingTop: "10px" }}>

                <div className='container'>
                    <div className='row web'>
                        <div className='col-lg-4'>
                        <a href='/'>

                            <img src={`./${process.env.REACT_APP_QUIKPAY_LOGO}`} alt="aple-logo" width="60px" srcset=""></img>
                        </a>

                        </div>
                        <div className='col-lg-8'>
                            <ul className='nav justify-content-end d-flex align-items-center'>
                                <li class="nav-item "><Link to="/" class="new rel nav-link">Buy Electricity</Link></li>
                                <li class="nav-item "><a href="http://" class="new nav-link">Support</a></li>

                                {isLoggedIn ? (<li className="nav-item dropdown flex">
                                    <a class="nav-link dropdown-toggle new avatarBoxHeader" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={user} width="10%"></img> {name}
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><p class="dropdown-item" href="#">Balance: {amount}</p></li>
                                        <li><button class="dropdown-item" onClick={() => { sessionStorage.clear(); window.location.href = "/login" }}>Logout</button></li>
                                    </ul>
                                </li>) : (<li className="nav-item "><Link to="/login" className="new loginBtn nav-link">Vendor Login</Link></li>)}
                                <li className="nav-item "><Link to="/dashboard" className="new loginBtnP nav-link">Customer Portal</Link></li>


                            </ul>
                        </div>
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
