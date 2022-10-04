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
import React, { useState } from 'react'

export const ActionButtons: React.FC = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { sortAlbumBy, searchByName } = useAlbums()
  const [sortBy, setSortBy] = useState<string>('name')

  const handleOnChangeSort = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    sortAlbumBy(e.target.value)
    setSortBy(e.target.value)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    searchByName(e.target.value, sortBy)
  }

  return (
    <Flex
      alignItems='center'
      flexDir={{
        base: 'column',
        md: 'row',
      }}
      gap={4}
    >
      <Flex
        gap='4'
        flexDir={{
          base: 'column',
          md: 'row',
        }}
      >
        <Input placeholder='Search Album' onChange={handleSearch} />
        <Flex gap='1' w='100%' alignItems='center'>
          <FormLabel w='100%'>Sort by:</FormLabel>
          <Select w='100%' onChange={handleOnChangeSort}>
            <option value='name'>Name</option>
            <option value='createdDate'>Date Created</option>
          </Select>
        </Flex>
      </Flex>
      <Flex
        ml={{
          base: '0',
          md: 'auto',
        }}
        gap='4'
      >
        <Button onClick={onOpen}>Add Photos</Button>
        <NextLink href='/album/new' passHref>
          <Button as='a' role='link'>
            Create Album
          </Button>
        </NextLink>
        <AddPhotoModal onClose={onClose} isOpen={isOpen} />
      </Flex>
    </Flex>
  )
}
