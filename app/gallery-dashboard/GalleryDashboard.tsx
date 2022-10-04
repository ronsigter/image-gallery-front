import { Box, Flex, FormLabel, Input, Select } from '@chakra-ui/react'
import { ActionButtons, Albums } from './components'

export const GalleryDashboard: React.FC = () => {
  return (
    <Box>
      <ActionButtons />
      <Box py='4'>
        <Albums />
      </Box>
    </Box>
  )
}
