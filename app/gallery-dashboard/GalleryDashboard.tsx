import NextLink from 'next/link'
import { Box, Button, Flex, FormLabel, Input, Select } from '@chakra-ui/react'
import { Albums } from './components'

export const GalleryDashboard: React.FC = () => {
  return (
    <Box>
      <Flex alignItems='center'>
        <Flex gap='4'>
          <Input placeholder='Search Album' />
          <Flex gap='1' w='100%' alignItems='center'>
            <FormLabel w='100%'>Sort by:</FormLabel>
            <Select w='100%'>
              <option value='option1'>Name</option>
              <option value='option2'>Date Created</option>
            </Select>
          </Flex>
        </Flex>
        <Flex ml='auto' gap='4'>
          <Button>Add Photos</Button>
          <NextLink href='/album/new' passHref>
            <Button as='a'>Create Album</Button>
          </NextLink>
        </Flex>
      </Flex>
      <Box py='4'>
        <Albums />
      </Box>
    </Box>
  )
}
