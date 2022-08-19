import '../header/css/bootstrap.min.css';
import '../header/css/pages.css';
import Heading from '../header/top';
import Content from './contentPage/content';
import Footer from '../footer/footer';

function LandingPage(){
return(
    <div className='page-container p-l-0'>
       <Heading /> 
       <Content />
       <Footer />
    </div>  
)
}

export default LandingPage;