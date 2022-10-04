import { Box, Spinner, Text } from '@chakra-ui/react'

type LoadingStateProps = {
  message: string
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message }) => {
  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={3}
      py={20}
      role='presentation'
      aria-label='loading-state'
    >
      <Spinner size='xl' />
      <Text as='i' fontSize={12}>
        {message}
      </Text>
    </Box>
  )
}
