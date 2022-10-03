import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'

export const CreateAlbum: React.FC = () => {
  return (
    <Box>
      <Box maxW='426px'>
        <Stack spacing='2'>
          <FormControl>
            <FormLabel fontSize='x-small' fontWeight='medium'>
              Name
            </FormLabel>
            <Input fontSize='xs' />
          </FormControl>
          <FormControl>
            <FormLabel fontSize='x-small' fontWeight='medium'>
              Description
            </FormLabel>
            <Textarea fontSize='xs' />
          </FormControl>
        </Stack>
      </Box>
      <Flex pb='2' pt='6'>
        <Flex gap='2' alignItems='center'>
          <Text minW='100px'>Sort by:</Text>
          <Select w='100%'>
            <option value='option1'>Name</option>
            <option value='option2'>Date Created</option>
          </Select>
        </Flex>
        <Flex ml='auto' gap='2'>
          <Button>Select All</Button>
          <Button>Clear All</Button>
        </Flex>
      </Flex>
    </Box>
  )
}
