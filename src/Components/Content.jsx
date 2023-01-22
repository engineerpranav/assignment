import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import "./content.css"
function Content({heading,subheading,description}) {


  return (
    <Box display="flex" textAlign="start" w="50%" margin="auto"  flexDirection="column"  gap="30px"  fontFamily="system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Fira Sans','Droid Sans','Helvetica Neue',sans-serif" lineHeight="1.5" fontSize="1.4rem" >
          <Box><Text  class="heading">{heading}</Text></Box>
          <Box><Text class="subheading">{subheading}</Text></Box>
          <Box><Text class="description" >{description}</Text></Box>

    </Box>
  )
}

export default Content