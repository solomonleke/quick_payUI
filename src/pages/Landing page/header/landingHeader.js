import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LandingHeaderView from './landingHeaderView';
import getCustomerDetails from '../getDetails';

export default function LandingContent(){
  const [isloading,setIsloading]=useState(null);
  const [isloggedIn,setisLoggedIn]=useState(null);
  const navigate = useNavigate();


  React.useEffect(() => {
      let tok = sessionStorage.getItem('token');
      if (tok) {
        setisLoggedIn(true);
      }
  }, []);

  async function Click(number){
  setIsloading(true)
  const res = await getCustomerDetails(number)
  
  if(res===true){
    setIsloading(false)
    setTimeout(() => {
      navigate("/details")
    }, 1500);
  }else{
    setIsloading(false)
  }  
  }
  return(
      <LandingHeaderView Click={(number)=>Click(number)} loading={isloading} loggedIn={isloggedIn} />
  )
}