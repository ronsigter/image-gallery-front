import { Box, Image } from '@chakra-ui/react'
import type { Photo } from 'graphql/gql'

type PhotoCardProps = {
  photo: Photo
  isChecked?: boolean
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  photo,
  isChecked = false,
}) => {
  return (
    <Box
      bgColor='#F5F5F5'
      borderRadius='lg'
      overflow='hidden'
      border='2px solid'
      borderColor={isChecked ? '#7E7E7E' : 'transparent'}
      role='presentation'
      aria-label='photo-card'
    >
      <Image
        alt='photo-card'
        bgColor='#D3D3D3'
        h='150px'
        w='150px'
        borderRadius='lg'
      />
    </Box>
  )
}
