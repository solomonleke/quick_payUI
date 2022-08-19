import '../../header/css/bootstrap.min.css';
import '../../header/css/pages.css';
import '../../header/css/home.css';
import logo from '../../header/logo_black.png';

function Content2(){
    return(
    <div className="page-content-wrapper ">

        <div className="content " id="formController">

            <div className=" container-fluid   container-fixed-lg">

                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/energypay/">Home</a></li>
                    <li className="breadcrumb-item active">Payment</li>
                </ol>
                {/* <div class="modal fade fill-in" id="paymentModal" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog ">
                        <div class="modal-content">

                            <div class="modal-body">
                                <iframe id="paymentFrame" style="height: 100vh;width: 100%"
                                        frameborder=0 ALLOWTRANSPARENCY="true">
                                    <body>

                                    </body>
                                </iframe>
                            </div>
                            <div class="modal-footer">
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="modal fade fill-up"  data-backdrop="static" data-keyboard="false"  id="paymentError" tabindex="-1" role="dialog"
                     aria-hidden="true">
                    {/* <div className="modal-dialog ">
                        <div class="modal-content-wrapper">
                            <div class="modal-content" style="background: white">
                                <div class="modal-header clearfix text-left">
                                    <h5 class="text-danger">Payment <span class="semi-bold">Failed</span></h5>
                                 </div>
                                <div class="modal-body">
                                    <form role="form">
                                        <div class="form-group-attached">
                                            <div class="row">
                                                <p>Sorry, we were unable to process your payment using Interswitch Webpay gateway.</p>
                                                <p> <strong>REASON</strong>: {[{paymentResponse.error.responseMessage }]}</p>

                                                <p>  However, we have another option for you. Kindly click on
                                                    the button to continue.
                                                </p>
                                            </div>

                                        </div>
                                    </form>
                                    <div class="row">
                                        <div class="col-md-4">

                                        </div>
                                        <div class="col-md-8 m-t-10 sm-m-t-10">
                                            <button type="button" class="btn   m-t-5" ng-click="cancelOtherOption()">Decline</button>

                                            <button type="button" class="btn btn-primary m-t-5"
                                                    ng-click="anotherOption()">Try another option </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}
                </div>


                <div id="rootwizard" className="m-t-0 p-t-0 section">

                    <ul className="nav nav-tabs nav-tabs-linetriangle nav-tabs-separator nav-stack-sm" role="tablist"
                        data-init-reponsive-tabs="dropdownfx">
                        <li className="nav-item">
                            <a data-toggle="tab" href=" " role="tab"><i
                                    className="fa fa-user tab-icon"></i> <span>Payment Detail</span></a>
                        </li>
                    </ul>

                    <div className="" style={{background:"white"}}>
                        {/* <div ng-class="{'hidden':!showError}" class="alert alert-danger text-center" role="alert">
                            <span id="errorMeg">{[{showMessage}]}</span>
                        </div> */}
                        <div className="tab-pane slide-left  p-l-20 p-r-20 sm-no-padding" id="tab1">
                            <div className="row row-same-height">
                                <div className="col-md-5 b-r b-dashed b-grey ">
                                    <div className="padding-30 sm-padding-5 sm-m-t-15">


                                        <h3>Your current bill </h3>
                                        <div><p className="pull-right bold">9870596202</p>
                                            <p> LEOFLINCH NIG LTD</p></div>
                                        <p className="small hint-text">ATTAH IBEKU (9870596202)</p>
                                        <table className="table table-condensed">
                                            <tr>
                                                <td className=" col-md-8">
                                                    <span className="m-l-10 font-montserrat fs-11 all-caps">Billed amount</span>
                                                </td>
                                                <td className=" col-md-4 text-right">
                                                    <span>&#8358; 14,596</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className=" col-md-8">
                                                    <span className="m-l-10 font-montserrat fs-11 all-caps">VAT</span>
                                                </td>
                                                <td className=" col-md-4 text-right">
                                                    <span>&#8358; 1,094.7</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className=" col-md-8">
                                                    <span className="m-l-10 font-montserrat fs-11 all-caps">Arrears</span>
                                                </td>
                                                <td className=" col-md-4 text-right">
                                                    <span>&#8358; 365,195.885</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" className=" col-md-4 text-right">
                                                    <h4 className="text-primary no-margin font-montserrat">
                                                        &#8358;380,886.585</h4>
                                                </td>
                                            </tr>
                                        </table>

                                        
                                    </div>
                                </div>
                                <div className="col-md-7" >
                                    <div className="padding-30 sm-padding-5">
                                        <br/>
                                        <br/>
                                        <form id="paydetail"  autocomplete="off">
                                            <p>Payments</p>
                                            <div className="form-group-attached">
                                                <div className="row clearfix">
                                                    <div className="col-md-8">
                                                        <div className="form-group form-group-default input-group">
                                                            <div className="form-input-group">
                                                                <label>Amount</label>
                                                                <input id="amount" ng-model="formService.payamount"
                                                                       type="text" data-a-dec="." data-a-sep=","
                                                                       className="autonumeric form-control" required></input>
                                                            </div>
                                                            <div className="input-group-addon">
                                                                NGN
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                            <br></br>
                                            <p>Feedback </p>
                                            <div className="form-group-attached">
                                                <div className="form-group form-group-default ">
                                                    <label for="email">Email Address</label>
                                                    <input id="email" ng-model="email" name="email"
                                                           value="" type="email" className="form-control"
                                                           placeholder="email address"></input>
                                                </div>
                                                <div className="form-group form-group-default required">
                                                    <label for="phoneNumber">Phone Number</label>
                                                    <input id="phoneNumber" name="phoneNumber" ng-model="phoneNumber"
                                                           type="tel" className="form-control"
                                                           placeholder="active phone number"
                                                           value="" required></input>
                                                </div>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="padding-20 sm-padding-5 sm-m-b-20 sm-m-t-20 bg-white clearfix">

                            <ul className="pager wizard no-style">
                                <li  className="next">
                                    <button className="btn btn-primary btn-cons btn-animated from-left fa fa-forward pull-right"
                                            type="button">
                                        <span>Next</span>
                                    </button>
                                </li>
                                <li className="next finish hidden">
                                    <button  id="payBtn"
                                            className="btn btn-primary btn-cons btn-animated from-left fa fa-check pull-right"
                                            type="button">
                                        <span>Pay Now</span>
                                    </button>
                                </li>
                                <li className="previous first hidden">
                                    <button className="btn btn-default btn-cons btn-animated from-left fa fa-cog pull-right"
                                            type="button">
                                        <span>First</span>
                                    </button>
                                </li>
                                <li className="previous">
                                    <button ng-click="selectedTab =1" className="btn btn-default btn-cons pull-right"
                                            type="button">
                                        <span>Previous</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="wizard-footer padding-20 bg-master-light">
                            <p className="small hint-text pull-left no-margin">
                                <a href="/energypay/">Return home</a>
                            </p>
                            <div className="pull-right">
                                <img src={logo} alt="logo" width="50" height="22"></img>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Content2;