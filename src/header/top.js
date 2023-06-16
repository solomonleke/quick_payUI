import { useNavigate } from 'react-router-dom';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import logo from './logo_black.png';
import { BiArrowBack } from 'react-icons/bi';

function Heading(){

    const nav = useNavigate()
    return(
        <div className="MainHeader">
            <div className='container'>
                <div className='navigate ' onClick={()=>nav("/")}>
                  {/* <span><BiArrowBack/> </span>   */}
                    <span> Back to home</span>
                </div>
            </div>
          
        </div>
    )
}

export default Heading;