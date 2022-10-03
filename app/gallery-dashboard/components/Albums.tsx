import { Box, Flex } from '@chakra-ui/react'
import { PhotoCard } from '../../../components'

export const Albums: React.FC = () => {
  return (
    <Flex gap='3' wrap='wrap'>
      {Array.from({ length: 20 }).map((_arr, i) => (
        <PhotoCard key={i} />
      ))}
    </Flex>
  )
}
