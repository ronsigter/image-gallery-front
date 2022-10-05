import { useMutation } from '@apollo/client'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalProps,
} from '@chakra-ui/react'
import {
  LIST_PHOTOS,
  UploadPhotoType,
  UploadPhotoVars,
  UPLOAD_PHOTO,
} from 'graphql/gql'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { DropzoneFields } from './DropzoneFields'

type FormProps = {
  file: File & { preview?: string }
}

export const AddPhotoModal: React.FC<Omit<ModalProps, 'children'>> = (
  props
) => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    watch,
  } = useForm<FormProps>()
  const [onUploadPhoto] = useMutation<UploadPhotoType, UploadPhotoVars>(
    UPLOAD_PHOTO
  )
  const file = watch('file', undefined)

  const handleOnSubmit = async (form: FormProps): Promise<void> => {
    const formFile = form.file
    delete formFile.preview

    const { data } = await axios.post('/api/upload_photo', {
      name: formFile.name,
      type: formFile.type,
    })

    const signedUrl = data.url
    console.log(signedUrl)
    const imageUrl = await axios.put(signedUrl, formFile, {
      headers: {
        'Content-Type': formFile.type,
        'Access-Control-Allow-Origin': '*',
      },
    })

    console.log(imageUrl)

    // await onUploadPhoto({
    //   variables: {
    //     name: form.file.name,
    //     type: form.file.type,
    //   },
    //   refetchQueries: [{ query: LIST_PHOTOS }],
    // })

    props.onClose()
  }

  return (
    <Modal isCentered {...props}>
      <ModalOverlay />
      <ModalContent maxW={{ base: 'lg', md: '3xl' }}>
        <ModalHeader>Add a Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          as='form'
          id='upload-file-form'
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <DropzoneFields name='file' control={control} />
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={props.onClose} isDisabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            isLoading={isSubmitting}
            loadingText='Uploading...'
            type='submit'
            form='upload-file-form'
            isDisabled={!file}
          >
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
