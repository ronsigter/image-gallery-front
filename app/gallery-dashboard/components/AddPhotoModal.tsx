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
  Box,
  ModalProps,
} from '@chakra-ui/react'
import {
  LIST_PHOTOS,
  UploadPhotoType,
  UploadPhotoVars,
  UPLOAD_PHOTO,
} from 'graphql/gql'

export const AddPhotoModal: React.FC<Omit<ModalProps, 'children'>> = (
  props
) => {
  const [onUploadPhoto, { loading }] = useMutation<
    UploadPhotoType,
    UploadPhotoVars
  >(UPLOAD_PHOTO)

  const handleOnSubmit = async (): Promise<void> => {
    await onUploadPhoto({
      variables: {
        name: 'Client Image',
        type: 'image/jpg',
      },
      refetchQueries: [{ query: LIST_PHOTOS }],
    })

    props.onClose()
  }

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent maxW='3xl'>
        <ModalHeader>Add Photos</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box w='100%' h='590px' bgColor='#D9D9D9' />
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={props.onClose} isDisabled={loading}>
            Cancel
          </Button>
          <Button
            isLoading={loading}
            loadingText='Uploading...'
            onClick={handleOnSubmit}
          >
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
