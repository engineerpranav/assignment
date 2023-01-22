import React from 'react'
import { Box,Button,Text,Image } from "@chakra-ui/react"

function Navbar() {
  return (
    <Box display="flex" justifyContent="space-between" h="75px" alignItems="center" bg="#0f0f0f" borderStyle="solid" borderColor="#000" position="sticky" left="0" right="0" top="0" zIndex="1000" bottom="auto" paddingLeft="5%" paddingRight="5%" fontFamily="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif" >
      <Box display="flex" gap="50px" alignItems="center"  color="#fff">

        <Box><Image w="100%" h="35px" src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png" alt="logo"/></Box>
        <Box><Text>Product</Text></Box>
        <Box><Text>Our Story</Text></Box>
        <Box><Text>Resources</Text></Box>

      </Box>
       
      <Box>
      <Button colorScheme='blue'>Book a demo</Button>
      </Box>


    </Box>
  )
}

export default Navbar