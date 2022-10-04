import NextLink from 'next/link'
import {
  Button,
  Flex,
  FormLabel,
  Input,
  Select,
  useDisclosure,
} from '@chakra-ui/react'
import { AddPhotoModal } from './AddPhotoModal'
import { useAlbums } from 'hooks'
import React from 'react'

export const ActionButtons: React.FC = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { soryBy, searchByName } = useAlbums()

  const handleOnChangeSort = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    soryBy(e.target.value)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    searchByName(e.target.value)
  }

  return (
    <Flex alignItems='center'>
      <Flex gap='4'>
        <Input placeholder='Search Album' onChange={handleSearch} />
        <Flex gap='1' w='100%' alignItems='center'>
          <FormLabel w='100%'>Sort by:</FormLabel>
          <Select w='100%' onChange={handleOnChangeSort}>
            <option value='name'>Name</option>
            <option value='createdDate'>Date Created</option>
          </Select>
        </Flex>
      </Flex>
      <Flex ml='auto' gap='4'>
        <Button onClick={onOpen}>Add Photos</Button>
        <NextLink href='/album/new' passHref>
          <Button as='a'>Create Album</Button>
        </NextLink>
        <AddPhotoModal onClose={onClose} isOpen={isOpen} />
      </Flex>
    </Flex>
  )
}
