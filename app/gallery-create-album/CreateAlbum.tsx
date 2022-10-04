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
import { CREATE_PHOTO_ALBUM, LIST_ALBUMS } from 'graphql/gql'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import type { CreatePhotoAlbumType, CreatePhotoAlbumVars } from 'graphql/gql'
import { CheckboxSelection } from 'components/CheckboxSelection'
import { BlankState, LoadingState, PhotoCard } from 'components'
import { usePhotos } from 'hooks'

type FormProps = {
  name: string
  description: string
  photoIds: string[]
}

export const CreateAlbum: React.FC = () => {
  const router = useRouter()
  const { photos, loading, sortPhotosBy } = usePhotos()
  const [onCreatePhotoAlbum] = useMutation<
    CreatePhotoAlbumType,
    CreatePhotoAlbumVars
  >(CREATE_PHOTO_ALBUM)
  const {
    register,
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
    watch,
    resetField,
  } = useForm<FormProps>({
    mode: 'onChange',
  })

  const photoIds = watch('photoIds', [])

  const OnSubmit = async (form: FormProps) => {
    const { photoIds = [], ...rest } = form
    await onCreatePhotoAlbum({
      variables: {
        album: { ...rest },
        photoIds,
      },
      refetchQueries: [{ query: LIST_ALBUMS }],
    })
    router.push('/')
  }

  const handleClearSelected = (): void => {
    resetField('photoIds', {
      defaultValue: [],
    })
  }

  const handleSelectAll = (): void => {
    resetField('photoIds', {
      defaultValue: photos?.map(({ id }) => id) || [],
    })
  }

  const handleOnChangeSort = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    sortPhotosBy(e.target.value)
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
          <Select w='100%' onChange={handleOnChangeSort}>
            <option value='name'>Name</option>
            <option value='createdDate'>Created At</option>
          </Select>
        </Flex>
        <Flex ml='auto' gap='2'>
          <Button onClick={handleSelectAll}>Select All</Button>
          <Button onClick={handleClearSelected}>Clear All</Button>
        </Flex>
      </Flex>
      {loading ? (
        <LoadingState message='Loading photos...' />
      ) : photos.length === 0 ? (
        <BlankState message='No photos found. Upload one.' />
      ) : (
        <Box>
          <Controller
            control={control}
            name='photoIds'
            render={({ field }) => (
              <CheckboxSelection
                checkboxGroupProps={{ ...field }}
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
      )}
      <Flex py='10' gap={4} alignItems='center'>
        <Button
          type='submit'
          isLoading={isSubmitting}
          loadingText='Creating album...'
          isDisabled={!isValid}
        >
          Create Album
        </Button>

        <Text role='presentation' aria-label='selection-counter'>
          {photoIds?.length || 0} Photos Selected
        </Text>
      </Flex>
    </Box>
  )
}
