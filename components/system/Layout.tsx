import { Box, Container, Heading, Icon, VStack } from '@chakra-ui/react';
import { FaYoutube } from 'react-icons/fa';

export const Layout = ({ children }) => {
  return (
    <Box>
      <Container maxW={'container.lg'} py={16}>
        <VStack>
          <Icon as={FaYoutube} fontSize={'6xl'} color='red.500' />
          <Heading as='h1' color='red.500'>
            Youtube Light Search
          </Heading>
        </VStack>
        <VStack py={8} align='stretch'>
          {children}
        </VStack>
      </Container>
    </Box>
  );
};
