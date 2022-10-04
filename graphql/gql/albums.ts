import { gql } from '@apollo/client'
import { Photo, PHOTO_FIELD } from './photos'

export interface Album {
  __typename: 'Album'
  id: string
  name: string
  description: string
  photos: Photo
}

export const ALBUM_FIELDS = gql`
  ${PHOTO_FIELD}
  fragment AlbumFields on Album {
    id
    name
    description
    photos {
      ...PhotoField
    }
  }
`

export interface ListAlbumsType {
  listAlbums: Album[]
}

export const LIST_ALBUMS = gql`
  ${ALBUM_FIELDS}
  query ListAlbums {
    listAlbums {
      ...AlbumFields
    }
  }
`
