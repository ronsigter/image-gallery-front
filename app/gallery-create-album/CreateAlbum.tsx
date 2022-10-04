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
import { CREATE_PHOTO_ALBUM, LIST_ALBUMS, LIST_PHOTOS } from 'graphql/gql'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import type {
  CreatePhotoAlbumType,
  CreatePhotoAlbumVars,
  ListPhotosType,
} from 'graphql/gql'
import { CheckboxSelection } from 'components/CheckboxSelection'
import { PhotoCard } from 'components'

type FormProps = {
  name: string
  description: string
  photoIds: string[]
}

export const CreateAlbum: React.FC = () => {
  const router = useRouter()
  const { data } = useQuery<ListPhotosType>(LIST_PHOTOS)
  const photos = data?.listPhotos || []
  const [onCreatePhotoAlbum] = useMutation<
    CreatePhotoAlbumType,
    CreatePhotoAlbumVars
  >(CREATE_PHOTO_ALBUM)
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm<FormProps>({
    mode: 'onChange',
  })

  const OnSubmit = async (form: FormProps) => {
    await onCreatePhotoAlbum({
      variables: {
        album: { ...form },
        photoIds: [],
      },
      refetchQueries: [{ query: LIST_ALBUMS }],
    })

    router.push('/')
  }

  return (
    <Box as='form' onSubmit={handleSubmit(OnSubmit)}>
      <Box maxW='426px'>
        <Stack spacing='2'>
          <FormControl>
            <FormLabel fontSize='x-small' fontWeight='medium'>
              Name
            </FormLabel>
            <Input
              fontSize='xs'
              {...register('name', {
                required: true,
              })}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize='x-small' fontWeight='medium'>
              Description
            </FormLabel>
            <Textarea
              fontSize='xs'
              {...register('description', {
                required: true,
              })}
            />
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
        <Controller
          control={control}
          name='photoIds'
          render={({ field }) => (
            <CheckboxSelection
              checkboxGroupProps={field}
              options={photos.map((photo) => ({
                ...photo,
                label: photo.name,
                value: photo.id,
              }))}
              component={PhotoCard}
            />
          )}
        />
      </Box>
      <Box py='10'>
        <Button
          type='submit'
          isLoading={isSubmitting}
          loadingText='Creating album...'
          isDisabled={!isValid}
        >
          Create Album
        </Button>
      </Box>
    </Box>
  )
}
