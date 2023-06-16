import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/style.css";
import "../../../assets/css/boxicons.min.css";
import "../../../assets/css/flaticon.css";
import img from "../../../assets/img/13151.jpg";
import React, { useState } from "react";
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Header from "../../../Components/Header";
import WhyChooseCard from "../../../Components/WhyChooseCard";
import { FaHashtag, FaHeadphones, FaMoneyCheck } from "react-icons/fa";
import { AiFillBank } from "react-icons/ai";
import { BsFillClockFill } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";

export default function LandingView({ Click, loading }) {
    const [number, setNumber] = useState('');
    return (
        <>
            {/* why choose quick pay*/}
            <div className="container ">
                <section className="why ">
                    <Header title={" why choose quickpay"} />

                    <div className="row pt-64">
                        <WhyChooseCard
                            icon={<FaMoneyCheck />}
                            title={'payments'}
                            body="Simplifies end-to-end workflow 
                            for your business payout processes; 
                            freeing up resources for strategic 
                            business engagements"
                        />
                        <WhyChooseCard
                            icon={<AiFillBank />}
                            title={'Pay with Bank Transfers'}
                            body="Make payments via our Bank Transfer option
                             and get value immedialtely."
                        />
                        <WhyChooseCard
                            icon={<FaHashtag />}
                            title={'pay with USSD'}
                            body="No internet? Buy Electricity by dialing
                             *402*00009548*amount# on any kind of mobile device"
                        />
                        <WhyChooseCard
                            icon={<BsFillClockFill />}
                            title={'set reminders'}
                            body="Let us remind you to Buy Electricity.
                             Set a reminder date and we wont forget."
                        />
                        <WhyChooseCard
                            icon={<GiPadlock />}
                            title={'security'}
                            body="We are the official platform for purchasing 
                            power in APLE,
                             so be rest assured your account is safe."
                        />
                        <WhyChooseCard
                            icon={<FaHeadphones />}
                            title={'24/7 Customer Support'}
                            body="Enjoy our Customer Service and have your
                             issues resolved anytime- day and night."
                        />

                    </div>
                </section>
            </div>
            {/* closing why choose quick pay*/}

            {/* how to use quick pay*/}
            <div className="container ">
                <section className="how">
                    <Header title={" how to use quickpay"} />

                    <div className="row pt-64">
                        <div className="col-lg-6 d-flex">
                        <img src={img} width="100%" alt="choose" />
                        </div>
                        <div className="col-lg-6 d-flex">
                            <div className="howCard">

                            <h2 className="instruction">Instructions</h2>

                                <p className="howList">1. Type your account or meter number into the white box</p>
                                <p className="howList">2. View your account information to ascertain if your account details are correct
                                    and please kindly reach out to us if there are any discrepancies
                                </p>
                                <p className="howList">3. Kindly type the amount you want to purchase and pick how you would like to pay</p>
                                <p className="howList">4. Your payment will be confirmed and you'll get a receipt afterwards</p>

                            </div>
                        </div>
                    </div>


                </section>
            </div>
            {/* Closing how to use quick pay */}
            {/* <div className="choose-area bg-light py-5" id="choose">
                <div className="container py-5 ">
                    <div className="section-title justify-content-center align-items-center px-5">
                        <h4 className="text-center ">Why Choose Quikpay</h4>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-img">
                                <img src={img} width="100%" alt="choose" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-content">
                                <div className="faq-accordion">
                                    <ul className="accordion">
                                        <li className="accordion-item">
                                            <div className="icon">
                                                <i className="flaticon-friends"></i>
                                            </div>
                                            <a className="accordion-title active" href="javascript:void(0)">
                                                <i className="bx bx-plus"></i> Official platform for purchasing power for {process.env.REACT_APP_QUIKPAY_DESC}
                                            </a>
                                            <p className="accordion-content show">
                                                We are the official platform for purchasing power in {process.env.REACT_APP_QUIKPAY_DESC}, so be rest assured your account is safe.
                                            </p>
                                        </li>

                                        <li className="accordion-item">
                                            <div className="icon">
                                                <i className="flaticon-chip"></i>
                                            </div>
                                            <a className="accordion-title" href="javascript:void(0)">
                                                <i className="bx bx-plus"></i>Pay with bank transfer
                                            </a>
                                            <p className="accordion-content">
                                                You have the option to pay via bank transfer.
                                            </p>
                                        </li>

                                        <li className="accordion-item">
                                            <div className="icon">
                                                <i className="flaticon-like"></i>
                                            </div>
                                            <a className="accordion-title" href="javascript:void(0)">
                                                <i className="bx bx-plus"></i>Customer support
                                            </a>
                                            <p className="accordion-content">
                                                We provide 24/7 customer support.
                                            </p>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h5 className="justify-content-center" style={{ color: "white" }}>Buy Energy instantly with Quikpay</h5>
                            <p>Enter your account number / meter number</p>
                        </div>

                        <div className="col-lg-6">
                            <form action="" onSubmit={(e) => { e.preventDefault(); Click(number) }}>
                                <div className="pb-2">
                                    <input type="text" className="footerInput" placeholder="Enter your account number or meter number" onChange={e => setNumber(e.target.value)}></input>
                                </div>
                                <button className="footerBtn" type="submit" >Search</button>
                                {loading ?
                                    <Backdrop
                                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                        open

                                    >
                                        <CircularProgress color="inherit" />
                                    </Backdrop>
                                    :
                                    ""
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}