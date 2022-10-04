import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import { PhotoCard } from './PhotoCard'
import { ViewPhotoModal } from './ViewPhotoModal'
import type { Photo } from 'graphql/gql'

type PhotosProps = {
  photos: Photo[]
}

export const Photos: React.FC<PhotosProps> = ({ photos }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  const handleOnClick = (): void => {
    onOpen()
  }

  return (
    <Flex gap='3' wrap='wrap'>
      {photos.map((photo) => (
        <Box key={photo.id} onClick={handleOnClick} cursor='pointer'>
          <PhotoCard photo={photo} />
        </Box>
      ))}
      <ViewPhotoModal onClose={onClose} isOpen={isOpen} />
    </Flex>
  )
}
