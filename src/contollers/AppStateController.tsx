import { createContext, ReactNode } from 'react'
import { useBoolean } from '@chakra-ui/react'

interface AppState {
  mobileNav: { isOpen: boolean; on: () => void; off: () => void; toggle: () => void }
}

export const AppStateContext = createContext<AppState>({
  mobileNav: {
    isOpen: false,
    on() {},
    off() {},
    toggle() {},
  },
})

interface AppStateControllerProps {
  children: ReactNode
}

export const AppStateController = ({ children }: AppStateControllerProps) => {
  const [isMobileNavOpen, mobileNavState] = useBoolean(false)

  const mobileNav = {
    ...mobileNavState,
    isOpen: isMobileNavOpen,
  }

  return <AppStateContext.Provider value={{ mobileNav }}>{children}</AppStateContext.Provider>
}
