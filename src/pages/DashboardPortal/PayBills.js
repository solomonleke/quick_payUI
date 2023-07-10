import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import Header from '../../Components/Header'
import { Box, Flex, HStack, Spacer, Stack } from '@chakra-ui/react'
import ListRow from '../../Components/ListRow'
import Input from '../../Components/Input'
import { FaUserAlt } from 'react-icons/fa'
import { TbCurrencyNaira } from 'react-icons/tb'
import Button from '../../Components/Button'
import { PayBillsDetailsApi } from '../../Utils/ApiCalls'
import { showToast } from '../../utility/tool'
import Preloader from '../../Components/Preloader'

export default function PayBills() {

  const [amount, setAmount] = useState("")
  const [isLoading, setisLoading] = useState(true)
  const [PayBillsDetails, setPayBillsDetails] = useState({})



  const PayBills = async ()=>{

    try {
     
      let result = await PayBillsDetailsApi();

      if (result.status  === 200) {     
        console.log("payBills", result);
        setPayBillsDetails(result.data)
        setisLoading(false)
        
      } else {
        
      }
     

  } catch (e) {
    
      showToast({
        message: e.message,
        type: 'error'
    });
      console.error('consumptionError:', e.message);
  }
    
  }



  useEffect(() => {
    PayBills()
  }, [])

  return (
    <MainLayout>
      <Seo title='Pay Bills' description='APLE Pay Bills' />
      <Header title={"your current bill"} mt='32px' />
      {
        isLoading && (
          <Preloader/>
        )
      }
      <Flex mt="32px" justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box w={["100%", "100%", "48%", "48%", "48%"]} mt="12px" >
          <div className='LoginCardX'>
            <Stack spacing={"25px"}>
              <ListRow
                title={"wallet"}
                value={`₦${PayBillsDetails.wallet ? PayBillsDetails.wallet: "0.0"}`}
              />
              <ListRow
                title={"billed amount"}
                value={`₦${PayBillsDetails.billedamount ? PayBillsDetails.billedamount: "0.0"}`}
              />
              <ListRow
                title={"VAT"}
                value={`₦${PayBillsDetails.vat ? PayBillsDetails.vat: "0.0"}`}
              />
              <ListRow
                title={"Arrears"}
                value={`₦${PayBillsDetails.credit}`}
              />

              <HStack flexWrap={"wrap"} mt="32px">
                <Box textTransform={"capitalize"} fontWeight={"600"} fontSize={"18px"} color={"#242424"}>Total : </Box>
                <Spacer />
                <Box textTransform={"capitalize"} fontWeight={"400"} fontSize={"18px"} color="gray.gray300">{`₦${PayBillsDetails.total}`}</Box>
              </HStack>

            </Stack>
          </div>
        </Box>
        <Box w={["100%", "100%", "48%", "48%", "48%"]} mt="12px" >
          <div className='LoginCardX'>
            <Stack spacing={"26px"}>
              <Input label='Amount' leftIcon={<TbCurrencyNaira />} id="amount" value={amount} val={amount !== "" ? true : false} type='number' onChange={(e) => setAmount(e.target.value)} />
              <Button>Pay online</Button>
              <Flex justifyContent={"center"} mt="15px">
                    <Box w={"135px"} border="1px solid #808080"></Box>

                </Flex>
              <Flex justifyContent={"center"} mt="-43px">

                <Box textAlign={"center"} fontWeight={"400"} fontSize={"18px"} bg={"#fff"} w="45px" color="#242424" >or</Box>
              </Flex>

              <Button mt="10px">Pay From wallet</Button>
            </Stack>
          </div>
        </Box>
      </Flex>
    </MainLayout>
  )
}
