import '../../header/css/bootstrap.min.css';
import '../../header/css/pages.css';
import '../../header/css/home.css';

function Content(){
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
                                                <form className="simform no-margin" autocomplete="off" data-social="status">
                                                    <div className=" row status-form-inner" >
                                                        <ol className="questions col-md-8 col-sm-12">
                                                            <li className="current">                                                   <span>
                                                            <label className="m-b-0 m-t-10" for="queryString">What&#x27;s your meter number or account number?</label>
                                                        </span>
                                                                <input id="queryString" name="queryString" value="" type="text"/>
                                                            </li>
                                                        </ol>

                                                        <button id="search"
                                                                className=" col-md-4 submit next show  btn btn-danger m-t-20 p-l-30 p-r-30 "
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