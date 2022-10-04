import { gql } from '@apollo/client'

export interface Photo {
  __typename: 'Photo'
  id: string
  name: string
  type: string
}

export const PHOTO_FIELD = gql`
  fragment PhotoField on Photo {
    id
    name
    type
  }
`

export interface ListPhotosType {
  listPhotos: Photo[]
}

export const LIST_PHOTOS = gql`
  ${PHOTO_FIELD}
  query ListPhotos {
    listPhotos {
      ...PhotoField
    }
  }
`
