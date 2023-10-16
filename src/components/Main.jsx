import { Link } from "react-router-dom";
import { Flex,Box } from '@chakra-ui/react';

export function Main() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="4"
      backgroundColor="blue.500"
      color="white"
    >
      <Box marginLeft="4">
        <Link  to="/" fontWeight="bold" fontSize="xl" _hover={{ textDecoration: "none" }}>
          Home
        </Link>
      </Box>
      <Box marginLeft="4">
        <Link  to="/tasks" _hover={{ textDecoration: "none" }}>
          Tasks
        </Link>
      </Box>
      <Box marginLeft="4">
        <Link  to="/aboutus" _hover={{ textDecoration: "none" }}>
          About Us
        </Link>
      </Box>
    </Flex>
  )
}   



