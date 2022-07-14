import { ChakraProvider } from '@chakra-ui/react';
import theme from 'chakraTheme';
import { Layout } from 'components/system';

export const Providers: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>{children}</Layout>
    </ChakraProvider>
  );
};
