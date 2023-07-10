import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function Pagination({ postPerpage, totalPosts, paginate,currentPage }) {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postPerpage); i++) {
        pageNumbers.push(i)
    }

    console.log("currenddddtpage", currentPage)


    return (
        <Box my="10px" mx="15px">
            {
                pageNumbers.length > 1 && (
                    <Flex justifyContent={"center"} flexWrap="wrap" maxW="100%" color={"#fff"}  cursor="pointer" >
                {pageNumbers.map(number => (
                    <Text onClick={()=>paginate(number)}   _hover={{bg: "black"}} bg={currentPage === number ? "yellow.yellow500": "blue.blue100"} textAlign="center" my="2px" mx="2px" rounded={"8px"} px={"10px"} py="5px" key={number} >
                            {number}      
                    </Text>
                ))}
            </Flex>
                )
            }
           
        </Box>
    )
}
