import React from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import { Box } from '@chakra-ui/react'
import Iframe from 'react-iframe'

export default function NewConnectionRequest() {
  return (
    <MainLayout>
    <Seo title='New Connection Request' description='APLE New Connection Request'/>
      

      <Box>
      <Iframe url="https://apleportal.smartpowerbilling.com/customerform"
        width="100%"
        height="520px"
        id=""
        className=""
        display="block"
        position="relative"/>
      </Box>
    </MainLayout>
  )
}
