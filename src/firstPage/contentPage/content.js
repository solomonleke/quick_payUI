import React,{useState} from 'react';
import '../../header/css/bootstrap.min.css';
import '../../header/css/pages.css';
import '../../header/css/home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Content(){
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
            console.log(error);
          });
    }
    
    return(
        <div className="page-content-wrapper ">

            <div className="content ">
                <div className="social-wrapper">
                    <div className="social " data-pages="social">

                        <div className="jumbotron" data-pages="parallax" data-social="cover">
                            <div className="cover-photo">
                                <div className="vertical-middle">
                                    <div className="container clearfix">

                                        <div className="clearfix center divcenter" style={{maxWidth: "700px"}}>
                                            <div className="emphasis-title">

                                                <h1 className="text-white"
                                                    style={{color: "#FFF",fontWeight: "500"}}> Bill Payment Made Awesome.
                                                </h1>
                                                <h5 className="text-white h5 m-b-30 m-t-30"
                                                    style={{fontWeight: "300", opacity: ".7", color: "#FFF", textShadow: "0 -4px 20px rgba(0, 0, 0, .25)"}}> Quickpay provides seamless payment solution<br/>for all APLE customers

                                                </h5>
                                            </div>
                                            <div className="card social-card  scol-1 divcenter p-l-20 p-r-20 p-b-20"
                                                data-social="item">
                                                <form className="simform no-margin" autocomplete="off" data-social="status" onSubmit={(e)=>{e.preventDefault();Click()}}>
                                                    <div className=" row status-form-inner" >
                                                        <ol className="questions col-md-8 col-sm-12">
                                                            <li className="current">                                                   <span>
                                                            <label className="m-b-0 m-t-10" for="queryString">What&#x27;s your meter number or account number?</label>
                                                        </span>
                                                                <input id="queryString" name="queryString" type="text" onChange={e=>setNumber(e.target.value)}/>
                                                                <span>{isCorrect}</span>
                                                            </li>
                                                        </ol>

                                                        <button className=" col-md-4 submit next show  btn btn-danger m-t-20 p-l-30 p-r-30 "
                                                            type="submit" style={{zIndex: "2"}}> Search
                                                        </button>
                                                        <div className="controls">
                                                            <div className="progress"></div>
                                                            <span className="error-message fs-12 "
                                                                style={{position: "relative",marginTop: "30px"}}></span>
                                                        </div>

                                                    </div>
                                                </form>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>


            
        </div>
    )
}

export default Content;