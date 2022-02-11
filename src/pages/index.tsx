import { Box, Center, HStack, Text, VStack } from '@chakra-ui/react'
import { memo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ArcballControls, PerspectiveCamera } from '@react-three/drei'
import * as Three from 'three'
import { Mesh } from 'three'
import { GradientText } from '@/components/GradientText'

const B = ({ p }: { p: [number, number, number] }) => {
  const box = useRef<Mesh>()

  useFrame(() => {
    if (box?.current) {
    }
  })

  return (
    <mesh ref={box} position={p}>
      <sphereGeometry args={[3, 100, 100]} />
      <texture minFilter={Three.LinearFilter} />
      <shaderMaterial
        wireframe
        defines={{
          v_Size: 2.0,
        }}
        vertexShader={`
varying vec3 vUv; 

void main() {
  vUv = position; 
  
  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * modelViewPosition; 
}
`}
        fragmentShader={`
float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);
    
    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
}

void main() {
    float samp = noise(vec2(gl_FragCoord.x, gl_FragCoord.y));
    gl_FragColor = vec4(samp, samp, samp, samp);
}
`}
      />
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
      <B p={[0, 0, 0]} />
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
              <Box color="ui.60">
                <GradientText strength={0.6} from="#ff3366" to="#ff3366">
                  Proudly employed at Top.gg
                </GradientText>
                <GradientText>Proudly employed at Top.gg</GradientText>
              </Box>
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
