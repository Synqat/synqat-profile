import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  forwardRef,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  useBoolean,
  VStack,
} from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from '@/components/Link'
import { useCustomSound } from '@/hooks/useCustomSound'
import { MotionBox, transitionFastConfig } from '@/components/MotionBox'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useAppState } from '@/hooks/useAppState'

const HeaderButtonLink = forwardRef<{ href: string; index: number }, typeof Button>(
  ({ href, index, ...props }, ref) => {
    const isMobile = useIsMobile()
    const [isHovering, setHovering] = useBoolean(false)

    const onClick = useCustomSound('menu-beep-deeper')
    const onMouseEnter = useCustomSound('menu-beep-default')

    return (
      <Button
        px={6}
        as={Link}
        href={href}
        rel="external"
        target="_blank"
        bg="transparent"
        rounded="sm"
        color="text.60"
        onFocus={onClick}
        position="relative"
        _hover={{
          color: 'text.100',
          textDecoration: 'none',
        }}
        fontSize={[28, null, 18]}
        onMouseEnter={onMouseEnter}
        w={isMobile ? 'full' : 'auto'}
        onPointerEnter={setHovering.on}
        onPointerLeave={setHovering.off}
        {...props}
        ref={ref}
      >
        {isHovering && (
          <MotionBox
            inset={0}
            rounded="sm"
            boxSize="full"
            overflow="hidden"
            position="absolute"
            pointerEvents="none"
            bg="background.secondary"
            layoutId="header-button-hover"
            transition={transitionFastConfig}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
          />
        )}
        <Text zIndex={2} fontWeight="light">
          {props.children}
        </Text>
      </Button>
    )
  },
)

export const NavLinks = () => (
  <AnimateSharedLayout type="crossfade">
    <Flex w="full" justify="end">
      <HStack mr={-4} p={4} spacing={0} rounded="md" h="full" backdropFilter="blur(20px)">
        <HeaderButtonLink index={0} href="https://github.com/Synqat">
          github
        </HeaderButtonLink>
        <HeaderButtonLink index={1} href="https://twitter.com/Synqat">
          twitter
        </HeaderButtonLink>
        <HeaderButtonLink index={2} href="https://codepen.io/Synqat">
          codepen
        </HeaderButtonLink>
      </HStack>
    </Flex>
  </AnimateSharedLayout>
)

const Header = () => {
  const isMobile = useIsMobile()
  const { mobileNav } = useAppState()

  return (
    <Box w="full" minH="header.height" pos="relative">
      <VStack zIndex={1} h="header.height" align="start" w="full" spacing={0} pos="fixed">
        <Center w="full" h="full">
          <Container h="full" as={HStack} align="stretch" justify="space-between">
            <HStack spacing={4} py={4} cursor="default">
              <Heading
                py={2}
                color="text.100"
                fontSize="48px"
                fontFamily="Oldenburg"
                bgGradient="linear(to-r, brand.primary.100, brand.secondary.100)"
                sx={{
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}
              >
                Synqat
              </Heading>
            </HStack>
            {isMobile ? (
              <Box py={4} px={0}>
                <IconButton
                  overflow="hidden"
                  aria-label="Header Links"
                  icon={
                    <Center pos="relative">
                      <MotionBox
                        style={{ y: 0 }}
                        pos="absolute"
                        animate={{
                          scale: Number(mobileNav.isOpen),
                          opacity: Number(mobileNav.isOpen),
                          y: mobileNav.isOpen ? 0 : 50,
                        }}
                        transition={transitionFastConfig}
                      >
                        <Icon as={FaTimes} boxSize={5} onClick={mobileNav.toggle} />
                      </MotionBox>
                      <MotionBox
                        style={{ y: 0 }}
                        pos="absolute"
                        animate={{
                          scale: Number(!mobileNav.isOpen),
                          opacity: Number(!mobileNav.isOpen),
                          y: mobileNav.isOpen ? -50 : 0,
                        }}
                        transition={transitionFastConfig}
                      >
                        <Icon as={FaBars} boxSize={5} onClick={mobileNav.toggle} />
                      </MotionBox>
                    </Center>
                  }
                />
              </Box>
            ) : (
              <NavLinks />
            )}
          </Container>
        </Center>
      </VStack>
    </Box>
  )
}

export default Header
