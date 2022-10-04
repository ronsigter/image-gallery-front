import NextLink from 'next/link'
import { Link, Flex } from '@chakra-ui/react'
import { AlbumCard } from 'components'
import { useQuery } from '@apollo/client'
import { ListAlbumsType, LIST_ALBUMS } from 'graphql/gql'

export const Albums: React.FC = () => {
  const { data } = useQuery<ListAlbumsType>(LIST_ALBUMS)

  console.log(data)

  return (
    <Flex gap='3' wrap='wrap'>
      {Array.from({ length: 20 }).map((_arr, i) => (
        <NextLink href={`/album/${i}`} key={i} passHref>
          <Link textDecoration='none' _hover={{}}>
            <AlbumCard key={i} />
          </Link>
        </NextLink>
      ))}
      <NextLink href={`/photos`} passHref>
        <Link textDecoration='none' _hover={{}}>
          <AlbumCard />
        </Link>
      </NextLink>
    </Flex>
  )
}
