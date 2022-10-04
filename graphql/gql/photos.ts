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

export interface ListPhotoType {
  listPhoto: Photo[]
}

export const LIST_PHOTO = gql`
  ${PHOTO_FIELD}
  query ListPhoto {
    listPhoto {
      ...PhotoField
    }
  }
`
