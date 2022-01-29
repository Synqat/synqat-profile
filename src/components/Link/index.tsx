// eslint-disable-next-line no-restricted-imports
import NextLink from 'next/link'
// eslint-disable-next-line no-restricted-imports
import { forwardRef, Link as ChakraLink } from '@chakra-ui/react'

interface LinkProps {
  href: string
}

export const Link = forwardRef<LinkProps, 'a'>(({ href, ...props }, ref) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink _hover={{ textDecoration: 'none' }} {...props} ref={ref} />
    </NextLink>
  )
})
