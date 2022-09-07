import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import LandingView from './landingView';
import getCustomerDetails from '../getDetails';

export default function LandingContent(){ 
  const [isloading,setIsloading]=useState(null);
  const navigate = useNavigate()
  async function Click(number){
    setIsloading(true)
    const res = await getCustomerDetails(number)
    
    if(res===true){
      setIsloading(false)
      setTimeout(() => {
        navigate("/confirm")
      }, 1500);
    }else{
      setIsloading(false)
    }  
  }
  return(
      <LandingView Click={(number)=>Click(number)} loading={isloading}/>
  )
}