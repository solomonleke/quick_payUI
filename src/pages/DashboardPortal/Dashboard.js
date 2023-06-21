import React from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import { Box, Flex, Text } from '@chakra-ui/react'
import DashboardCard from '../../Components/DashboardCard'
import { MdReceipt } from 'react-icons/md'
import { FaWallet, FaMoneyBillWave } from 'react-icons/fa'
import { TbCurrencyNaira } from 'react-icons/tb'
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { CombineData, PaymentData, data } from '../Data'


export default function Dashboard() {


 
  return (
    <MainLayout>
      <Seo title='Dashboard' description='APLE Dashboard' />

      <Text fontWeight={"500"} fontSize={"18px"} color="#242424">Welcome back John 👋</Text>
      <Flex justifyContent={"space-between"} flexWrap={"wrap"} >
        <DashboardCard
          color={"yellow.yellow400"}
          title={"total arrears"}
          value={905432.18}
          icon={<MdReceipt />}
        />
        <DashboardCard
          color={"#242424"}
          title={"last bill"}
          value={22215.11}
          icon={<FaMoneyBillWave />}
        />
        <DashboardCard
          color={"blue.500"}
          title={"last payment"}
          value={23561.43}
          icon={<TbCurrencyNaira />}
        />
        <DashboardCard
          color={"yellow.500"}
          title={"wallet balance"}
          value={34508.55}
          icon={<FaWallet />}
        />

      </Flex>


      <Flex justifyContent={"space-between"} flexDir={["row", "row"]} mt="32px" flexWrap={"wrap"}>
        <ResponsiveContainer width={"49%"} height={250}>
          <BarChart data={data} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="consumption" fill="navy" />
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width={"49%"} height={250}>
          <BarChart data={PaymentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="payment" fill="#3182CE" />
          </BarChart>
        </ResponsiveContainer>

      </Flex>

      <Box mt={"32px"}>
       <ResponsiveContainer width={"100%"} height={250}>
       <ComposedChart  data={CombineData}>
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
    </MainLayout>
  )
}
