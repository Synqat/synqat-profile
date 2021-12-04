import { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { Box, Spinner, VStack } from '@chakra-ui/react'

const loading = () => <Spinner color="brand.primary.100" boxSize={8} />

const Header = dynamic(() => import('@/components/Header'), { loading })
const Footer = dynamic(() => import('@/components/Footer'), { loading })

interface PageLayoutProps {
  banner?: ReactNode
  header?: ReactNode
  footer?: ReactNode
  children: ReactNode
  hasFooter?: boolean
  hasHeader?: boolean
}

export const PageLayout = ({
  banner,
  header = <Header />,
  children,
  footer = <Footer />,
  hasFooter = true,
  hasHeader = true,
}: PageLayoutProps) => (
  <Box boxSize="full" >
    <VStack boxSize="full" spacing={0} align="center" justify="space-between" position="relative">
      {banner}
      {hasHeader && header}
      {children}
      {hasFooter && footer}
    </VStack>
  </Box>
)
