import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import { PhotoCard } from './PhotoCard'
import { ViewPhotoModal } from './ViewPhotoModal'
import type { Photo } from 'graphql/gql'
import { useState } from 'react'

type PhotosProps = {
  photos: Photo[]
}

export const Photos: React.FC<PhotosProps> = ({ photos }) => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [photoView, setPhotoView] = useState<Photo | null>(null)
  const handleOnClick = (photo: Photo): void => {
    setPhotoView(photo)
    onOpen()
  }

  return (
    <Flex gap={{ base: '1', md: '3' }} wrap='wrap' justifyContent='center'>
      {photos.map((photo) => (
        <Box
          key={photo.id}
          onClick={() => handleOnClick(photo)}
          cursor='pointer'
        >
          <PhotoCard photo={photo} />
        </Box>
      ))}
      <ViewPhotoModal onClose={onClose} isOpen={isOpen} photo={photoView} />
    </Flex>
  )
}
