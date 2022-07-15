import { ChakraProvider } from '@chakra-ui/react';
import theme from 'chakraTheme';
import { Layout } from 'components/system';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

export const Providers: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Layout>{children}</Layout>
      </ChakraProvider>
    </QueryClientProvider>
  );
};
