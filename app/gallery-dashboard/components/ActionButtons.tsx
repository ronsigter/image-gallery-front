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
        lg: 'row',
      }}
      gap={4}
      w='100%'
    >
      <Flex
        gap='4'
        flexDir={{
          base: 'column',
          lg: 'row',
        }}
        w='100%'
      >
        <Input
          placeholder='Search Album'
          onChange={handleSearch}
          maxW={{ base: 'unset', lg: '30%' }}
        />
        <Flex
          gap='1'
          w='100%'
          alignItems='center'
          maxW={{ base: 'unset', lg: '30%' }}
        >
          <FormLabel w='20%' minW='100px'>
            Sort by:
          </FormLabel>
          <Select w='80%' minW='200px' onChange={handleOnChangeSort}>
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
