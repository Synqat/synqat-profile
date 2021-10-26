import { useRouter } from 'next/router'

export const useQueryPageNumber = () => {
  const { query } = useRouter()
  const queryN = !Number.isNaN(query.page) && Number(query.page)
  return [queryN, queryN && queryN - 1] as const
}
