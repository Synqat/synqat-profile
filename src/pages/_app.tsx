import type { AppProps } from 'next/app'

import { CookiesProvider } from 'react-cookie'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { theme } from '@/theme'
import { ScrollPageController } from '@/contollers/ScrollPageController'
import { AppStateController } from '@/contollers/AppStateController'

const App = ({ Component }: AppProps) => {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <CookiesProvider>
        <AppStateController>
          <ScrollPageController>
            <Component />
          </ScrollPageController>
        </AppStateController>
      </CookiesProvider>
    </ChakraProvider>
  )
}

export default App
