import React, { useState } from "react";
import { Box, Collapse, Flex, HStack, Icon, Image, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { NavList } from "./NavList";
import { BiCaretDown,BiCaretUp } from "react-icons/bi";
import NavItem from "./NavLink";
import { showToast } from "../../utility/tool";


export default function SideBar() {
  const location = useLocation();
  const OnlineUSerDetails = JSON.parse(localStorage.getItem("user"))||{}


  const List = NavList(location,OnlineUSerDetails);

  const nav = useNavigate() 


  const [isOpen, setIsOpen] = useState('');


  const logout = () =>{
    localStorage.clear();
    nav("/cus-login")
    showToast({
      message: 'Logging out !!!',
      type: 'success'
  });
  }

 

  return (
    <Box ml="32px" pb="10px" bgColor={"transparent"} w="250px" mr="-10px">
    <Flex justifyContent={"center"}>

      <Image onClick={()=>nav("/")} cursor={"pointer"} ml="-20px" src={`../.././${process.env.REACT_APP_QUIKPAY_LOGO}`} w="30%" />
    </Flex>

      <Stack spacing={"18px"} mt="32px">
        {List.filter(item => item.display === true).map((item, i) => (
            <NavItem
            key={i}
            submenu={item.children}
            icon={item?.icon}
            onClick={() => {
              if (item.children) {
                if (item.name === isOpen) {
                  setIsOpen(null);
                } else {
                  setIsOpen(item.name);
                }
              } else {
                nav(item.link);
              }
            }}
            isOpen={isOpen}
            active={
              // pathname.includes(item.link) ||
              // (item?.children &&
              //   item.children.some(e => pathname.includes(e.link)))
              item.active
            }
            activeScreen={item.active}
            setIsOpen={setIsOpen}
          >
            {item.name}
          </NavItem>
        ))}

       

        <HStack
          onClick={logout}
          bgColor={"transparent"}
          padding={"8px"}
          fontFamily="body"
          fontSize={"14px"}
          
          color={"gray.gray500"}
          _hover={{
            bgColor: "gray.gray100",
            
            color: "blue.blue600",
          }}
          borderStartRadius="28px"
          cursor="pointer"
        >
          <Box fontSize={"24px"} pos="relative" top="-1px">
            <BiLogOut />
          </Box>
          <Text fontWeight={"400"} textTransform={"capitalize"}  pos={"relative"} top={"5px"}>Logout</Text>
        </HStack>
      </Stack>

    </Box>
  );
}
