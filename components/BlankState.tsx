import { Box, Text } from '@chakra-ui/react'

type BlankStateProps = {
  message: string
}

export const BlankState: React.FC<BlankStateProps> = ({ message }) => {
  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={3}
      py={10}
    >
      <Text as='i' fontSize={12}>
        {message}
      </Text>
    </Box>
  )
}
