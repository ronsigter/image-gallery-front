import NextLink from 'next/link'
import { Link, Flex } from '@chakra-ui/react'
import { PhotoCard } from '../../../components'

export const Albums: React.FC = () => {
  return (
    <Flex gap='3' wrap='wrap'>
      {Array.from({ length: 20 }).map((_arr, i) => (
        <NextLink href={`/album/${i}`} key={i} passHref>
          <Link textDecoration='none' _hover={{}}>
            <PhotoCard key={i} />
          </Link>
        </NextLink>
      ))}
    </Flex>
  )
}
