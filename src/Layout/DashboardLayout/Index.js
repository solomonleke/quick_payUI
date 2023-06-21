import { Avatar, Box, Flex, HStack, Spacer, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SideBar from "./SideBar";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";

export default function MainLayout({
  children,
  bgColor = "blue.blue100",
  layoutColor = "gray.gray100",
  color = "black",
}) 

{

  const location = useLocation()
  let path = location.pathname.replaceAll("/", " > ").replaceAll("-", " ")

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
          <Flex justifyContent={["flex-end","space-between","space-between","space-between","space-between"]}  bg="blue.blue100" color="#fff" px="10px" py="10px" rounded="8px" mb="12px" boxShadow={"4px 6px 12px 3px #B5B5B5"} pos="sticky" top={"5px"} zIndex={"2"}>
            <Text display={["flex", "flex", "flex", "flex", "flex"]} flexWrap={"wrap"} cursor={"pointer"} mt="7px" fontSize={["14px","14px","15px","15px","15px"]}  textTransform={"capitalize"}>{path}</Text>
            <Spacer/>
            <Box>
              <HStack> 
              <Box>
              <Text cursor={"pointer"} mt="5px" fontSize={["13px","14px","15px","15px","15px"]}  fontWeight={"600"} textAlign={"right"}>John Doe </Text>
              <Text cursor={"pointer"} mt="-14px" color={"yellow.yellow400"}  fontSize={["10px","12px","13px","13px","13px"]} fontWeight={"400"} textAlign={"right"}>Prepaid </Text>
              </Box>
              <Avatar name='John Doe' src='https://bit.ly/dan-abramov' />
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
