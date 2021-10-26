import { useContext, useEffect } from 'react'
import { AppStateContext } from '@/contollers/AppStateController'
import { useIsMobile } from '@/hooks/useIsMobile'

export const useAppState = () => {
  const isMobile = useIsMobile()
  const state = useContext(AppStateContext)

  useEffect(() => {
    if (!isMobile && state.mobileNav.isOpen) {
      state.mobileNav.off()
    }
  }, [isMobile])

  return state
}
