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
  
  export default function NavItem(props) {
    const { icon, children, submenu, isOpen, setIsOpen, active, ...rest } = props;
    const [hover, setHover] = useState(active);
    const nav = useNavigate();
  
    useEffect(() => {
      setTimeout(() => {
        if (submenu && active) {
          setIsOpen(children);
        }
      }, 500);
    }, [submenu]);
  
    return (
      <Box
        px="2"
        pl="4"
        py="3"
        cursor="pointer"
        color={isOpen === children || hover ? "blue.blue600" : "gray.gray500"}
        bg={(isOpen === children || hover) ? "gray.gray100" : "transparent"}
        _hover={{
          bg: "gray.gray100",
          color: 'blue.blue600',
        }}
        role=""
        textTransform={'capitalize'}
        fontSize={'14px'}
        borderStartRadius="28px"
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
              color={
                isOpen === children || hover ? "blue.blue600" : "gray.gray500"
              }
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
        {submenu && (
          <Collapse in={isOpen === children}>
            <Stack spacing={'4px'} py="2"  >
              {submenu?.map((item, index) => (
                <NavItem
                  py="0"
                  key={index}
                  textTransform="capitalize"
                  onClick={() => {
                    nav(item.link);
                  }}
                  ml="14px"
                  _hover={{color: "blue.blue600"}}
                  color="black"
                  hasCurve={false}
                >
                  <Text > {item.name}</Text>
                </NavItem>
              ))}
            </Stack>
          </Collapse>
        )}
      </Box>
    );
  }