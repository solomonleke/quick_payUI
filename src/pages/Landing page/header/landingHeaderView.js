import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/style.css";
import logo from "../../../assets/img/logo_black.png";
import { Link } from "react-router-dom";
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";
import user from "../../../assets/img/user.png";


export default function LandingHeaderView({Click,loading,loggedIn}) {
    // const  {REACT_APP_QUIKPAY_BASEHOST} = process.env
    const [number,setNumber]=useState('');
    let name = sessionStorage.getItem('vendor');
    let amount = sessionStorage.getItem('limit_amount');
    return(
        <div className="container-fluid top bg-light m-0 pb-5">
            <header className="container res">
                <nav className="row navbar navbar-expand-md navbar-dark">
                    <div className="col-7">
                        <img src={`./${process.env.REACT_APP_QUIKPAY_LOGO}`} alt="aple-logo" width="80px" srcset=""></img>
                    </div>
                    <button className="navbar-toggler col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-4 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav py-4">
                            <li className="nav-item "><a href="http://" className="new nav-link">Support</a></li>
                            <li className="nav-item "><a href="/" className="new rel nav-link">Buy Electricity</a></li>
                            {loggedIn?(
                                <li className="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={user} width="10%"></img> {name}
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><p class="dropdown-item" href="#">Balance: {amount}</p></li>
                                <li><button class="dropdown-item" onClick={()=>{sessionStorage.clear(); window.location.href="/login"}}>Logout</button></li>
                                </ul>
                                </li>):(<li className="nav-item "><Link to="/login" className="new rel nav-link">Vendor Login</Link></li>)}
                        </ul>
                    </div>
                </nav>
            </header>
            
            <div className="container mt-5 pt-3 text-white pb-5">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6 pb-5 pt-0">
                        <h3 className="pb-2 text-wrap"style={{color:"white"}}>Buy Energy with Quikpay</h3>
                        <form action="" onSubmit={(e)=>{e.preventDefault();Click(number)}}>
                            <div className="pb-3">
                                <h6 style={{color:"white"}}>Enter your account or meter number</h6>
                                <input type="text" className="form-control pb-3 w-50" onChange={e=>setNumber(e.target.value)}></input>
                            </div>
                            <button type="submit" className="btn w-50" style={{background:"#017cc2",color:"white",border:"#017cc2"}} >Buy Energy</button>
                            {loading?
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