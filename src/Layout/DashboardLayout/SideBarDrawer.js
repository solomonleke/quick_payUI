import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavList } from './NavList';
import NavItem from './NavLink';
import { BiLogOut } from 'react-icons/bi';
import SideBarNavItem from './SideBarNavLink';
import { showToast } from '../../utility/tool';

export default function SideBarDrawer({isOpen, onClose}) {
    const location = useLocation();

    const OnlineUSerDetails = JSON.parse(localStorage.getItem("user"))||{}


  const List = NavList(location,OnlineUSerDetails);

  const nav = useNavigate() 


  const [isOpenX, setIsOpenX] = useState('');

  const logout = () =>{
    localStorage.clear();
    nav("/cus-login")
    showToast({
      message: 'Logging out !!!',
      type: 'success'
  });
  }
  return (
    <Drawer
    isOpen={isOpen}
    placement='left'
    onClose={onClose}
   
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader></DrawerHeader>

      <DrawerBody>
      <Stack spacing={"18px"} mt="32px">
        {List.filter(item => item.display === true).map((item, i) => (
            <SideBarNavItem
            key={i}
            submenu={item.children}
            icon={item?.icon}
            onClick={() => {
              if (item.children) {
                if (item.name === isOpenX) {
                  setIsOpenX(null);
                } else {
                  setIsOpenX(item.name);
                }
              } else {
                nav(item.link);
              }
            }}
            isOpen={isOpenX}
            active={
              // pathname.includes(item.link) ||
              // (item?.children &&
              //   item.children.some(e => pathname.includes(e.link)))
              item.active
            }
            activeScreen={item.active}
            setIsOpen={setIsOpenX}
          >
            {item.name}
          </SideBarNavItem>
        ))}

       

        <HStack
          onClick={logout}
          bgColor={"blue.blue100"}
          padding={"8px"}
          fontFamily="body"
          fontSize={"16px"}
          fontWeight={"600"}
          color={"#fff"}
          _hover={{
            bgColor: "gray.gray200",
            borderLeftRadius: "8px",
            color: "blue.blue100",
          }}
          borderRadius="16px"
          cursor="pointer"
        >
          <Box fontSize={"24px"} pos="relative" top="-1px">
            <BiLogOut />
          </Box>
          <Text textTransform={"capitalize"} pos={"relative"} top={"5px"}>Logout</Text>
        </HStack>
      </Stack>
      </DrawerBody>

      
    </DrawerContent>
  </Drawer>
  )
}
