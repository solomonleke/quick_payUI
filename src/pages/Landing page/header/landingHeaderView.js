import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/style.css";
import logo from "../../../assets/img/logo_black.png";
import { Link } from "react-router-dom";
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from "react";
import user from "../../../assets/img/user.png";
import OuterHeader from "../../../Layout/OuterHeader";


export default function LandingHeaderView({ Click, loading, loggedIn }) {
    // const  {REACT_APP_QUIKPAY_BASEHOST} = process.env
    const [number, setNumber] = useState('');
    
    return (
        <div className="top">
            <OuterHeader bg="transparent"/>


            <div className="container ">
                
                    <div className="col-lg-6 ">
                        <h3 className="headerText" >Buy energy with quickpay</h3>
                        <form action="" onSubmit={(e) => { e.preventDefault(); Click(number) }}>
                            <div className="pb-3">
                                <h6 className="subText">Enter your account / meter number</h6>
                                <input type="text" className="input" placeholder="e.g 1235*********" onChange={e => setNumber(e.target.value)}></input>
                            </div>
                            <button type="submit" className="headerBtn">Buy Energy/Pay your Bill</button>
                            {/* {loading &&

                                <Backdrop 
                                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                    open

                                >
                                    <CircularProgress color="inherit" />
                                </Backdrop>
                                
                            } */}
                        </form>
                        <div className="pt-2">
                            <p className="helpText">Need help? <a href="" className="anchorText">Kindly contact us</a></p>
                        </div>
                    </div>
                   
                
            </div>
        </div>
    )
}