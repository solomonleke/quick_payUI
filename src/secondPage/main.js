import Heading from "../header/top";
import Content2 from "./content/content";
import Footer from "../footer/footer";
import '../header/css/bootstrap.min.css';
import '../header/css/pages.css';

function SecondPage(){
    return(
        <div className='page-container p-l-0'>
            <Heading />
            <Content2 />
            <Footer />
        </div>
    )
}

export default SecondPage;