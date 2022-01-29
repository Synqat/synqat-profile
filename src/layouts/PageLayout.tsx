import { memo, ReactNode, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { Box, Center, Spinner, useBoolean, VStack } from '@chakra-ui/react'
import { useAnimation } from 'framer-motion'
import Particles, { Container } from 'react-tsparticles'
import { useRouter } from 'next/router'
import { MotionBox, transitionConfig } from '@/components/MotionBox'

const loading = () => <Spinner color="brand.primary.100" boxSize={8} />

const Header = dynamic(() => import('@/components/Header'), { loading })
const Footer = dynamic(() => import('@/components/Footer'), { loading })

interface PageLayoutProps {
  header?: ReactNode
  footer?: ReactNode
  children: ReactNode
  hasFooter?: boolean
  hasHeader?: boolean
  useHeaderSpacing?: boolean
}

const Bubbles = memo(() => {
  const router = useRouter()
  const ref = useRef<Container | null>(null)

  useEffect(() => {
    return router.events.on('routeChangeStart', () => {
      if (!ref.current?.destroyed && router.pathname !== '/') {
        ref.current?.destroy()
      }
    })
  }, [router.pathname])

  return (
    <Box zIndex={-1} position="absolute" opacity={Number(router.pathname === '/')}>
      <Particles
        container={ref}
        options={{
          fpsLimit: 60,
          autoPlay: true,
          fullScreen: true,
          particles: {
            color: {
              value: '#292434',
            },
            number: {
              value: 100,
            },
            opacity: {
              value: 1,
            },
            move: {
              enable: true,
              random: true,
              speed: 0.2,
              direction: 'none',
            },
            shape: {
              type: 'triangle',
            },
            size: {
              value: 200,
            },
          },
        }}
      />
    </Box>
  )
})

export const PageLayout = ({
  useHeaderSpacing,
  header,
  children,
  footer = <Footer />,
  hasFooter = true,
  hasHeader = true,
}: PageLayoutProps) => {
  const [isLoading, setIsLoading] = useBoolean(false)
  const overflowControls = useAnimation()
  const footerControls = useAnimation()

  const defaultHeader = <Header useHeaderSpacing={useHeaderSpacing ?? !isLoading} />

  const animateInHandler = () => {
    setIsLoading.on()
    overflowControls.start({ overflow: 'hidden' })
    footerControls
      .start({
        opacity: 0,
        y: 120,
      })
      .then(() => window.scrollTo(0, 0))
      .then(() => {
        setIsLoading.off()
        footerControls
          .start({
            opacity: 1,
            y: 0,
          })
          .then(() => {
            overflowControls.start({ overflow: 'inherit' })
          })
      })
  }

  useEffect(() => {
    animateInHandler()
  }, [])

  return (
    <MotionBox boxSize="full" minH="full" animate={overflowControls} transition={{ duration: 0 }}>
      <VStack boxSize="full" minH="full" spacing={0} align="center" justify="space-between" position="relative">
        {hasHeader ? header || defaultHeader : <Box />}
        {isLoading && (
          <Center>
            <Spinner boxSize={16} color="brand.primary.100" />
          </Center>
        )}
        {!isLoading && (
          <MotionBox px={4} py={8} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={transitionConfig}>
            {children}
          </MotionBox>
        )}
        {hasFooter ? (
          <MotionBox animate={footerControls} transition={transitionConfig} w="full">
            {footer}
          </MotionBox>
        ) : (
          <Box />
        )}
      </VStack>
    </MotionBox>
  )
}
