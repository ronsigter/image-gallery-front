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
  Image,
  Center,
} from '@chakra-ui/react'
import type { Photo } from 'graphql/gql'

interface ViewPhotoModalProps extends Omit<ModalProps, 'children'> {
  photo: Photo | null
}

export const ViewPhotoModal: React.FC<ViewPhotoModalProps> = (props) => {
  const { photo = null, ...rest } = props
  return (
    <Modal isCentered {...rest}>
      <ModalOverlay />
      <ModalContent maxW='3xl'>
        <ModalHeader>{photo?.name || '---'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Center
            w='100%'
            h={{ base: '70vw', md: '500px' }}
            bgColor='#D9D9D9'
            borderRadius='xl'
            overflow='hidden'
            cursor='pointer'
          >
            <Image
              alt='photo-card'
              bgColor='#D3D3D3'
              borderRadius='lg'
              overflow='hidden'
              objectFit='cover'
              fallbackSrc='/no-image.png'
            />
          </Center>
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
