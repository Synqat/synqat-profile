import { Box, forwardRef, Text, TextProps } from '@chakra-ui/react'

export interface GradientTextProps {
  from?: TextProps['color']
  to?: TextProps['color']
  strength?: number
}

export const GradientText = forwardRef<TextProps & GradientTextProps, typeof Text>(
  ({ strength, from, to, ...props }, ref) => {
    return (
      <Box pos="relative" w="full">
        <Text pos="relative" as="div" {...props}>
          <Text
            {...props}
            pointerEvents="none"
            pos="absolute"
            opacity={strength ?? 0.6}
            bgGradient={`linear(to-tr, ${from ?? 'blue'}, ${to ?? 'red'})`}
            color="text.100"
            filter="blur(6rem)"
          >
            {props.children}
          </Text>
          <Text {...props} ref={ref}>
            {props.children}
          </Text>
        </Text>
      </Box>
    )
  },
)
