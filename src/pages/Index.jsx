import { Container, Box, Heading, Text, VStack, HStack, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box as="header" textAlign="center" py={10}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to TechStartup
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Innovative solutions for modern businesses
          </Text>
        </Box>

        {/* Hero Section */}
        <Box as="section" textAlign="center" py={10}>
          <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNoJTIwc3RhcnR1cHxlbnwwfHx8fDE3MTc2Njg3NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Tech Startup" borderRadius="md" mb={6} />
          <Heading as="h2" size="xl" mb={4}>
            Empower Your Business with Our Cutting-Edge Technology
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={6}>
            Our platform offers a suite of tools designed to streamline your operations and drive growth.
          </Text>
          <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <Box as="section" py={10}>
          <Heading as="h3" size="lg" textAlign="center" mb={8}>
            Features
          </Heading>
          <HStack spacing={8} justify="center">
            <VStack spacing={4} align="center">
              <Image src="https://images.unsplash.com/photo-1699910618950-ed0b871c7fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMXxlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 1" boxSize="100px" borderRadius="full" />
              <Text fontSize="lg" fontWeight="bold">
                Feature One
              </Text>
              <Text textAlign="center" color="gray.600">
                Description of feature one that highlights its benefits and uses.
              </Text>
            </VStack>
            <VStack spacing={4} align="center">
              <Image src="https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwMnxlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 2" boxSize="100px" borderRadius="full" />
              <Text fontSize="lg" fontWeight="bold">
                Feature Two
              </Text>
              <Text textAlign="center" color="gray.600">
                Description of feature two that highlights its benefits and uses.
              </Text>
            </VStack>
            <VStack spacing={4} align="center">
              <Image src="https://images.unsplash.com/photo-1506544777-64cfbe1142df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZWF0dXJlJTIwM3xlbnwwfHx8fDE3MTc2NTYwOTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Feature 3" boxSize="100px" borderRadius="full" />
              <Text fontSize="lg" fontWeight="bold">
                Feature Three
              </Text>
              <Text textAlign="center" color="gray.600">
                Description of feature three that highlights its benefits and uses.
              </Text>
            </VStack>
          </HStack>
        </Box>

        {/* Footer Section */}
        <Box as="footer" textAlign="center" py={10} borderTop="1px" borderColor="gray.200">
          <Text fontSize="lg" mb={4}>
            Follow Us
          </Text>
          <HStack spacing={4} justify="center" mb={4}>
            <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
          </HStack>
          <Text fontSize="sm" color="gray.500">
            &copy; {new Date().getFullYear()} TechStartup. All rights reserved.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
