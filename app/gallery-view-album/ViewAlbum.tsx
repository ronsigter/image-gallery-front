import { Stack, Text } from '@chakra-ui/react'
import { Photos } from 'components'
import type { Album } from 'graphql/gql'

type ViewAlbumProps = {
  album: Album
}

export const ViewAlbum: React.FC<ViewAlbumProps> = ({ album }) => {
  const { photos = [], description = '' } = album || {}

  return (
    <Stack spacing='4'>
      <Text maxW='500px' fontSize='xs' fontWeight='medium'>
        {description}
      </Text>
      <Photos photos={photos} />
    </Stack>
  )
}
