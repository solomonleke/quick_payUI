import { Box, Flex, HStack, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { MdReceipt } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function DashboardCard({color,title,value, icon,link}) {
  const nav = useNavigate()
  return (
    <Box onClick={()=>nav(`${link}`)} bg={color} cursor={"pointer"} transition={"0.5s "} _hover={{bg: "blue.blue100"}} boxShadow={"4px 6px 12px 3px #B5B5B5 "} w={["100%","100%","48%","48%","24%"]} mt={["15px","10px","10px","10px","2px"]} p="20px" rounded="8px" color={"#fff"}>
      <HStack>
        <Box>
          <Text textTransform={"capitalize"} fontSize={"16px"} fontWeight={"500"} color="#fff">{title}</Text>
          <Text textTransform={"capitalize"} fontSize={"14px"} fontWeight={"700"} color="#ddd">₦{value?.toLocaleString()}</Text>
        </Box>
        <Spacer/>
        <Flex justifyContent={"center"} bg="#ddd" color={color}  p="10px" rounded="100">
        <Box fontSize={"35px"}>{icon}</Box>
        </Flex>
      </HStack>
    </Box>
  )
}
