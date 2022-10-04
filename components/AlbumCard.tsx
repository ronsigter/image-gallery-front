import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'
import type { Album } from 'graphql/gql'

type AlbumCardProps = {
  album: Album
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album }) => {
  return (
    <Box bgColor='#F5F5F5' py='1.125rem' px='0.875rem' borderRadius='lg'>
      <Image
        alt='photo-card'
        bgColor='#D3D3D3'
        h='150px'
        w='150px'
        borderRadius='lg'
        overflow='hidden'
      />
      <Stack spacing='1' pt='2'>
        <Text fontSize='xs' fontWeight='medium'>
          {album?.name || '---'}
        </Text>
        <Flex>
          <Text fontSize='x-small'>{album?.photos.length || 0} Photos</Text>
          <Text fontSize='x-small' ml='auto'>
            6/15/2022
          </Text>
        </Flex>
      </Stack>
    </Box>
  )
}
