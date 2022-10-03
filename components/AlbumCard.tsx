import { Box, Flex, Image, Stack, Text } from '@chakra-ui/react'

export const AlbumCard: React.FC = () => {
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
          Album name
        </Text>
        <Flex>
          <Text fontSize='x-small'>3 Photos</Text>
          <Text fontSize='x-small' ml='auto'>
            6/15/2022
          </Text>
        </Flex>
      </Stack>
    </Box>
  )
}
