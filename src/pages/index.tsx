import { Box, Center, HStack, Text, useBoolean, VStack, Wrap } from '@chakra-ui/react'
import { memo } from 'react'
import Particles from 'react-tsparticles'
import { MotionBox, transitionFastConfig } from '@/components/MotionBox'
import { theme } from '@/theme'
import { Link } from '@/components/Link'

const COLORS = {
  THEME_1: theme.colors.brand.primary['100'],
  THEME_2: theme.colors.brand.secondary['100'],
}

const Letter = ({ letter, color, onClick }: { letter: string; color: string; onClick?(): void }) => (
  <MotionBox
    pos="relative"
    fontSize="96px"
    cursor="default"
    transition={transitionFastConfig}
    color={color}
    whileHover={{
      color,
    }}
  >
    <MotionBox
      as={Text}
      inset={0}
      zIndex={1}
      boxSize="full"
      pos="absolute"
      fontSize="96px"
      color="ui.80"
      transition={transitionFastConfig}
      textShadow={`${color} 0 0 50px`}
      style={{ opacity: 0 }}
      whileHover={{
        opacity: 1,
      }}
      className={letter === 'q' ? 'shake-hard' : 'shake'}
      {...(letter === 'q'
        ? { as: Link, href: 'https://github.com/Synqat', onClick, cursor: 'pointer' }
        : { cursor: 'default' })}
    >
      {letter}
    </MotionBox>
    <Text as="span">{letter}</Text>
  </MotionBox>
)

const HomePage = () => {
  const [isClicked, setIsClicked] = useBoolean(false)
  return (
    <VStack className={isClicked ? 'shake-hard' : ''} boxSize="full" bg="background.secondary">
      <Box flexGrow={1} />
      <Box flexShrink={0} pos="relative" w="full" h="240px" bg="background.primary">
        <Center pos="absolute" inset={0} m="auto">
          <Letter letter="S" color={COLORS.THEME_1} />
          <Letter letter="y" color={COLORS.THEME_2} />
          <Letter letter="n" color={COLORS.THEME_1} />
          <Letter letter="q" color={COLORS.THEME_2} onClick={setIsClicked.on} />
          <Letter letter="a" color={COLORS.THEME_1} />
          <Letter letter="t" color={COLORS.THEME_2} />
        </Center>
        <Particles
          style={{
            position: 'absolute',
          }}
          options={{
            fpsLimit: 60,
            autoPlay: true,
            fullScreen: false,
            pauseOnOutsideViewport: true,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
              modes: {
                repulse: {
                  distance: 160,
                  speed: 0.02,
                },
              },
            },
            particles: {
              color: {
                value: '#383147',
              },
              stroke: {
                color: '#292434',
                width: 4,
              },
              number: {
                value: 200,
              },
              opacity: {
                value: 1,
              },
              move: {
                enable: true,
                speed: 0.1,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: 16,
              },
            },
          }}
        />
      </Box>
      <Box flexGrow={1} />
    </VStack>
  )
}

export default memo(HomePage)
