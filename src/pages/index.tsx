import { Avatar, Box, Center, Container, HStack, Image, Text, Tooltip, VStack } from '@chakra-ui/react'
import { PageLayout } from '@/layouts/PageLayout'
import { Link } from '@/components/Link'
import { useCustomSound } from '@/hooks/useCustomSound'
import { useIsMobile } from '@/hooks/useIsMobile'

const TopggLink = () => {
  const onTooltipHover = useCustomSound('menu-beep-highest-lower-verb')

  return (
    <Link target="_blank" rel="external" href="https://top.gg" color="#ff3366" onPointerEnter={onTooltipHover}>
      <Tooltip
        p={4}
        bg="#070510"
        rounded="lg"
        placement="top"
        border="1px solid #16141e"
        label={<Image rounded="md" src="/images/top-gg-print.png" />}
      >
        Top.gg
      </Tooltip>
    </Link>
  )
}

const HomePage = () => {
  const isMobile = useIsMobile()

  return (
    <PageLayout
      hasFooter={false}
      pages={[
        <Container flexGrow={1} py={10} pb={20} px={4}>
          <Box
            inset={0}
            zIndex={-1}
            opacity={0.4}
            bgSize="cover"
            boxSize="full"
            pos="absolute"
            h="100vh"
            bgImage="/images/blurred-bg.jpg"
            bgPos="0 100px"
          >
            <Box
              boxSize="full"
              backdropFilter="blur(0px) grayscale(100%)"
              bgGradient="linear(to-t, background.primary 8%, transparent, background.primary 54%)"
            />
          </Box>
          <VStack as={Center} boxSize="full" spacing={10}>
            <Center>
              <Avatar alt="Synqat" src="/images/cat.jpg" boxSize="main-profile-size" />
            </Center>
            <Center>
              <VStack spacing={2} color="text.80" fontSize={22} textAlign="center">
                <Text>Hello.</Text>
                <Text>
                  I&apos;m a{' '}
                  <Text as="span" fontSize={24} fontFamily="Berkshire Swash">
                    Front-end Engineer
                  </Text>
                </Text>
                <Text>I have a wide range of skills and hobbies, most of which involve making websites shine</Text>
              </VStack>
            </Center>
            {/* <Center boxSize="full">
              <VStack boxSize="full" spacing={10}>
                <Stack w="full" spacing={10} direction={['column', null, 'row']}>
                  <VStack w="full" spacing={4}>
                    <Text fontSize={[28, null, 24]} fontFamily="Berkshire Swash">
                      Current Side-project
                    </Text>
                    <AspectRatio maxW="full" w="full" ratio={16 / 9}>
                      <Image w="full" bg="ui.025" rounded="sm" alt="Some Code" src="/images/current-side-project.png" />
                    </AspectRatio>
                  </VStack>
                  <VStack w="full" spacing={4}>
                    <Text fontSize={[28, null, 24]} fontFamily="Berkshire Swash">
                      Showcase
                    </Text>
                    <AspectRatio maxW="full" w="full" ratio={16 / 9} rounded="sm" bg="ui.025">
                      <Text>test</Text>
                    </AspectRatio>
                  </VStack>
                </Stack>
              </VStack>
            </Center> */}
            <Center>
              {isMobile ? (
                <TopggLink />
              ) : (
                <HStack spacing={1} color="text.60">
                  {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  <Text color="text.100" as="span" role="img">
                    🎉🎉
                  </Text>
                  <Text>Currently employed by</Text>
                  <TopggLink />
                  {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
                  <Text color="text.100" as="span" role="img">
                    🎉🎉
                  </Text>
                </HStack>
              )}
            </Center>
          </VStack>
        </Container>,
        <Container boxSize="full">
          <Center boxSize="full">
            <Text fontSize="28px" fontFamily="Berkshire Swash">
              More Coming Soon
            </Text>
          </Center>
        </Container>,
        <Container boxSize="full">
          <Center boxSize="full">
            <VStack>
              <Text fontSize="28px" fontFamily="Berkshire Swash">
                Want to contribute?
              </Text>
              <Link href="https://github.com/Synqat">
                <Text spacing={2} fontSize="28px" color="brand.primary.100">
                  Check out my GitHub
                </Text>
              </Link>
            </VStack>
          </Center>
        </Container>,
      ]}
    />
  )
}

export default HomePage
