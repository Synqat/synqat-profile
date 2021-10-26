// eslint-disable-next-line no-restricted-imports
import NextLink from 'next/link'
// eslint-disable-next-line no-restricted-imports
import { forwardRef, Link as ChakraLink } from '@chakra-ui/react'

interface LinkProps {
  href: string
  isShallow?: boolean
}

export const Link = forwardRef<LinkProps, 'a'>(({ href, isShallow = true, ...props }, ref) => {
  if (!isShallow) {
    return <ChakraLink href={href} {...props} ref={ref} />
  }
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props} ref={ref} />
    </NextLink>
  )
})
