import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

export type NextChakraButtonProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraButtonProps, 'as'>
>;

//  Has to be a new component because both chakra and next share the `as` keyword
export const NextChakraButton = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  ...chakraProps
}: NextChakraButtonProps) => {
  return (
    <ChakraButton
      as={NextLink}
      passHref={true}
      href={href}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={false}
      {...chakraProps}
    >
      {children}
    </ChakraButton>
  );
};
