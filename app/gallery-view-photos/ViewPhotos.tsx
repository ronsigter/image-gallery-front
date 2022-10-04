import { Box } from '@chakra-ui/react'
import { BlankState, LoadingState, Photos } from 'components'
import { usePhotos } from 'hooks'

export const ViewPhotos: React.FC = () => {
  const { photos, loading } = usePhotos()

  if (loading) return <LoadingState message='Loading photos...' />

  if (photos.length === 0)
    return <BlankState message='No photos found. Upload one.' />

  return (
    <Box>
      <Photos photos={photos} />
    </Box>
  )
}
