import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import ProfileCard from '../../Components/ProfileCard'
import { Box, Stack } from '@chakra-ui/react'
import Header from '../../Components/Header'
import ListRow from '../../Components/ListRow'
import { showToast } from '../../utility/tool'
import { UserDetails } from '../../Utils/ApiCalls'
import Preloader from '../../Components/Preloader'

export default function ElectricityDetails() {

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
      <Seo title='Meter details' description='APLE meter details' />

      {
        isLoading && (<Preloader />)
      }
      <ProfileCard />

      <Box w={["100%", "100%", "100%", "100%", "100%"]} mt="12px">
        <div className='LoginCardX'>
          <Header title="Electricity details" size='1.3em' />
          <Stack mt="10px" spacing={"15px"}>
            <ListRow
              title="feeder id"
              value={OnlineUSerDetails?.feeder_id}
            />
            <ListRow
              title="feeder code"
              value={OnlineUSerDetails?.feeder_code}
            />
            <ListRow
              title="metering type"
              value={OnlineUSerDetails?.metering_type}
            />
            <ListRow
              title="transformer id"
              value={OnlineUSerDetails?.transformer_id}
            />
            <ListRow
              title="transformer code"
              value={OnlineUSerDetails?.transformer_code}
            />
            <ListRow
              title="customer class"
              value={OnlineUSerDetails?.customer_class}
            />
            <ListRow
              title="book"
              value={OnlineUSerDetails?.book_id ? OnlineUSerDetails?.book_id : "nil"}
            />
            <ListRow
              title="previous reading"
              value={"nil"}
            />
            <ListRow
              title="service center"
              value={"nil"}
            />
            <ListRow
              title="current reading"
              value={"nil"}
            />
            <ListRow
              title="marketer"
              value={OnlineUSerDetails.marketer ? OnlineUSerDetails.marketer : "nil"}
            />

          </Stack>
        </div>
      </Box>

    </MainLayout>
  )
}
