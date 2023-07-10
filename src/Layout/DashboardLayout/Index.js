import { Avatar, Box, Flex, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import jwtDecode from "jwt-decode";
import { UserDetails } from "../../Utils/ApiCalls";
import { showToast } from "../../utility/tool";

export default function MainLayout({
  children,
  bgColor = "blue.blue100",
  layoutColor = "gray.gray100",
  color = "black",
}) 

{

  const location = useLocation()
  let path = location.pathname.replaceAll("/", " > ").replaceAll("-", " ")

  const [OnlineUSerDetails, setOnlineUSerDetails] = useState({});

  
  const getOnlineUserData = async ()=>{

    try {
     
      let result = await UserDetails();
      if (result.status  === 200) {

        console.log("userDetails", result);
        setOnlineUSerDetails(result.data)
        localStorage.setItem("user", JSON.stringify(result.data))

        
      } else {
        
      }
      
      
    } catch (e) {
      
      showToast({
        message: e.message,
        type: 'error'
      });
      console.log('UserDetailsError:', e.message);
    }
    
  }

  useEffect(() => {
    getOnlineUserData()
  }, [])
  
  return (
    <Box bgColor={bgColor} minH="100vh" py="24px">
    <NavBar/>
      <Stack
        align={"flex-start"}
        pos={"relative"}
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row",
          "row",
        ]}
      >
        <Box display={["none", "none", "none", "flex", "flex"]}>
          <SideBar/>
        </Box>

        <Box width={"100%"}>
          <Box
            borderRadius="8px"
            mt="15px"
            p="20px"
            color={color}
            mr="0px"
            minH="100vh"
            
            width={["100%", "100%", "100%", "100%", "98.5%"]}
            bgColor={layoutColor}
          >
          <Flex justifyContent={["flex-end","space-between","space-between","space-between","space-between"]}  bg="blue.blue100" color="#fff" px="10px" py="10px" rounded="8px" mb="12px" boxShadow={"4px 6px 12px 3px #B5B5B5"}  zIndex={"2"}>
            <Text display={["flex", "flex", "flex", "flex", "flex"]} flexWrap={"wrap"} cursor={"pointer"} mt="7px" fontSize={["14px","14px","15px","15px","15px"]}  textTransform={"capitalize"}>{path}</Text>
            <Spacer/>
            <Box>
              <HStack> 
              <Box>
            <Text cursor={"pointer"} mt="5px" fontSize={["13px","14px","15px","15px","15px"]}  fontWeight={"600"} textAlign={"right"}>{OnlineUSerDetails?.name}</Text>
              <Text cursor={"pointer"} mt="-14px" color={"yellow.yellow400"}  fontSize={["10px","12px","13px","13px","13px"]} fontWeight={"400"} textAlign={"right"}>{OnlineUSerDetails?.metering_type} </Text>
              </Box>
              <Avatar name={`${OnlineUSerDetails?.name}`} src='https://bit.ly/' />
              </HStack>
            </Box>
          </Flex>
            {children}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
