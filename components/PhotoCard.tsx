import { Box, Image } from '@chakra-ui/react'

export const PhotoCard: React.FC = () => {
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
