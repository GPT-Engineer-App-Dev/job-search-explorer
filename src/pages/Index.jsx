import { Box, Container, Flex, Heading, Input, VStack, Text, HStack, Button } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">JobFinder</Heading>
        <HStack spacing={4}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">Jobs</Button>
          <Button variant="link" color="white">Companies</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      {/* Search Bar */}
      <VStack spacing={4} mt={8} mb={8} align="center">
        <Heading as="h2" size="xl">Find Your Dream Job</Heading>
        <HStack spacing={2} w="full" maxW="md">
          <Input placeholder="Job title or keyword" />
          <Button colorScheme="blue" leftIcon={<FaSearch />}>Search</Button>
        </HStack>
      </VStack>

      {/* Job Listings */}
      <VStack spacing={8} align="stretch">
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="md">Software Engineer</Heading>
          <Text>Company: Tech Innovators</Text>
          <Text>Location: San Francisco, CA</Text>
          <Text>Posted: 2 days ago</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="md">Product Manager</Heading>
          <Text>Company: Creative Solutions</Text>
          <Text>Location: New York, NY</Text>
          <Text>Posted: 5 days ago</Text>
        </Box>
        <Box p={4} borderWidth="1px" borderRadius="lg">
          <Heading as="h3" size="md">Data Scientist</Heading>
          <Text>Company: Data Insights</Text>
          <Text>Location: Austin, TX</Text>
          <Text>Posted: 1 week ago</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;