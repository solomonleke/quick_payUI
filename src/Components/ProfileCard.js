import { Avatar, Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { MdLocationPin } from 'react-icons/md'

export default function ProfileCard() {

  let OnlineUSerDetails= JSON.parse(localStorage.getItem("user"));

  return (
    <div>
       <Box rounded="8px" pos={"relative"} bgImage={"/ProfileBg.jpg"} bgRepeat={"no-repeat"} bgPos={"center"} bgSize={"cover"} h="100">
        <Avatar position={"absolute"} left="40px" bottom={"-55px"} size='2xl' name={`${OnlineUSerDetails.name}`} src='https://bit.ly/' />
      </Box>

      <Text color="#242424" textTransform={"capitalize !important"} mt="90px" fontWeight={"600"} fontSize={"23px"}>{OnlineUSerDetails.name}</Text>
      <Text color="yellow.yellow400" textTransform={"capitalize"} fontWeight={"500"} fontSize={"15px"}>{OnlineUSerDetails.billing_type}</Text>

      <HStack>
        <Box fontSize={"25px"} pos={"relative"} left={"-5px"} top="-7px" color="yellow.yellow400"><MdLocationPin /></Box>

        <Text color="#333" textTransform={"capitalize"} fontWeight={"500"} fontSize={"15px"}>{OnlineUSerDetails.street}, {OnlineUSerDetails.cus_state2},  Nigeria.</Text>
      </HStack>
    </div>
  )
}
