export { default } from 'app/gallery-view-album'
import { Album, GetAlbumType, GetAlbumVars, GET_ALBUM } from 'graphql/gql'
import { apolloClient } from 'lib/apolloGraphQL'
import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id as string

  let album: Album | null = null

  try {
    const query = await apolloClient.query<GetAlbumType, GetAlbumVars>({
      query: GET_ALBUM,
      variables: {
        albumId: id,
      },
    })

    album = query?.data?.getAlbum
  } catch (error) {
    console.log(error)
  }

  return { props: { album } }
}
