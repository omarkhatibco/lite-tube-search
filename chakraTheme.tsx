import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
} from '@chakra-ui/react';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const theme = extendTheme(
  {
    config,

    // fontWeights: {},
    colors: {
      red: {
        500: '#c00',
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'red' }),
  withDefaultProps({
    defaultProps: {
      // variant: 'flushed',
      size: 'lg',
    },
    components: [
      'Input',
      'NumberInput',
      'PinInput',
      'Textarea',
      'Select',
      'Slider',
      'Textarea',
    ],
  }),
);

// typeof window === 'object' && console.log(theme);

export type Theme = typeof theme;

export default theme;
