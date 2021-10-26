import { useBreakpoint } from '@chakra-ui/react'

export const useIsMobile = () => {
  const breakpoint = useBreakpoint()
  return ['base', 'sm'].includes(breakpoint ?? 'base')
}
