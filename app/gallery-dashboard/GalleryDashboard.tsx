import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react'
import { Albums } from './components'

export const GalleryDashboard: React.FC = () => {
  return (
    <Container maxW='1423px'>
      <Text fontWeight='bold' py='10' fontSize='3xl'>
        Image Gallery
      </Text>
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
          <Button>Create Album</Button>
        </Flex>
      </Flex>
      <Box py='4'>
        <Albums />
      </Box>
    </Container>
  )
}
