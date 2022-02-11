import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react'
import { memo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ArcballControls, PerspectiveCamera } from '@react-three/drei'
import * as Three from 'three'
import { Mesh } from 'three'
import { GradientText } from '@/components/GradientText'

const B = ({ p, size }: { p: [number, number, number]; size: number }) => {
  const box = useRef<Mesh>()

  useFrame(() => {
    if (box?.current) {
      box.current.rotation.x += Math.random() * size * 0.005
    }
  })

  return (
    <mesh ref={box} position={p}>
      <boxGeometry args={[size, size, size]} />
      <texture minFilter={Three.LinearFilter} />
      <meshToonMaterial wireframe color="pink" />
    </mesh>
  )
}

const Render = () => {
  return (
    <>
      <ArcballControls />
      <PerspectiveCamera makeDefault position={[-5.56, 2.84, -5.15]} rotation={[-2.69, -0.68, -2.818]}>
        <pointLight intensity={1} />
      </PerspectiveCamera>
      <ambientLight intensity={0.1} />
      <B p={[0, 0, 0]} size={1} />
      <B p={[0, 0, 0]} size={2} />
      <B p={[0, 0, 0]} size={3} />
      <B p={[0, 0, 0]} size={4} />
      <B p={[0, 0, 0]} size={5} />
    </>
  )
}

const HomePage = () => {
  return (
    <VStack boxSize="full" bgGradient="linear(to-tr, background.dark.blue, background.dark.red)" pos="relative">
      <Box
        opacity={0.4}
        zIndex={10}
        pointerEvents="none"
        pos="absolute"
        inset={0}
        boxSize="full"
        bgImage="/noise.jpg"
        mixBlendMode="multiply"
      />
      <Center boxSize="full" p={20}>
        <HStack>
          <VStack w="half" align="start" spacing={16}>
            <VStack align="start" spacing={4}>
              <GradientText fontSize="84px">Synqat</GradientText>
              <Text color="ui.60" fontSize="28px">
                Design and development enthusiast with a passion for creating beautiful and intuitive user experiences.
              </Text>
            </VStack>
            <VStack align="start" spacing={4}>
              <Text color="ui.100" fontSize="20px">
                About Me
              </Text>
              <HStack>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
                <Box color="ui.60">
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                    Proudly employed at Top.gg
                  </GradientText>
                  <GradientText>Proudly employed at Top.gg</GradientText>
                </Box>
              </HStack>
            </VStack>
            <VStack align="start" spacing={4}>
              <Text color="ui.100" fontSize="20px">
                About Me
              </Text>
              <GradientText>{}</GradientText>
            </VStack>
          </VStack>
          <Box boxSize="half">
            <Box my="auto" h="400px" pos="absolute" right={0} top={0} bottom={0} w="half">
              <Box pos="absolute" inset={0} boxSize="full" filter="blur(6rem)" bgGradient="linear(to-tr, blue, red)" />
              <Canvas style={{ zIndex: 20, height: '100%', width: '100%' }}>
                <Render />
              </Canvas>
            </Box>
          </Box>
        </HStack>
      </Center>
    </VStack>
  )
}

export default memo(HomePage)
