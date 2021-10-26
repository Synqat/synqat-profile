import { Box, Icon, IconButton } from '@chakra-ui/react'
import { FaVolumeOff, FaVolumeUp } from 'react-icons/fa'
import { useCustomSound } from '@/hooks/useCustomSound'
import { useSoundsEnabled } from '@/hooks/useSoundsEnabled'

export const VolumeToggle = () => {
  const onVolumeEnable = useCustomSound('menu-beep-default', true)
  const onVolumeDisable = useCustomSound('menu-beep-deeper', true)
  const onVolumeHover = useCustomSound('menu-beep-higher')
  const [soundsEnabled, setSoundsEnabled] = useSoundsEnabled()

  return (
    <Box position="absolute" insetEnd={4} insetBlockEnd={4}>
      <IconButton
        aria-label="Disable Sounds"
        icon={<Icon as={soundsEnabled ? FaVolumeUp : FaVolumeOff} />}
        onMouseEnter={onVolumeHover}
        onClick={() => {
          if (soundsEnabled) {
            onVolumeDisable()
          } else {
            onVolumeEnable()
          }
          setSoundsEnabled(!soundsEnabled)
        }}
      />
    </Box>
  )
}
