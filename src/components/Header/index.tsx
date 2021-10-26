import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
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
import { MotionBox, MotionStack, transitionFastConfig } from '@/components/MotionBox'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useAppState } from '@/hooks/useAppState'

const HeaderButtonLink = forwardRef<{ href: string }, typeof Button>(({ href, ...props }, ref) => {
  const isMobile = useIsMobile()
  const [isHovering, setHovering] = useBoolean(false)

  const onClick = useCustomSound('menu-beep-deeper')
  const onMouseEnter = useCustomSound('menu-beep-default')

  return (
    <Link
      h="full"
      w={isMobile ? 'full' : 'auto'}
      href={href}
      rel="external"
      target="_blank"
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Button
        onPointerEnter={setHovering.on}
        onPointerLeave={setHovering.off}
        as={Box}
        h="full"
        w={isMobile ? 'full' : 'auto'}
        px={6}
        py={isMobile ? 10 : 0}
        bg="transparent"
        _hover={{
          color: 'accent.1',
        }}
        rounded={0}
        fontSize={[28, null, 18]}
        onFocus={onClick}
        onMouseEnter={onMouseEnter}
        {...props}
        ref={ref}
        position="relative"
      >
        {isHovering && (
          <MotionBox
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transitionFastConfig}
            bg="ui.5"
            boxSize="full"
            position="absolute"
            pointerEvents="none"
            layoutId="header-button-hover"
          />
        )}
        <Text>{props.children}</Text>
      </Button>
    </Link>
  )
})

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const listItem = {
  hidden: { opacity: 0, y: 10, scale: 1.1 },
  show: { opacity: 1, y: 0, scale: 1 },
}

export const NavLinks = () => {
  const isMobile = useIsMobile()
  const { mobileNav } = useAppState()

  return (
    <AnimateSharedLayout type="crossfade">
      <Center boxSize="full">
        <MotionStack
          w="full"
          justify="end"
          h={isMobile ? 'auto' : 'full'}
          direction={isMobile ? 'column' : 'row'}
          spacing={0}
          px={isMobile ? 4 : 0}
          variants={container}
          initial="hidden"
          transition={transitionFastConfig}
          animate={mobileNav.isOpen || !isMobile ? 'show' : 'hidden'}
        >
          <MotionBox key={0} variants={listItem} transition={transitionFastConfig}>
            <HeaderButtonLink href="https://github.com/Synqat">GitHub</HeaderButtonLink>
          </MotionBox>
          <MotionBox key={1} variants={listItem} transition={transitionFastConfig}>
            <HeaderButtonLink href="https://twitter.com/Synqat">Twitter</HeaderButtonLink>
          </MotionBox>
          <MotionBox key={2} variants={listItem} transition={transitionFastConfig}>
            <HeaderButtonLink href="https://codepen.io/Synqat">CodePen</HeaderButtonLink>
          </MotionBox>
        </MotionStack>
      </Center>
    </AnimateSharedLayout>
  )
}

const Header = () => {
  const isMobile = useIsMobile()
  const { mobileNav } = useAppState()

  return (
    <Box w="full" minH="header.height" pos="relative">
      <VStack zIndex={1} h="header.height" align="start" w="full" spacing={0} backdropFilter="blur(20px)" pos="fixed">
        <Center w="full" h="full">
          <Container px={isMobile ? 4 : 0} h="full" as={HStack} align="stretch" justify="space-between">
            <HStack spacing={4} py={4} cursor="default">
              <Avatar bg="none" boxSize={10} src="/images/invert-pfp-plain.png" />
              <Heading color="text.100" noOfLines={1} fontFamily="Berkshire Swash">
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
