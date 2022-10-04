import { useQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { Photos } from 'components'
import { ListPhotosType, LIST_PHOTOS } from 'graphql/gql'

export const ViewPhotos: React.FC = () => {
  const { data } = useQuery<ListPhotosType>(LIST_PHOTOS)
  const photos = data?.listPhotos || []

  return (
    <Box>
      <Photos photos={photos} />
    </Box>
  )
}
