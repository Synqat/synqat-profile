import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ScrollPageContext } from '@/contollers/ScrollPageController'

export const useScrollPage = (pageLength: number) => {
  const router = useRouter()
  const { page, setPage } = useContext(ScrollPageContext)

  useEffect(() => {
    const listener = (url: string) => {
      const query = new URLSearchParams(url.split('?')[1])
      const pageS = query.get('page')
      const pageN = !Number.isNaN(pageS) && Number(pageS)
      if (pageN !== false) {
        const newPage = pageN - 1
        if (newPage >= 0 && newPage < pageLength) {
          setPage((p: number) => {
            if (p !== pageN - 1) {
              return pageN - 1
            }

            return p
          }, true)
        }
      }
    }

    router.events.on('routeChangeStart', listener)

    return () => router.events.off('routeChangeStart', listener)
  }, [])

  return [page, setPage] as const
}
