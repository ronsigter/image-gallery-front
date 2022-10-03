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

export const AddPhotoModal: React.FC<Omit<ModalProps, 'children'>> = (
  props
) => {
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
          <Button mr={3} onClick={props.onClose}>
            Cancel
          </Button>
          <Button>Done</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
