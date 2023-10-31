import React, { useState } from 'react'
import MainLayout from '../../Layout/DashboardLayout/Index'
import Seo from '../../Utils/Seo'
import Header from '../../Components/Header'
import { Box, Flex, Select, Stack, Textarea } from '@chakra-ui/react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import { FaAddressBook, FaRegListAlt, FaStreetView, FaUserAlt } from 'react-icons/fa'
import { MdConfirmationNumber, MdEmail, MdOutlineAccountBalance, MdSwitchAccount } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'

export default function CreateSupportTicket() {
  const OnlineUSerDetails = JSON.parse(localStorage.getItem("user"))

  const [Payload, setPayload] = useState(
    {
      name: "",
      email: "",
      phoneNo: "",
      accountName: "",
      accountNo: "",
      accountType: "",
      priority: "",
      createdBy: "",
      category: "",
      subCategory: "",
      subject: "",
      street: "",
      state: "",
      description: ""
    }
  );

  const CategoryList = [
    {
      value: "127",
      name: "Technical Support"
    },
    {
      value: "6",
      name: "New Service"
    },
    {
      value: "8",
      name: "Account Update"
    },
    {
      value: "2",
      name: "Billing"
    },
    {
      value: "115",
      name: "Supply"
    },
    {
      value: "116",
      name: "Prepaid Meter"
    },
    {
      value: "117",
      name: "Payment"
    },
    {
      value: "119",
      name: "Hazard"
    },
    {
      value: "121",
      name: "Connection"
    },
    {
      value: "122",
      name: "NERC Letter"
    },
    {
      value: "123",
      name: "Unistar"
    },
    {
      value: "124",
      name: "Disconnection"
    },
    {
      value: "125",
      name: "Postpaid Meter"
    },
    {
      value: "126",
      name: "Recharge Reversal"
    },

  ]


  const handlePayload = (e) => {
    setPayload({ ...Payload, [e.target.id]: e.target.value })
  }

  const submitTicket = () => {

  }


  return (
    <MainLayout>
      <Seo title='Create Support Ticket' />
      <Header title={"create support ticket"} mt='32px' />


      <div className='LoginCardX mt-4' >
        <form onSubmit={submitTicket}>
          <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
            <Box w={["100%", "100%", "48%", "48%", "48%"]} mt="12px">
              <Stack spacing={"20px"}>
                <Input leftIcon={<FaUserAlt />} id='name' label="Name" value={Payload.name} val={Payload.name !== "" ? true : false} onChange={handlePayload} />
                <Input leftIcon={<MdEmail />} id='email' label="Email" value={Payload.email} val={Payload.email !== "" ? true : false} onChange={handlePayload} />
                <Input leftIcon={<BsFillTelephoneFill />} id='phoneNo' label="Phone No" value={Payload.phoneNo} val={Payload.phoneNo !== "" ? true : false} onChange={handlePayload} />
                <Input leftIcon={<MdSwitchAccount />} id='accountName' label="Account Name" value={Payload.accountName} val={Payload.accountName !== "" ? true : false} onChange={handlePayload} />
                <Input leftIcon={<MdConfirmationNumber />} id='accountNo' label="Account No" value={Payload.accountNo} val={Payload.accountNo !== "" ? true : false} onChange={handlePayload} />
                <Input leftIcon={<MdOutlineAccountBalance />} id='accountType' label="Account Type" value={Payload.accountType} val={Payload.accountType !== "" ? true : false} onChange={handlePayload} />
                <Select id='priority' _focus={{ borderColor: "017CC2" }} placeholder='Select Priority' borderColor={Payload.priority !== "" ? "#017CC2" : "#242424"} fontSize={Payload.priority ? "16px" : "12px"} fontWeight={"400"} value={Payload.priority} size='lg' onChange={handlePayload} >

                  <option value="Low">Low</option>
                  <option value="Normal">Normal</option>
                  <option value="Moderately">Moderately</option>
                  <option value="High">High</option>
                  <option value="Urgent">Urgent</option>

                </Select>
                <Input leftIcon={<FaUserAlt />} id='createdBy' label="Created By" value={Payload.createdBy} val={Payload.createdBy !== "" ? true : false} onChange={handlePayload} />

              </Stack>
            </Box>
            <Box w={["100%", "100%", "48%", "48%", "48%"]} mt="12px">
              <Stack spacing={"20px"}>
                <Select id='category' _focus={{ borderColor: "017CC2" }} placeholder='Select Category' borderColor={Payload.category !== "" ? "#017CC2" : "#242424"} fontSize={Payload.category ? "16px" : "12px"} fontWeight={"400"} value={Payload.category} size='lg' onChange={handlePayload} >
                  {
                    CategoryList.map((item, i) => (

                      <option value={`${item.value}`}>{item.name}</option>
                    ))
                  }

                </Select>
                <Select id='subCategory' _focus={{ borderColor: "017CC2" }} placeholder='Select SubCategory' borderColor={Payload.subCategory !== "" ? "#017CC2" : "#242424"} fontSize={Payload.subCategory ? "16px" : "12px"} fontWeight={"400"} value={Payload.subCategory} size='lg' onChange={handlePayload} >

                  <option value="126">Recharge Reversal</option>

                </Select>
                <Input leftIcon={<FaRegListAlt />} id='subject' label="Subject" value={Payload.subject} val={Payload.subject !== "" ? true : false} onChange={handlePayload} />
                <Input leftIcon={<FaStreetView />} id='street' label="Street" value={Payload.street} val={Payload.street !== "" ? true : false} onChange={handlePayload} />
                <Input leftIcon={<FaAddressBook />} id='state' label="State" value={Payload.state} val={Payload.state !== "" ? true : false} onChange={handlePayload} />
                <Textarea
                  focusBorderColor={"#017CC2"}
                  borderColor={Payload.description !== "" ? "#017CC2" : "#242424"}
                  rounded={"8px"}
                  _focus={{ borderColor: "017CC2" }}
                  id='description'
                  value={Payload.description}
                  onChange={handlePayload}
                  placeholder='Outline your description'
                  size='lg'
                  resize={"none"}
                  rows="6.9"
                  cols="50"

                />
              </Stack>

            </Box>
          </Flex>

          <Button isSubmit={true} mt={"12px"}>Submit Ticket</Button>
        </form>
      </div>
    </MainLayout>
  )
} 
