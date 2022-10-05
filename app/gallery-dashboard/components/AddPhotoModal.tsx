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
import { DropzoneFields } from './DropzoneFields'

type FormProps = {
  file: File
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
    console.log(form)

    await onUploadPhoto({
      variables: {
        name: form.file.name,
        type: form.file.type,
      },
      refetchQueries: [{ query: LIST_PHOTOS }],
    })

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
