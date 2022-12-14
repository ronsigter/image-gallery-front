import { gql } from '@apollo/client'
import { Photo, PHOTO_FIELD } from './photos'

export interface Album {
  __typename: 'Album'
  id: string
  name: string
  description: string
  photos: Photo[]
  insertedAt: string
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
    insertedAt
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

export interface CreatePhotoAlbumType {
  createPhotoAlbum: Album
}

export interface CreatePhotoAlbumVars {
  album: {
    name: string
    description: string
  }
  photoIds: string[]
}

export const CREATE_PHOTO_ALBUM = gql`
  ${ALBUM_FIELDS}
  mutation CreatePhotoAlbum($album: AlbumInput!, $photoIds: [String]!) {
    createPhotoAlbum(album: $album, photoIds: $photoIds) {
      ...AlbumFields
    }
  }
`

export interface GetAlbumType {
  getAlbum: Album
}

export interface GetAlbumVars {
  albumId: string
}

export const GET_ALBUM = gql`
  ${ALBUM_FIELDS}
  query GetAlbum($albumId: ID!) {
    getAlbum(albumId: $albumId) {
      ...AlbumFields
    }
  }
`
