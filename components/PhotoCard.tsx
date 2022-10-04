import { Box, Image } from '@chakra-ui/react'
import type { Photo } from 'graphql/gql'

type PhotoCardProps = {
  photo: Photo
}

export const PhotoCard: React.FC<PhotoCardProps> = ({ photo }) => {
  return (
    <Box bgColor='#F5F5F5' borderRadius='lg' overflow='hidden'>
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
