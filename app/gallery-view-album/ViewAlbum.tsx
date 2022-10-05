import { Stack, Text } from '@chakra-ui/react'
import { BlankState, Photos } from 'components'
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
      {photos.length === 0 ? (
        <BlankState message='No photos found' />
      ) : (
        <Photos photos={photos} />
      )}
    </Stack>
  )
}
