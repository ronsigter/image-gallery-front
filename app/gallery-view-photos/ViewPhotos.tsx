import { useQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { BlankState, LoadingState, Photos } from 'components'
import { ListPhotosType, LIST_PHOTOS } from 'graphql/gql'

export const ViewPhotos: React.FC = () => {
  const { data, loading } = useQuery<ListPhotosType>(LIST_PHOTOS)
  const photos = data?.listPhotos || []

  if (loading) return <LoadingState message='Loading photos...' />

  if (photos.length === 0)
    return <BlankState message='No photos found. Upload one.' />

  return (
    <Box>
      <Photos photos={photos} />
    </Box>
  )
}
