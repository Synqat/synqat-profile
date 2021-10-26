import useSound from 'use-sound'
import { useSoundsEnabled } from '@/hooks/useSoundsEnabled'

export const useCustomSound = (soundName: string, forcePlay: boolean = false) => {
  const [soundsEnabled] = useSoundsEnabled()

  const [play] = useSound(`/sounds/${soundName}.wav`, { volume: 0.025, interrupt: false })

  if (soundsEnabled || forcePlay) {
    return () => play()
  }

  return () => null
}
