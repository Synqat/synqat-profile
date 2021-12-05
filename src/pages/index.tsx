import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Container,
  createIcon,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { AnimateSharedLayout, motion, useTransform, useViewportScroll } from 'framer-motion'
import { createRef, useEffect, useState } from 'react'
import { useInViewport } from 'react-in-viewport'
import { PageLayout } from '@/layouts/PageLayout'
import { MotionBox, MotionStack, transitionConfig, transitionFastConfig } from '@/components/MotionBox'

const LogoBackdrop = createIcon({
  viewBox: '0 0 200 200',
  path: (
    <path
      strokeWidth=".5px"
      fill="currentColor"
      d="M42.6,-50.2C45.5,-48.2,31.6,-25.7,28.1,-10.2C24.5,5.2,31.2,13.6,33.1,27.4C35,41.3,32.1,60.6,24.5,60.3C17,59.9,4.9,39.9,-11.6,33.2C-28,26.6,-48.9,33.4,-52.9,29.2C-56.9,25,-44,9.8,-41.5,-7.8C-39,-25.4,-46.9,-45.3,-41.7,-46.9C-36.5,-48.4,-18.3,-31.6,0.8,-32.5C19.8,-33.4,39.6,-52.1,42.6,-50.2Z"
      transform="translate(100 100)"
    />
  ),
})

const containerAnimations = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardChildAnimations = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1 },
}

interface InfoCardProps {
  imageSrc: string
  title: string
  description: string
}

const InfoCard = ({ imageSrc, title, description }: InfoCardProps) => {
  const ref = createRef<HTMLDivElement>()

  const { inViewport } = useInViewport(ref)

  return (
    <MotionBox
      ref={ref}
      variants={cardChildAnimations}
      transition={transitionConfig}
      animate={inViewport ? 'show' : 'hidden'}
    >
      <VStack align="start" spacing={2}>
        <AspectRatio boxSize="full" ratio={16 / 9}>
          <Image boxSize="full" loading="lazy" bg="ui.5" src={imageSrc} />
        </AspectRatio>
        <Box>
          <Text fontSize="20px" color="text.100">
            {title}
          </Text>
        </Box>
        <Box>
          <Text noOfLines={3} color="text.60">
            {description}
          </Text>
        </Box>
      </VStack>
    </MotionBox>
  )
}

const HomePage = () => {
  const { scrollYProgress } = useViewportScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const blobY = useTransform(scrollYProgress, [0, 0.2], [-412, -520])

  const strokePosMotion = useTransform(scrollYProgress, [0, 0.4, 0.8], [170, 0, -240])
  const strokeColorMotion = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.8],
    ['rgba(249, 129, 204, 1)', 'rgba(124, 221, 241, 1)', 'rgba(249, 129, 204, 1)', 'rgba(124, 221, 241, 1)'],
  )
  const [strokePos, setStrokePost] = useState(170)

  useEffect(() => {
    return strokePosMotion.onChange(setStrokePost)
  }, [])

  return (
    <PageLayout>
      <Container as={VStack} h="full" spacing={0} flexGrow={1} align="stretch" position="relative">
        <HStack align="start" boxSize="full" spacing={24}>
          <Box h="full" w="full" maxW="aside.width" flexShrink={0}>
            <Container zIndex={-1} left={0} right={0} mx="auto" position="fixed">
              <MotionBox
                zIndex={-1}
                top="-120px"
                left="-325px"
                boxSize="1000px"
                as={LogoBackdrop}
                position="absolute"
                style={{ y: blobY, stroke: strokeColorMotion }}
                color="background.secondary"
                sx={{
                  strokeDasharray: 210,
                  strokeDashoffset: strokePos,
                }}
              />
            </Container>
            <MotionBox style={{ opacity }}>
              <Text color="text.60">
                Hello world, I&apos;m a developer. My passion is building beautiful and efficient websites. My ability
                to learn is unlimited, and my knowledge; ever-expanding.
              </Text>
            </MotionBox>
          </Box>
          <SimpleGrid columns={2} spacing={4}>
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?a"
              title="Top.gg"
              description="About my current work at Top.gg!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?b"
              title="Medal.tv"
              description="About my previous work and experience at Medal.tv!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?c"
              title="Freelancing"
              description="My solo work and how I became what I am today"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?d"
              title="Learning"
              description="My experience through learning programming"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?a"
              title="Top.gg"
              description="About my current work at Top.gg!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?b"
              title="Medal.tv"
              description="About my previous work and experience at Medal.tv!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?c"
              title="Freelancing"
              description="My solo work and how I became what I am today"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?d"
              title="Learning"
              description="My experience through learning programming"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?a"
              title="Top.gg"
              description="About my current work at Top.gg!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?b"
              title="Medal.tv"
              description="About my previous work and experience at Medal.tv!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?c"
              title="Freelancing"
              description="My solo work and how I became what I am today"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?d"
              title="Learning"
              description="My experience through learning programming"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?a"
              title="Top.gg"
              description="About my current work at Top.gg!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?b"
              title="Medal.tv"
              description="About my previous work and experience at Medal.tv!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?c"
              title="Freelancing"
              description="My solo work and how I became what I am today"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?d"
              title="Learning"
              description="My experience through learning programming"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?a"
              title="Top.gg"
              description="About my current work at Top.gg!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?b"
              title="Medal.tv"
              description="About my previous work and experience at Medal.tv!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?c"
              title="Freelancing"
              description="My solo work and how I became what I am today"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?d"
              title="Learning"
              description="My experience through learning programming"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?a"
              title="Top.gg"
              description="About my current work at Top.gg!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?b"
              title="Medal.tv"
              description="About my previous work and experience at Medal.tv!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?c"
              title="Freelancing"
              description="My solo work and how I became what I am today"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?d"
              title="Learning"
              description="My experience through learning programming"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?a"
              title="Top.gg"
              description="About my current work at Top.gg!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?b"
              title="Medal.tv"
              description="About my previous work and experience at Medal.tv!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?c"
              title="Freelancing"
              description="My solo work and how I became what I am today"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?d"
              title="Learning"
              description="My experience through learning programming"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?a"
              title="Top.gg"
              description="About my current work at Top.gg!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?b"
              title="Medal.tv"
              description="About my previous work and experience at Medal.tv!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?c"
              title="Freelancing"
              description="My solo work and how I became what I am today"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?d"
              title="Learning"
              description="My experience through learning programming"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?a"
              title="Top.gg"
              description="About my current work at Top.gg!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?b"
              title="Medal.tv"
              description="About my previous work and experience at Medal.tv!"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?c"
              title="Freelancing"
              description="My solo work and how I became what I am today"
            />
            <InfoCard
              imageSrc="https://i.pravatar.cc/240?d"
              title="Learning"
              description="My experience through learning programming"
            />
          </SimpleGrid>
        </HStack>
        {/* <Box position="absolute" overflow="hidden" boxSize="full" inset={0}>
          {[...new Array(10)].map((_, i) => {
            const boxSize = `${Math.floor(Math.random() * 10)}00px`
            const randX = `${Math.floor(Math.random() * 10)}0vw`
            const randY = `${Math.floor(Math.random() * 10)}0vh`

            return (
              <Blob
                key={i}
                zIndex={-1}
                position="absolute"
                color="background.secondary"
                version={i as any}
                left={`calc(${randX} - ${boxSize})`}
                top={`calc(${randY} - ${boxSize})`}
                boxSize={boxSize}
              />
            )
          })}
        </Box> */}
      </Container>
    </PageLayout>
  )
}

export default HomePage
