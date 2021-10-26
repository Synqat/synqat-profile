import { useCookies } from 'react-cookie'

export const useSoundsEnabled = () => {
  const [{ allowSounds } = { allowSounds: 1 }, setCookies] = useCookies(['allowSounds'])

  return [!Number(allowSounds), (allow: boolean) => setCookies('allowSounds', String(Number(!allow)))] as const
}
