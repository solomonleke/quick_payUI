import { Box, HStack, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function ListRow({title, value}) {
  return (
    <HStack flexWrap={"wrap"}>
      <Box textTransform={"capitalize"} fontWeight={"600"} fontSize={"14px"} color={"#242424"}>{title} : </Box>
      <Spacer/>
      <Box textTransform={"capitalize"} fontWeight={"400"} fontSize={"14px"} color="gray.gray300">{value}</Box>
    </HStack>
  )
}
