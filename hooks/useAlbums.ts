import { makeVar, useQuery, useReactiveVar } from '@apollo/client'
import { LIST_ALBUMS } from 'graphql/gql'
import { compareAsc } from 'date-fns'
import type { Album, ListAlbumsType } from 'graphql/gql'

const AlbumsVar = makeVar<Album[]>([])

export const useAlbums = () => {
  const albums = useReactiveVar(AlbumsVar)
  const { loading, data } = useQuery<ListAlbumsType>(LIST_ALBUMS, {
    onCompleted: (data) => {
      AlbumsVar(data?.listAlbums || [])
    },
  })

  const sortAlbums = (
    albumsData: Album[]
  ): { [key: string]: () => Album[] } => ({
    name: () =>
      albumsData.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      ),
    createdDate: () =>
      albumsData.sort((a, b) =>
        compareAsc(new Date(a.insertedAt), new Date(b.insertedAt))
      ),
  })

  const sortBy = (sort: string): void => {
    const albumsData = [...albums]
    const sortedAlbums = sortAlbums(albumsData)[sort]?.() || []
    AlbumsVar(sortedAlbums)
  }

  const searchByName = (term: string, sort: string): void => {
    const albumsData = [...(data?.listAlbums || [])]
    const filteredAlbums = albumsData.filter(({ name }) =>
      name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    )
    const sortedAlbums = sortAlbums(filteredAlbums)[sort]?.() || []
    AlbumsVar(sortedAlbums)
  }

  return {
    albums,
    sortAlbumBy: sortBy,
    loading,
    searchByName,
  }
}
