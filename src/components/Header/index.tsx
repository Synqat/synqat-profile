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
import { memo } from 'react'
import { useRouter } from 'next/router'
import { Link } from '@/components/Link'
import { MotionBox, transitionFastConfig } from '@/components/MotionBox'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useAppState } from '@/hooks/useAppState'

const HeaderButtonLink = forwardRef<{ href: string; index: number }, typeof Button>(
  ({ href, index, ...props }, ref) => {
    const router = useRouter()
    const isMobile = useIsMobile()
    const [isHovering, setHovering] = useBoolean(false)

    return (
      <Button
        px={6}
        as={Link}
        href={href}
        bg="transparent"
        rounded="sm"
        color="text.60"
        position="relative"
        _hover={{
          color: 'text.100',
          textDecoration: 'none',
        }}
        fontSize={[28, null, 18]}
        w={isMobile ? 'full' : 'auto'}
        onPointerEnter={() => {
          router.replace({ href: router.asPath, query: { _: index } }, undefined, { scroll: false })
          setHovering.on()
        }}
        onPointerLeave={() => {
          router.replace({ href: router.asPath, query: {} }, undefined, { scroll: false }).then(() => {
            setHovering.off()
          })
        }}
        {...props}
        ref={ref}
      >
        {(isHovering || `${href}?_=${index}` === router.asPath || href === router.asPath) && (
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
      <HStack mr={-4} p={4} spacing={0} h="full">
        <HeaderButtonLink index={0} href="/about">
          about
        </HeaderButtonLink>
        <HeaderButtonLink index={1} href="/showcase">
          showcase
        </HeaderButtonLink>
      </HStack>
    </Flex>
  </AnimateSharedLayout>
)

export interface HeaderProps {
  useHeaderSpacing?: boolean
}

const Header = ({ useHeaderSpacing = true }: HeaderProps) => {
  const router = useRouter()
  const isMobile = useIsMobile()
  const { mobileNav } = useAppState()

  const isHome = router.pathname === '/'

  return (
    <Box w="full" alignItems="start" minH={useHeaderSpacing ? 'header.height' : 0} pos="relative">
      <VStack left={0} zIndex={1} h="header.height" align="start" w="full" spacing={0} pos="fixed">
        <Center w="full" h="full" bg={isHome ? 'transparent' : 'background.primary'}>
          <Container h="full" as={HStack} align="stretch" justify="space-between">
            <HStack spacing={4} py={4} cursor="default">
              <Link href="/" rounded="md">
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
              </Link>
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

export default memo(Header)
