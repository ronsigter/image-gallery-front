import { Album, ListAlbumsType, LIST_ALBUMS } from 'graphql/gql'
import { makeVar, useQuery, useReactiveVar } from '@apollo/client'

const AlbumsVar = makeVar<Album[]>([])

export const useAlbums = () => {
  const albums = useReactiveVar(AlbumsVar)
  const { loading, data } = useQuery<ListAlbumsType>(LIST_ALBUMS, {
    onCompleted: (data) => {
      AlbumsVar(data?.listAlbums || [])
    },
  })

  const soryBy_ = (sort_: string): void => {
    const albumsData = [...albums]
    const sortedAlbums: { [key: string]: Album[] } = {
      name: albumsData.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      ),
      createdDate: albumsData.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      ),
    }

    AlbumsVar(sortedAlbums[sort_])
  }

  const searchByName = (term: string): void => {
    const albumsData = [...(data?.listAlbums || [])]
    const filteredAlbums = albumsData.filter(({ name }) =>
      name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    )
    AlbumsVar(filteredAlbums)
  }

  return {
    albums,
    soryBy: soryBy_,
    loading,
    searchByName,
  }
}
