import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/style.css";
import "../../../assets/css/boxicons.min.css";
import "../../../assets/css/flaticon.css";
import img from "../../../assets/img/13151.jpg";
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LandingContent(){
    const [number,setNumber]=useState('');
    const [isCorrect,setisCorrect]=useState('');
    const navigate = useNavigate()
    function Click(){
        let token=sessionStorage.getItem('token');
        if(!token){token=''}
        console.log(token)
        let data = JSON.stringify({
            "token": token,
            "acc_no": number
          });

          var config = {
            method: 'post',
            url: 'http://164.92.155.135:7101/details',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
        
          axios(config)
          .then(function (response) {
              if(response.data.status===true){
                console.log(response.data.data.name)
                let result = response.data.data
                sessionStorage.setItem('name', result.name);
                sessionStorage.setItem('category', result.category);
                sessionStorage.setItem('tariff_name', result.tariff_name);
                sessionStorage.setItem('tariff', result.tariff.toFixed(2));
                sessionStorage.setItem('vat', result.vat.toFixed(2));
                sessionStorage.setItem('phone_no', result.phone_no);
                sessionStorage.setItem('address', result.street);
                sessionStorage.setItem('meter_no', result.meter_no);
                sessionStorage.setItem('old_acc_no', result.old_acc_no);
                sessionStorage.setItem('transformer_id', result.transformer_id);
                sessionStorage.setItem('feeder_id', result.feeder_id);
                sessionStorage.setItem('account', result.account);
                sessionStorage.setItem('billed', result.billed.toFixed(2));
                sessionStorage.setItem('credit', result.credit.toFixed(2));
                sessionStorage.setItem('Total',(result.credit+result.billed).toFixed(2))

                navigate("/details")
              }
              setisCorrect("Invalid Account/Meter number !")
          //   console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            alert(response.data.message)
            console.log(error);
          });
    }
    return(
        <>
            <div className="choose-area bg-light py-5" id="choose">
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
                                            <i className="bx bx-plus"></i> Official platform for purchasing power for APLE
                                        </a>
                                        <p className="accordion-content show">
                                            We are the official platform for purchasing power in APLE, so be rest assured your account is safe.
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
        </div>

        <div className="container-fluid m-0 p-3 bg-dark">
            <div className="container p-5">
                <div className="row m-0 justify-content-center">
                    <div className="col bg-dark text-white justify-content-center">
                        <h5 className="justify-content-center" style={{color:"white"}}>Buy Energy instantly with Quikpay</h5>
                        <p>Enter your account number or meter number</p>
                    </div>
        
                    <div className="col bg-dark">
                        <form action="" onSubmit={(e)=>{e.preventDefault();Click()}}>
                            <div className="pb-2">
                                <input type="text" className="form-control w-70" placeholder="Enter your account number or meter number" onChange={e=>setNumber(e.target.value)}></input>
                            </div>
                            <button className="btn btn-success w-50" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}