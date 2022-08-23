import '../header/css/bootstrap.min.css';
import '../header/css/pages.css';

function Footer(){
    return(
        <div className=" container-fluid  container-fixed-lg footer bg bg-light">
                <div className="copyright sm-text-center">
                    <p className="small no-margin pull-left sm-pull-reset">
                        <span className="hint-text">Copyright &copy; <script>document.write(new Date().getFullYear())</script> </span>
                        <span className="font-montserrat">Sterling Tech</span>.
                        <span className="hint-text">Powered by Sterling SmartCash Collection Aggregator. </span>
                        <span className="sm-block"><a  target="_blank" href="#" className="m-l-10 m-r-10">Terms of use</a> <span
                                className="muted">|</span> <a  target="_blank" href="#" className="m-l-10">Privacy Policy</a></span>
                    </p>
            
                    <div className="clearfix"></div>
                </div>
            </div>
    )
}

export default Footer;