import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/style.css";
import logo from "../../../assets/img/logo_black.png";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

export default function AccountHeader(){
    const [isLoggedIn,setisLoggedIn]=useState(false);
    let token=sessionStorage.getItem('token');
    useEffect(() => {
        if (token) {
            setisLoggedIn(true);
        }
    }, []);
    
    return(
        <div class="container-fluid bg-dark m-0 ">
        <header class="container">
            <nav class="row navbar navbar-expand-md navbar-dark">
                <div class="col-7">
                    <img src={logo} alt="aple-logo" width="80px" srcset=""></img>
                </div>
                <button class="navbar-toggler col-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="col-4 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav py-4">
                        <li class="nav-item "><a href="http://" class="new nav-link">Support</a></li>
                        <li class="nav-item "><Link to="/" class="new rel nav-link">Buy Electricity</Link></li>
                        <li className="nav-item ">{isLoggedIn?(""):(<Link to="/login" className="new rel nav-link">Vendor Login</Link>)}</li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
    )
}