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

export const ViewPhotoModal: React.FC<Omit<ModalProps, 'children'>> = (
  props
) => {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent maxW='3xl'>
        <ModalHeader>Image Name</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box w='100%' h='590px' bgColor='#D9D9D9' />
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={props.onClose}>
            Close Preview
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
