import { createContext, ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useCustomSound } from '@/hooks/useCustomSound'

export interface ScrollPageControllerProps {
  children: ReactNode
}

export const ScrollPageContext = createContext({
  page: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setPage(page: number | ((p: number) => number), noPageUpdate: boolean) {},
})

export const ScrollPageController = ({ children }: ScrollPageControllerProps) => {
  const router = useRouter()
  const [page, setStatePage] = useState(0)
  const onPageChange = useCustomSound('scroll-beep-4')

  const setPage = (p: number | ((n: number) => number), noPageUpdate: boolean = false) => {
    setStatePage((n) => {
      if (typeof p === 'function') {
        const newN = p(n)
        if (!noPageUpdate) {
          // eslint-disable-next-line no-console
          router.push({ query: `page=${newN + 1}` }).catch(console.error)
        }
        return newN
      }

      if (!noPageUpdate) {
        // eslint-disable-next-line no-console
        router.push({ query: `page=${n + 1}` }).catch(console.error)
      }
      return n
    })
  }

  useEffect(onPageChange, [page])

  return <ScrollPageContext.Provider value={{ page, setPage }}>{children}</ScrollPageContext.Provider>
}
