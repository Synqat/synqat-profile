import { PropsWithChildren } from 'react'
import { Box, Center, CloseButton, Container, HStack, useBoolean } from '@chakra-ui/react'

export interface BannerProps extends PropsWithChildren<unknown> {
  isClosed?: boolean
  canClose?: boolean
}

const Banner = ({ isClosed: isClosedProp = false, canClose = false, children }: BannerProps) => {
  const [isClosed, isClosedState] = useBoolean(isClosedProp)

  return !children || isClosed ? null : (
    <Center bg="brand.primary.20" w="full" py={4}>
      <Container>
        <HStack w="full" justify="space-between">
          <Box>{children}</Box>
          {canClose && <CloseButton onClick={isClosedState.on} />}
        </HStack>
      </Container>
    </Center>
  )
}

export default Banner
