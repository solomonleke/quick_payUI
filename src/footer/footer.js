import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';

function Footer() {
    return (
        <div className="footer">
            <div className='container'>
                <div className='row mt-32'>
                    
                    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-3'>
                        <div className='footerHeader'>Products</div>
                        <div className='footerSubText'><a target="_blank" href="#">Buy Electricity</a></div>
                        {/* <div className='footerSubText'><a target="_blank" href="#">Data bundle <span className='comingSoon'>coming soon</span></a></div>
                        <div className='footerSubText'><a target="_blank" href="#">Airtime <span className='comingSoon'>coming soon</span></a></div> */}


                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-3'>
                        <div className='footerHeader'>Legal</div>
                        <div className='footerSubText'><a target="_blank" href="#">Terms of use</a></div>
                        <div className='footerSubText'><a target="_blank" href="#" >Privacy Policy</a></div>

                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-3'>
                        <div className='footerHeader'>Company</div>
                        <div className='footerSubText'><a target="_blank" href="#">Contact us</a></div>
                        <div className='footerSubText'><a target="_blank" href="#">About</a></div>


                    </div>
                </div>
                <div className='col-lg-12 mt-3'>
                       
                        <div className="copyrightText">Copyright &copy; {new Date().getFullYear()} Sterling Technologies.  All Rights Reserved.</div>

                    </div>
            </div>

        </div>
    )
}

export default Footer;