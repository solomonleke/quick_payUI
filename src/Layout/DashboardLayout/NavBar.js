import { Box, Flex, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import SideBarDrawer from './SideBarDrawer'

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex justifyContent={"space-between"} color={"gray.gray200"} mx="2%" display={["flex", "flex", "flex", "none", "none"]}>
            <Box>
                <Image ml="" src={`../.././${process.env.REACT_APP_QUIKPAY_LOGO}`} w="16%" />

            </Box>
            <Flex onClick={onOpen} cursor={"pointer"} fontSize={"40px"} alignItems={"center"}>
                <BiMenuAltRight />
            </Flex>

            <SideBarDrawer isOpen={isOpen} onClose={onClose}/>
        </Flex>
    )
}
