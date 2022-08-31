import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/style.css";
import logo from "../../../assets/img/logo_black.png";
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function LandingHeader(){
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
            alert(error.response.data.message)
            console.log(error);
          });
    }
    return(
        <div className="container-fluid top bg-light m-0 pb-5">
            <header className="container res">
                <nav className="row navbar navbar-expand-md navbar-dark">
                    <div className="col-7">
                        <img src={logo} alt="aple-logo" width="80px" srcset=""></img>
                    </div>
                    <button className="navbar-toggler col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-4 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav py-4">
                            <li className="nav-item "><a href="http://" className="new nav-link">Support</a></li>
                            <li className="nav-item "><a href="http://" className="new rel nav-link">Buy Electricity</a></li>
                            <li className="nav-item "><Link to="/login" className="new rel nav-link">Vendor Login</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
            
            <div className="container mt-5 pt-3 text-white pb-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6 pb-5 pt-0">
                        <h3 className="pb-2 text-wrap"style={{color:"white"}}>Buy Energy with Quikpay</h3>
                        <form action="" onSubmit={(e)=>{e.preventDefault();Click()}}>
                            <div className="pb-3">
                                <h6 style={{color:"white"}}>Enter your account or meter number</h6>
                                <input type="text" className="form-control pb-3 w-50" onChange={e=>setNumber(e.target.value)}></input>
                            </div>
                            <button type="submit" className="btn w-50" style={{background:"#017cc2",color:"white",border:"#017cc2"}} >Buy Energy</button>
                        </form>
                        <div className="pt-2">
                            <p>Need help? <a href="" className="text-white">Kindly contact us</a></p>
                        </div>
                    </div>
                    <div className="col-sm-4 text-wrap pt-5">
                        <h5 style={{color:"white"}}>How to use Quikpay</h5>
                        <p>1. Type your account or meter number into the white box</p>
                        <p>2. View your account information to ascertain if your account details are correct
                            and please kindly reach out to us if there are any discrepancies
                        </p>
                        <p>3. Kindly type the amount you want to purchase and pick how you would like to pay</p>
                        <p>4. Your payment will be confirmed and you'll get a receipt afterwards</p>
                    </div>
                </div>
            </div>
        </div>
    )
}