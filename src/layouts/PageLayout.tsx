import { ReactNode, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { Box, Flex, Spinner, useBoolean, usePrevious, VStack } from '@chakra-ui/react'
import { useSwipeable } from 'react-swipeable'
import { SideNav } from '@/components/SideNav'
import { useScrollPage } from '@/hooks/useScrollPage'
import { MotionBox, MotionStack, transitionConfig, transitionFastConfig } from '@/components/MotionBox'
import { VolumeToggle } from '@/components/VolumeToggle'
import { useIsMobile } from '@/hooks/useIsMobile'
import { clamp } from '@/utils/clamp'
import { theme } from '@/theme'
import { useAppState } from '@/hooks/useAppState'
import { NavLinks } from '@/components/Header'

const loading = () => <Spinner color="brand.primary.100" boxSize={8} />

const Header = dynamic(() => import('@/components/Header'), { loading })
const Footer = dynamic(() => import('@/components/Footer'), { loading })

interface PageLayoutProps {
  banner?: ReactNode
  header?: ReactNode
  pages: ReactNode[]
  footer?: ReactNode
  hasFooter?: boolean
  hasHeader?: boolean
}

const PAGE_SCROLL_PADDING = 80
const PAGE_SCROLL_SWIPE_LIMIT = 200

const PageScrollManager = ({ pages }: Pick<PageLayoutProps, 'pages'>) => {
  const isMobile = useIsMobile()
  const { mobileNav } = useAppState()
  const wasMobile = usePrevious(isMobile)
  const [page, setPage] = useScrollPage(pages.length)
  const [isSwiping, setSwiping] = useBoolean(false)
  const [pageOffset, setPageOffset] = useState(0)

  const handlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    onSwiping: (e) => {
      if (isSwiping && isMobile) {
        setPageOffset(clamp(e.deltaX, -PAGE_SCROLL_SWIPE_LIMIT, PAGE_SCROLL_SWIPE_LIMIT))
      }
    },
    onSwipeStart: (e) => {
      const dir = e.dir.toLowerCase()
      if (['left', 'right'].includes(dir) && isMobile) {
        setSwiping.on()
      }
    },
    onSwiped: (e) => {
      const dir = e.dir.toLowerCase()
      if (
        ['left', 'right'].includes(dir) &&
        isMobile &&
        (pageOffset < -PAGE_SCROLL_PADDING || PAGE_SCROLL_PADDING < pageOffset)
      ) {
        setPage((p: number) => {
          const inc = dir === 'left' ? p + 1 : p - 1

          if (inc >= 0 && inc < pages.length) {
            return inc
          }
          return p
        }, false)
      }
      setPageOffset(() => {
        setSwiping.off()
        return 0
      })
    },
  })

  useEffect(() => {
    const listener = (e: TouchEvent | Event) => {
      e.preventDefault()
      e.stopPropagation()
    }

    if (isMobile) {
      document.body.addEventListener('scroll', listener)
      document.body.addEventListener('touchstart', listener)
      document.body.addEventListener('touchmove', listener)
    }

    const resetEvents = () => {
      document.body.addEventListener('scroll', listener)
      document.body.removeEventListener('touchstart', listener)
      document.body.removeEventListener('touchmove', listener)
    }

    if (wasMobile && !isMobile) {
      resetEvents()
    }

    return resetEvents
  }, [wasMobile, isMobile, pages.length])

  useEffect(() => {
    const listener = (event: WheelEvent) => {
      setPage((p: number) => {
        const inc = event.deltaY > 0 ? p + 1 : p - 1
        if (inc >= 0 && inc < pages.length) {
          return inc
        }
        return p
      }, false)
    }

    if (!isMobile) {
      window.addEventListener('wheel', listener)
    }

    const resetEvents = () => window.removeEventListener('wheel', listener)

    if (!wasMobile && isMobile) {
      resetEvents()
    }

    return resetEvents
  }, [wasMobile, isMobile, pages.length])

  return (
    <MotionStack
      d="flex"
      p={0}
      m={0}
      spacing={0}
      boxSize="full"
      direction={isMobile ? 'row' : 'column'}
      animate={{ [isMobile ? 'translateX' : 'translateY']: `calc(-${page * 100}% + ${pageOffset}px)` }}
      transition={transitionConfig}
      {...handlers}
    >
      {pages.map((pageNode: ReactNode, key: number) => (
        <MotionBox
          key={key}
          as={Flex}
          position="relative"
          pb="header.height"
          maxH="100vh"
          minH="100vh"
          maxW="100vw"
          minW="100vw"
          alignItems="stretch"
          justifyItems="stretch"
          overflowX="hidden"
          overflowY={isMobile ? 'auto' : 'hidden'}
          transition={transitionFastConfig}
          pointerEvents={mobileNav.isOpen ? 'none' : 'all'}
          animate={{
            y: mobileNav.isOpen ? -10 : 0,
            opacity: Number(!mobileNav.isOpen),
            scale: !mobileNav.isOpen ? 1 : 0.95,
          }}
        >
          {pageNode}
        </MotionBox>
      ))}
    </MotionStack>
  )
}

export const PageLayout = ({
  banner,
  header = <Header />,
  pages,
  footer = <Footer />,
  hasFooter = true,
  hasHeader = true,
}: PageLayoutProps) => {
  const isMobile = useIsMobile()
  const { mobileNav } = useAppState()

  return (
    <Box boxSize="full" overflow="hidden">
      <VStack boxSize="full" spacing={0} align="center" justify="space-between" position="relative">
        {banner}
        {hasHeader && header}
        {isMobile && (
          <MotionBox
            inset={0}
            zIndex={1}
            w="full"
            pos="fixed"
            pb="header.height"
            top="header.height"
            h={`calc(100vh - ${theme.sizes.header.height})`}
            transition={transitionFastConfig}
            pointerEvents={mobileNav.isOpen ? 'all' : 'none'}
            animate={{
              y: mobileNav.isOpen ? 0 : 10,
              opacity: Number(mobileNav.isOpen),
              scale: mobileNav.isOpen ? 1 : 0.95,
            }}
          >
            <NavLinks />
          </MotionBox>
        )}
        <PageScrollManager pages={pages} />
        {hasFooter && footer}
      </VStack>
      {!mobileNav.isOpen && (
        <>
          <SideNav pageLength={pages.length} />
          <VolumeToggle />
        </>
      )}
    </Box>
  )
}
