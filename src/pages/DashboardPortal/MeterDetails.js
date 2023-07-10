import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import ProfileCard from '../../Components/ProfileCard'
import { Box, Stack } from '@chakra-ui/react'
import Header from '../../Components/Header'
import ListRow from '../../Components/ListRow'
import { UserDetails } from '../../Utils/ApiCalls'
import { showToast } from '../../utility/tool'
import Preloader from '../../Components/Preloader'

export default function MeterDetails() {
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
    <Seo title='Meter details' description='APLE meter details'/>

    {
      isLoading && (
        <Preloader/>
      )
    }

    <ProfileCard/>

    <Box w={["100%","100%","100%","100%","100%"]} mt="12px">
          <div className='LoginCardX'>
          <Header title="meter details" size='1.3em'/>
            <Stack mt="10px" spacing={"15px"}>
              <ListRow
                title="meter capacity"
                value={OnlineUSerDetails?.meter_capacity ? OnlineUSerDetails?.meter_capacity : "Nil"}
              />
              <ListRow
                title="meter location"
                value={OnlineUSerDetails?.meter_location ? OnlineUSerDetails?.meter_location : "Nil"}
              />
              <ListRow
                title="meter Make"
                value={OnlineUSerDetails?.meter_make ? OnlineUSerDetails?.meter_make : "Nil"}
              />
              <ListRow
                title="no of digit"
                value={OnlineUSerDetails?.no_of_digits ? OnlineUSerDetails.no_of_digits : "Nil"}
              />
              <ListRow
                title="multiplicity"
                value={"nil"}
              />
             
            </Stack>
          </div>
        </Box>
      
    </MainLayout>
  )
}
