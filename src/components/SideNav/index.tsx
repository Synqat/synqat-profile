import { Box, Center, chakra, forwardRef, Stack, StackProps, useToken } from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion'
import { useEffect } from 'react'
import { MotionBox } from '@/components/MotionBox'
import { useScrollPage } from '@/hooks/useScrollPage'
import { useQueryPageNumber } from '@/hooks/useQueryPageNumber'
import { useCustomSound } from '@/hooks/useCustomSound'
import { useIsMobile } from '@/hooks/useIsMobile'

export interface SideNavProps {
  pageLength: number
}

const Circle = chakra(Box, {
  baseStyle: {
    boxSize: 4,
    bg: 'ui.20',
    rounded: 'full',
    cursor: 'pointer',
  },
})

export const SideNav = forwardRef<SideNavProps, typeof Center>(({ pageLength, ...props }, ref) => {
  const isMobile = useIsMobile()
  const [queryN, queryNAdjusted] = useQueryPageNumber()
  const [page, setPage] = useScrollPage(pageLength)
  const onHover = useCustomSound('menu-beep-highest-verb')

  useEffect(() => {
    if (queryN && queryNAdjusted && queryNAdjusted !== page) {
      if (queryNAdjusted > 0 && queryNAdjusted < pageLength) {
        setPage(() => queryNAdjusted, true)
      }
    }
  }, [])

  const dots = [...Array(pageLength)]

  const white = 'rgba(255, 255, 255, 1)'
  const lightWhite = 'rgba(255, 255, 255, .2)'
  const transparentWhite = 'rgba(255, 255, 255, 0)'

  const dotBoxShadow = `inset 0 0 4px 2px ${lightWhite}`

  const navProps: StackProps = isMobile
    ? {
        w: 'full',
        mx: 'auto',
        insetX: 0,
        insetBlockEnd: 0,
      }
    : {
        h: 'full',
        my: 'auto',
        insetY: 0,
        insetStart: 0,
      }

  return (
    <Center p={9} boxSize={0} position="fixed" {...navProps} {...props} ref={ref}>
      <AnimateSharedLayout>
        <Stack spacing={8} align="end" direction={isMobile ? 'row' : 'column'}>
          {dots.map((_: any, i: number) => (
            <Circle
              key={i}
              onMouseEnter={onHover}
              _hover={{ shadow: '0 0 0 2px white' }}
              onClick={() => setPage(() => i, false)}
            >
              {i === page && (
                <MotionBox
                  layoutId="sidenav-circle"
                  boxSize="full"
                  rounded="full"
                  bg="ui.100"
                  animate={{
                    backgroundColor: [lightWhite, lightWhite, lightWhite, white],
                    boxShadow: [
                      `${dotBoxShadow}, 0 0 0 2px ${white}`,
                      `${dotBoxShadow}, 0 0 0 2px ${white}`,
                      `${dotBoxShadow}, 0 0 0 2px ${white}`,
                      `${dotBoxShadow}, 0 0 0 6px ${transparentWhite}`,
                    ],
                    scale: [1, 2, 2, 2, 1, 1],
                  }}
                />
              )}
            </Circle>
          ))}
        </Stack>
      </AnimateSharedLayout>
    </Center>
  )
})
