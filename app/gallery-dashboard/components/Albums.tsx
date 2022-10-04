import NextLink from 'next/link'
import { Link, Flex } from '@chakra-ui/react'
import { AlbumCard } from 'components'
import { useQuery } from '@apollo/client'
import { ListAlbumsType, LIST_ALBUMS } from 'graphql/gql'

export const Albums: React.FC = () => {
  const { data } = useQuery<ListAlbumsType>(LIST_ALBUMS)
  const albums = data?.listAlbums || []

  return (
    <Flex gap='3' wrap='wrap'>
      {albums.map((album) => (
        <NextLink href={`/album/${album.id}`} key={album.id} passHref>
          <Link textDecoration='none' _hover={{}}>
            <AlbumCard album={album} />
          </Link>
        </NextLink>
      ))}
      <NextLink href={`/photos`} passHref>
        <Link textDecoration='none' _hover={{}}>
          <AlbumCard
            album={{
              id: 'view-all-card',
              __typename: 'Album',
              description: 'View more',
              name: 'VIEW ALL',
              photos: [],
            }}
          />
        </Link>
      </NextLink>
    </Flex>
  )
}
