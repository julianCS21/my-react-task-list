import { Box, Text, Flex } from '@chakra-ui/react';



const Header = () =>{
    return(
        <>
           <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="4"
      backgroundColor="blue.500"
      color="white"
    >
      <Box>
        <Text fontSize="3xl" fontWeight="bold">
          ¡Bienvenido a todo App!
        </Text>
      </Box>
    </Flex>

        </>
    )
}


export default Header;