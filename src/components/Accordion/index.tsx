import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Box, Text } from '@chakra-ui/react'
import { MotionBox, transitionFastConfig } from '@/components/MotionBox'

interface AccordionRowProps {
  item: {
    title: string
    description: string
  }
  index: number
  activeIndex?: number
  setActiveIndex: (index: number) => void
}

const AccordionRow = ({ item, index, activeIndex, setActiveIndex }: AccordionRowProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<string | undefined>('auto')

  useEffect(() => {
    if (ref.current) {
      setHeight(`${ref.current?.getBoundingClientRect().height}px`)
    }
  }, [!ref.current])

  return (
    <MotionBox
      transition={transitionFastConfig}
      style={{ overflow: 'hidden' }}
      animate={{ height: activeIndex === index ? '100%' : height }}
    >
      <Box ref={ref} p={4} bg="flow.15" cursor="pointer" onClick={() => setActiveIndex(index)}>
        <Text fontSize="18px">{item.title}</Text>
      </Box>
      <Box p={4} bg="ui.5">
        {item.description}
      </Box>
    </MotionBox>
  )
}

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<undefined | number>(undefined)

  const items = [
    {
      title: 'What is a ur mom?',
      description: 'yes',
    },
    {
      title: 'aaaaaaaaaaaaaaaaaaaaa',
      description: 'sssssssssssssssssssssssssssssssssssssssss',
    },
    {
      title: 'aaaaaaaaaaaaaaaaaaaaa',
      description: 'sssssssssssssssssssssssssssssssssssssssss',
    },
    {
      title: 'aaaaaaaaaaaaaaaaaaaaa',
      description: 'sssssssssssssssssssssssssssssssssssssssss',
    },
    {
      title: 'aaaaaaaaaaaaaaaaaaaaa',
      description: 'sssssssssssssssssssssssssssssssssssssssss',
    },
  ]

  return (
    <Box overflow="hidden" rounded="md">
      {items.map((item, i) => (
        <AccordionRow key={i} index={i} item={item} setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
      ))}
    </Box>
  )
}
