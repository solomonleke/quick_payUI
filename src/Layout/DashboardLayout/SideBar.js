import React, { useState } from "react";
import { Box, Collapse, Flex, HStack, Icon, Image, Spacer, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { BiLogOut } from "react-icons/bi";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { NavList } from "./NavList";
import { BiCaretDown,BiCaretUp } from "react-icons/bi";
import NavItem from "./NavLink";


export default function SideBar() {
  const location = useLocation();

  const List = NavList(location);

  const nav = useNavigate() 


  const [isOpen, setIsOpen] = useState('');


  const logout = () =>{
    localStorage.clear();
  }

 

  return (
    <Box ml="32px" pb="10px" bgColor={"transparent"} w="250px" mr="-10px">
    <Flex justifyContent={"center"}>

      <Image onClick={()=>nav("/")} cursor={"pointer"} ml="-20px" src={`../.././${process.env.REACT_APP_QUIKPAY_LOGO}`} w="30%" />
    </Flex>

      <Stack spacing={"18px"} mt="32px">
        {List.map((item, i) => (
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
          fontSize={"16px"}
          fontWeight={"600"}
          color={"gray.gray500"}
          _hover={{
            bgColor: "gray.gray100",
            borderLeftRadius: "8px",
            color: "black",
          }}
          cursor="pointer"
        >
          <Box fontSize={"20px"} pos="relative" top="-1px">
            <BiLogOut />
          </Box>
          <Text textTransform={"capitalize"} pos={"relative"} top={"5px"}>Sign Out</Text>
        </HStack>
      </Stack>

    </Box>
  );
}
