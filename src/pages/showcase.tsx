import { Center, Container, Text, VStack } from '@chakra-ui/react'
import { PageLayout } from '@/layouts/PageLayout'

const ShowcasePage = () => {
  return (
    <PageLayout>
      <Container as={VStack} h="full" spacing={0} flexGrow={1} align="stretch" position="relative">
        <Center boxSize="full">
          <VStack align="start">
            <Text>show case</Text>
          </VStack>
        </Center>
      </Container>
    </PageLayout>
  )
}

export default ShowcasePage
