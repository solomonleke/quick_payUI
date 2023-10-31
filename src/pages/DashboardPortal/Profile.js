import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import ListRow from '../../Components/ListRow'
import Header from '../../Components/Header'
import ProfileCard from '../../Components/ProfileCard'
import moment from 'moment/moment'
import { UserDetails } from '../../Utils/ApiCalls'
import { showToast } from '../../utility/tool'
import Preloader from '../../Components/Preloader'

export default function Profile() {

  const [OnlineUSerDetails, setOnlineUSerDetails] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const getOnlineUserData = async () => {

    try {

      let result = await UserDetails();
      if (result.status === 200) {

        console.log("userDetails", result);
        setOnlineUSerDetails(result.data)
        localStorage.setItem("user", JSON.stringify(result.data))
        setisLoading(false)

      } else {

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

  useEffect(() => {
    getOnlineUserData()
  }, []);
  return (
    <MainLayout>
      <Seo title='Profile' description='APLE Profile' />

  {
    isLoading ? (
      <Preloader/>
    ):(
      <>
      <ProfileCard/>
     

     <Flex mt="32px" justifyContent={"space-between"} flexWrap={"wrap"}>
       <Box w={["100%","100%","100%","48%","48%"]} mt="12px">
         <div className='LoginCardX'>
         <Header title="account" size='1.3em'/>
           <Stack mt="10px" spacing={"15px"}>
             <ListRow
               title="account name"
               value={OnlineUSerDetails?.name}
             />
             <ListRow
               title="category"
               value={OnlineUSerDetails?.customer_category}

             />
             <ListRow
               title="bill status"
               value={OnlineUSerDetails?.bill_status ? "true":"false"}
             />
             <ListRow
               title="entity type"
               value={OnlineUSerDetails?.e_type ? OnlineUSerDetails?.e_type:"nil"}
             />
             <ListRow
               title="billing mode"
               value={OnlineUSerDetails?.metering_type}
             />
             <ListRow
               title="account number"
               value={OnlineUSerDetails?.acc_no}
             />
             <ListRow
               title="Id type"
               value={OnlineUSerDetails?.id_type ? OnlineUSerDetails?.id_type:"nil"}
             />
             <ListRow
               title="standalone AC/NO"
               value={OnlineUSerDetails?.acc_no}
             />
             <ListRow
               title="tarrif rate"
               value={OnlineUSerDetails?.tariff_rate}
             />
             <ListRow
               title="old acc no "
               value={OnlineUSerDetails?.old_acc_no ? OnlineUSerDetails?.old_acc_no: "nil"}
             />
           </Stack>
         </div>
       </Box>
       <Box w={["100%","100%","100%","48%","48%"]} mt="12px">
         <div className='LoginCardX'>
         <Header title="contact details" size='1.3em'/>
           <Stack mt="10px" spacing={"15px"}>
             <ListRow
               title="email"
               value={OnlineUSerDetails?.email ? OnlineUSerDetails?.email: "nil"}
             />
             <ListRow
               title="phone no"
               value={OnlineUSerDetails?.phone_no}
             />
             <ListRow
               title="preferred contact method"
               value={"email"}
             />
             <ListRow
               title="preferred contact language"
               value={"english"}
             />
             <ListRow
               title="building ID"
               value={"2345"}
             />
             <ListRow
               title="street"
               value={OnlineUSerDetails?.street}
             />
             <ListRow
               title="district"
               value={OnlineUSerDetails?.district}
             />
             <ListRow
               title="state"
               value={OnlineUSerDetails?.cus_state2}
             />
            
           </Stack>
         </div>
       </Box>
       <Box w={["100%","100%","100%","48%","48%"]} mt="12px">
         <div className='LoginCardX'>
         <Header title="Account summary" size='1.3em'/>
           <Stack mt="10px" spacing={"15px"}>
             <ListRow
               title="Start date"
               value={moment(OnlineUSerDetails.billdate).format('DD/ MM/ YYYY, h:mm:ss a')}
             />
             <ListRow
               title="last modified"
               value={moment(OnlineUSerDetails.lastpaydate).format('DD/ MM/ YYYY, h:mm:ss a')}
             />
             <ListRow
               title="billing mode"
               value={OnlineUSerDetails.bill_status ? "true": "false"}
             />
             <ListRow
               title="billing cycle"
               value={OnlineUSerDetails.b_cycle ? OnlineUSerDetails.b_cycle : "nil"}
             />
             <ListRow
               title="class"
               value={OnlineUSerDetails.customer_category}
             />
             <ListRow
               title="service band"
               value={"Nil"}
             />
            
            
           </Stack>
         </div>
       </Box>
       <Box w={["100%","100%","100%","48%","48%"]} mt="12px">
         <div className='LoginCardX'>
         <Header title="connected address" size='1.3em'/>
           <Stack mt="10px" spacing={"15px"}>
             <ListRow
               title="street"
               value={OnlineUSerDetails.street}
             />
             <ListRow
               title="city/Town"
               value={OnlineUSerDetails.district}
             />
             <ListRow
               title="state"
               value={OnlineUSerDetails.cus_state2}
             />
            
            
            
           </Stack>
         </div>
       </Box>

     </Flex>
      </>
    )
  }

    </MainLayout>
  )
}
