import {
    Box,
    Collapse,
    Flex,
    HStack,
    Icon,
    Stack,
    Text,
  } from '@chakra-ui/react';
  import React, { useEffect, useState } from 'react';
  import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
  
  export default function SideBarNavItem(props) {
    const { icon, children, submenu, isOpen, setIsOpen, active, activeScreen, ...rest } = props;
    const [hover, setHover] = useState(active);
    const nav = useNavigate();
  
    useEffect(() => {
      setTimeout(() => {
        if (submenu && active) {
          setIsOpen(children);
        }
      }, 500);
    }, [submenu, isOpen]);
  
    return (
      <Box
        px="2"
        pl="4"
        py="2"
        cursor="pointer"
        color={isOpen === children || hover || activeScreen ? "blue.blue100" : "#fff"}
        bg={(isOpen === children || hover || activeScreen) ? "gray.gray200" : "blue.blue100"}
        _hover={{
          bg: "gray.gray200",
          color: 'blue.blue100',
        }}
        role=""
        textTransform={'capitalize'}
        fontSize={'14px'}
        borderRadius="16px"
        pos={'relative'}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          if (!active) {
            setHover(false);
          }
        }}
        {...rest}
      >
        <Flex align="center">
          {icon && (
            <Box
              fontSize={'24px'}
              color={isOpen === children || hover || activeScreen ? "blue.blue100" : "#fff"}
              mr="5px"
            >
              {icon}
            </Box>
          )}
          {children}
          {submenu && (
            <Icon
              transition={'0.3s ease'}
              as={FaChevronRight}
              size={20}
              ml="auto"
              transform={isOpen === children && 'rotate(90deg)'}
            />
          )}
        </Flex>
        {submenu  && (
          <Collapse reverse={true} in={isOpen === children } >
            <Stack spacing={'4px'} py="2"  >
              {submenu?.map((item, index) => (
                <SideBarNavItem
                 
                  key={index}
                  textTransform="capitalize"
                  onClick={() => {
                   
                    setIsOpen(children)
                      nav(item.link)
                    
                  }}
                  ml="14px"
                  _hover={{color: "blue.blue600"}}
                  color="#fff"
                  hasCurve={false}
                >
                  <Text  pt="0px" pos={"relative"} top="7px"> {item.name}</Text>
                </SideBarNavItem>
              ))}
            </Stack>
          </Collapse>
        )}
      </Box>
    );
  }