import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import { Box, Flex, Text } from '@chakra-ui/react'
import DashboardCard from '../../Components/DashboardCard'
import { MdReceipt } from 'react-icons/md'
import { FaWallet, FaMoneyBillWave } from 'react-icons/fa'
import { TbCurrencyNaira } from 'react-icons/tb'
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { CombineData, PaymentData, data } from '../Data'
import { ConsumptionAPI, DashboardApi, UserDetails, prePaidTransactionAPI } from '../../Utils/ApiCalls'
import { showToast } from '../../utility/tool'
import Preloader from '../../Components/Preloader'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'



export default function Dashboard() {

  const [OnlineUSerDetails, setOnlineUSerDetails] = useState("");

  const [DashboardData, setDashboardData] = useState({});
  const [ConsumeData, setConsumeData] = useState({});
  const [AmountData, setAmountData] = useState({});
  const [Data, setData] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const getData = async () => {
    try {

      let result = await DashboardApi();

      if (result.status === 200) {

        console.log("resultDass", result.data);


        // const newData =   result.data.consume?.map((item,i)=>{
         

        //   let newDate = moment(item?.date).format('ll')
         
        //   item.date = newDate
          
        //   return item
          
        // })
        // const newDataAmount =   result.data.pay?.map((item,i)=>{
         

        //   let newDate = moment(item?.paydate).format('ll')
         
        //   item.paydate = newDate
          
        //   return item
          
        // })

        // setAmountData(newDataAmount)
        setDashboardData(result.data)
        // setConsumeData(newData)
        setisLoading(false)
        
      } else {
        setisLoading(false)

        console.log("errorMessage", result.response.data[0].Error)
      }


    } catch (e) {

      showToast({
        message: e.message,
        type: 'error'
      });
      setisLoading(false)
      console.error('DashboardError:', e.message);
    }

  }
  const getOnlineUserData = async () => {

    try {

      let result = await UserDetails();
      if (result.status === 200) {

        console.log("userDetails", result);
       
        setOnlineUSerDetails(result.data)
        setisLoading(false)
        
      } else {
        setisLoading(false)

      }


    } catch (e) {

      showToast({
        message: e.message,
        type: 'error'
      });
      setisLoading(false)
      console.log('UserDetailsError:', e.message);
    }

  }


    const prePaidTransaction = async () => {

      try {
  
          let result = await prePaidTransactionAPI();
          console.log("prePaidTransaction", result);
  
          
          if (result.status === 200) {
            
            const newData =   result.data.map((item,i)=>{
              
              let newArr =  item.amount.split("₦")[1] 

              // let newDate = moment(item.created).format('ll')
              
              item.amount = newArr
              // item.created = newDate
              
              return item
              
            })
            setData(newData)

            console.log("object", newData)

              setisLoading(false)
          }
  
  
      } catch (e) {
  
          // showToast({
          //     message: e.message,
          //     type: 'error'
          // });
          // setisLoading(false)
          // console.error('consumptionError:', e.message);
      }
  
  }
  
  
    
 




const nav = useNavigate()



  useEffect(() => {
    return () => {
      getData()
      getOnlineUserData()

      prePaidTransaction()
      


    };
  }, []);



  return (
    <MainLayout>
      <Seo title='Dashboard' description='APLE Dashboard' />
      {
        isLoading ? (
          <Preloader />
        ) : (
          <>
            <Text fontWeight={"500"} fontSize={"18px"} color="#242424">Welcome back {OnlineUSerDetails?.name?.split(" ")[0]}👋</Text>
            <Flex justifyContent={"space-between"} flexWrap={"wrap"} >
              <DashboardCard
                color={"yellow.yellow400"}
                title={"total arrears"}
                value={DashboardData?.rec?.new_arrears ? DashboardData?.rec?.new_arrears : "0.00" }
                icon={<MdReceipt />}
                link="/portal/pay-bills"
              />
              <DashboardCard
                color={"#242424"}
                title={"last bill"}
                value={DashboardData?.rec?.last_pay ? DashboardData?.rec?.last_pay : "0.00"}
                icon={<FaMoneyBillWave />}
                link="/portal/postpaid/payment-history"
              />
              <DashboardCard
                color={"blue.500"}
                title={"last payment"}
                value={DashboardData?.rec?.b_amount ? DashboardData?.rec?.b_amount : "0.00"}
                icon={<TbCurrencyNaira />}
                link="/portal/postpaid/payment"
              />
              <DashboardCard
                color={"yellow.500"}
                title={"wallet balance"}
                value={DashboardData?.rec?.wallet ? DashboardData?.rec?.wallet : "0.00"}
                icon={<FaWallet />}
                link={"/portal/fund-wallet"}
              />

            </Flex>

{
  OnlineUSerDetails.metering_type === "postpaid" && (
    <Flex justifyContent={"space-between"}  mt="32px" flexWrap={"wrap"}>
             <Box width={["100%","100%","100%","100%","49%"]} onClick={()=>nav("/portal/postpaid/consumption")}>
             <ResponsiveContainer width={"100%"} height={250} >
                <BarChart data={DashboardData.consume} >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="consume" fill="navy" />
                </BarChart>
              </ResponsiveContainer>
             </Box>
             <Box width={["100%","100%","100%","100%","49%"]} onClick={()=>nav("/portal/postpaid/payment")}>
             <ResponsiveContainer width={"100%"} height={250}>
                <BarChart data={DashboardData.pay}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="paydate" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" fill="#3182CE" />
                </BarChart>
              </ResponsiveContainer>
             </Box>
             
            </Flex>
  )
}
           
{
  OnlineUSerDetails.metering_type === "prepaid" && (
    <Flex justifyContent={"space-between"}  mt="32px" flexWrap={"wrap"}>
             <Box width={["100%","100%","100%","100%","49%"]} onClick={()=>nav("/portal/postpaid/consumption")}>
             <ResponsiveContainer width={"100%"} height={250} >
                <BarChart data={Data} >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="created" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="units" fill="navy" />
                </BarChart>
              </ResponsiveContainer>
             </Box>
             <Box width={["100%","100%","100%","100%","49%"]} onClick={()=>nav("/portal/postpaid/payment")}>
             <ResponsiveContainer width={"100%"} height={250}>
                <BarChart data={Data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="created" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" fill="#3182CE" />
                </BarChart>
              </ResponsiveContainer>
             </Box>
             
            </Flex>
  )
}
           

            <Box mt={"32px"}>
              <ResponsiveContainer width={"100%"} height={250}>
                <ComposedChart data={CombineData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <CartesianGrid stroke="#f5f5f5" />
                  <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
                  <Bar dataKey="Payment" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="consumption" stroke="#ff7300" />
                </ComposedChart>
              </ResponsiveContainer>
            </Box>
          </>
        )
      }

    </MainLayout>
  )
}
