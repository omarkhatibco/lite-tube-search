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
export const NextChakraButton: React.FC<NextChakraButtonProps> = ({
  href,
  replace,
  scroll,
  shallow,
  prefetch,
  children,

  ...chakraProps
}: NextChakraButtonProps) => {
  return (
    <NextLink
      passHref={true}
      href={href}
      replace={replace}
      shallow={shallow}
      prefetch={false}
    >
      <ChakraButton as='a' {...chakraProps}>
        {children}
      </ChakraButton>
    </NextLink>
  );
};
