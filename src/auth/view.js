import { useState } from "react";
import Header from "../Components/Header";
import img from "../assets/img/13151.jpg";


export default function View({
    isLoggedIn,
    Click,
}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log(process.env)
    return (
        <div className="container">

            <Header title="Sign in to your account " mt="32px" />

            <div className="row">
                <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="LoginContent singleCard">
                        <form action="" onSubmit={(e) => { e.preventDefault(); Click({ username, password }) }}>
                            <div className="form-group">
                                <label className="mb-1"><strong>Username</strong></label>
                                <input type="Username" className="loginInput" placeholder="e.g username" onChange={e => setUsername(e.target.value)}></input>
                            </div>
                            <div className="form-group">
                                <label className="mb-1"><strong>Password</strong></label>
                                <input type="Password" placeholder="e.g *********" className="loginInput" onChange={e => setPassword(e.target.value)}></input>
                            </div>
                            <div className="form-row d-flex justify-content-between mt-4 mb-2">

                                <div className="form-group">
                                    <a href="">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="loginBtnP" type="submit"   >Sign me In</button>
                            </div>

                            <span>{isLoggedIn}</span>

                        </form>
                    </div>
                </div>

                <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <img src={img} width="100%" alt="choose" />
                </div>
            </div>
        </div>


    )
}