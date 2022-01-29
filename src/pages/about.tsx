import { Box, Container, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { PageLayout } from '@/layouts/PageLayout'

const DATE_NOW = new Date()
const DATE_DOB = new Date('1998-11-27')
const MY_AGE_IN_YEARS = DATE_NOW.getFullYear() - DATE_DOB.getFullYear() - 1

const AboutPage = () => {
  return (
    <PageLayout>
      <Container as={VStack} h="full" spacing={8} flexGrow={1} align="stretch" justify="start" position="relative">
        <Heading py={2} color="text.100" fontSize="28px" fontFamily="Oldenburg">
          About Me
        </Heading>
        <VStack align="start" px={4}>
          <Heading py={2} color="text.60" fontSize="18px" fontFamily="Oldenburg">
            Who am I and what am I doing?
          </Heading>
          <Text fontSize="18px">
            I&apos;m a {MY_AGE_IN_YEARS}-year-old Website Engineer with a keen eye for design and a passion for building
            websites. I have a wide range of experience in software development on the web with old and new
            technologies. When I&apos;m not focused, working on websites, I&apos;m out enjoying the sea on my
            father&apos;s boat.
          </Text>
        </VStack>
        <VStack align="start" px={4}>
          <Heading py={2} color="text.60" fontSize="18px" fontFamily="Oldenburg">
            How did I get here?
          </Heading>
          <Text fontSize="18px">
            I started in humble beginnings asking myself, &apos;How can I do this myself?&apos;. One thing led to
            another, and I quickly found myself developing real websites for real people. Ironically, I initially
            started with just CSS and promptly shifted to creating applications in Discord using Node.JS. Until I
            finally worked my way up to React.JS, TypeScript, and all the modern technologies I know and use today. I
            owe a lot of thanks for the knowledge I&apos;ve gained to working with start-ups:{' '}
            <Link href="https://medal.tv" color="#ffb84b" target="_blank" rel="external">
              Medal.tv
            </Link>{' '}
            and{' '}
            <Link href="https://top.gg" color="#f63265" target="_blank" rel="external">
              Top.gg
            </Link>
            .
          </Text>
        </VStack>
        <VStack align="start" px={4}>
          <Heading py={2} color="text.60" fontSize="18px" fontFamily="Oldenburg">
            Where am I looking at going to next?
          </Heading>
          <Text fontSize="18px">
            I&apos;m looking to expand my knowledge further and grow into new and exciting positions. I have always had
            an eye for design but have never explored my options in that area. The future holds many unknown and wild
            possibilities; perhaps it will lead me to roads of design or other unique opportunities.
          </Text>
        </VStack>
        <VStack align="start" px={4}>
          <Heading py={2} color="text.60" fontSize="18px" fontFamily="Oldenburg">
            Who is{' '}
            <Text
              as="span"
              bgGradient="linear(to-r, brand.primary.100, brand.secondary.100)"
              sx={{
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
              }}
            >
              Synqat
            </Text>
            ?
          </Heading>
          <Text fontSize="18px">
            Synqat is the name of my online presence. It&apos;s a mix of &quot;Sync&quot; and &quot;Cat&quot; because I
            love cats and random out-of-place programming terminology (also apparently the letter &quot;Q&quot;).
          </Text>
        </VStack>
        <Heading py={2} color="text.100" fontSize="28px" fontFamily="Oldenburg">
          What am I doing now?
        </Heading>
        <VStack align="start" px={4}>
          <Heading py={2} color="text.60" fontSize="18px" fontFamily="Oldenburg">
            Employment
          </Heading>
          <Text fontSize="18px">
            I am currently building an extraordinary experience over at{' '}
            <Link href="https://top.gg" color="#f63265" target="_blank" rel="external">
              Top.gg
            </Link>
            .
          </Text>
        </VStack>
        <VStack align="start" px={4}>
          <Heading py={2} color="text.60" fontSize="18px" fontFamily="Oldenburg">
            Projects on the side
          </Heading>
          <Text fontSize="18px">
            In my spare time, I&apos;m working on a variety of projects. To name some of them:
            <Box as="ul" pl={8} py={2}>
              <li>
                Full-stack development @{' '}
                <Link color="#3269a8" href="https://joycem.net" target="_blank" rel="external">
                  JoyceM.net
                </Link>
              </li>
              <li>
                Design and component development @{' '}
                <Link color="#f44646" href="https://censor.bot" target="_blank" rel="external">
                  Censor Bot
                </Link>
              </li>
              <li>
                Contributions to the Chakra UI based library{' '}
                <Link
                  color="text.60"
                  _hover={{ color: 'text.100' }}
                  href="https://github.com/velddev/envelope"
                  target="_blank"
                  rel="external"
                >
                  Envelope
                </Link>
              </li>
              <li>This website</li>
            </Box>
          </Text>
        </VStack>
      </Container>
    </PageLayout>
  )
}

export default AboutPage
