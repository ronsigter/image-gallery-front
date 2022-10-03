import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import { PhotoCard } from './PhotoCard'
import { ViewPhotoModal } from './ViewPhotoModal'

export const Photos: React.FC = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  const handleOnClick = (): void => {
    console.log('OPEN')
    onOpen()
  }

  return (
    <Flex gap='3' wrap='wrap'>
      {Array.from({ length: 20 }).map((_arr, i) => (
        <Box key={i} onClick={handleOnClick} cursor='pointer'>
          <PhotoCard />
        </Box>
      ))}
      <ViewPhotoModal onClose={onClose} isOpen={isOpen} />
    </Flex>
  )
}
