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
import type { Photo } from 'graphql/gql'

interface ViewPhotoModalProps extends Omit<ModalProps, 'children'> {
  photo: Photo | null
}

export const ViewPhotoModal: React.FC<ViewPhotoModalProps> = (props) => {
  const { photo = null, ...rest } = props
  return (
    <Modal {...rest}>
      <ModalOverlay />
      <ModalContent maxW='3xl'>
        <ModalHeader>{photo?.name || '---'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box w='100%' h='590px' bgColor='#D9D9D9' />
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={rest.onClose}>
            Close Preview
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
