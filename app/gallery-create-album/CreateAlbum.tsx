import { useMutation, useQuery } from '@apollo/client'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { Photos } from 'components'
import { CREATE_PHOTO_ALBUM, LIST_ALBUMS, LIST_PHOTOS } from 'graphql/gql'
import type {
  CreatePhotoAlbumType,
  CreatePhotoAlbumVars,
  ListPhotosType,
} from 'graphql/gql'
import { useRouter } from 'next/router'

export const CreateAlbum: React.FC = () => {
  const router = useRouter()
  const { data } = useQuery<ListPhotosType>(LIST_PHOTOS)
  const photos = data?.listPhotos || []
  const [onCreatePhotoAlbum, { loading }] = useMutation<
    CreatePhotoAlbumType,
    CreatePhotoAlbumVars
  >(CREATE_PHOTO_ALBUM)

  const handleOnSubmit = async () => {
    await onCreatePhotoAlbum({
      variables: {
        album: {
          name: 'Client Album',
          description: 'this is a test album',
        },
        photoIds: [],
      },
      refetchQueries: [{ query: LIST_ALBUMS }],
    })

    router.push('/')
  }

  return (
    <Box>
      <Box maxW='426px'>
        <Stack spacing='2'>
          <FormControl>
            <FormLabel fontSize='x-small' fontWeight='medium'>
              Name
            </FormLabel>
            <Input fontSize='xs' />
          </FormControl>
          <FormControl>
            <FormLabel fontSize='x-small' fontWeight='medium'>
              Description
            </FormLabel>
            <Textarea fontSize='xs' />
          </FormControl>
        </Stack>
      </Box>
      <Flex pb='4' pt='6'>
        <Flex gap='2' alignItems='center'>
          <Text minW='100px'>Sort by:</Text>
          <Select w='100%'>
            <option value='option1'>Name</option>
            <option value='option2'>Date Created</option>
          </Select>
        </Flex>
        <Flex ml='auto' gap='2'>
          <Button>Select All</Button>
          <Button>Clear All</Button>
        </Flex>
      </Flex>
      <Box>
        <Photos photos={photos} />
      </Box>
      <Box py='10'>
        <Button
          onClick={handleOnSubmit}
          isLoading={loading}
          loadingText='Creating album...'
        >
          Create Album
        </Button>
      </Box>
    </Box>
  )
}
