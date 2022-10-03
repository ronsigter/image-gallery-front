import NextLink from 'next/link'
import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import { AddPhotoModal } from './AddPhotoModal'

export const ActionButtons: React.FC = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()

  return (
    <Flex ml='auto' gap='4'>
      <Button onClick={onOpen}>Add Photos</Button>
      <NextLink href='/album/new' passHref>
        <Button as='a'>Create Album</Button>
      </NextLink>
      <AddPhotoModal onClose={onClose} isOpen={isOpen} />
    </Flex>
  )
}
