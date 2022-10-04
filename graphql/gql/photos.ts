import { gql } from '@apollo/client'

export interface Photo {
  __typename: 'Photo'
  id: string
  name: string
  type: string
  insertedAt: string
}

export const PHOTO_FIELD = gql`
  fragment PhotoField on Photo {
    id
    name
    type
    insertedAt
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

export interface UploadPhotoType {
  uploadPhoto: Photo
}

export interface UploadPhotoVars {
  name: string
  type: string
}

export const UPLOAD_PHOTO = gql`
  ${PHOTO_FIELD}
  mutation UploadPhoto($name: String!, $type: String!) {
    uploadPhoto(name: $name, type: $type) {
      ...PhotoField
    }
  }
`
