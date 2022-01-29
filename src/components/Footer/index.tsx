import { Center, Container } from '@chakra-ui/react'
import { memo } from 'react'

const Footer = () => (
  <Center bg="background.secondary" w="full">
    <Container py={8} />
  </Center>
)

export default memo(Footer)
