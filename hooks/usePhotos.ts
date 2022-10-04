import { makeVar, useQuery, useReactiveVar } from '@apollo/client'
import { LIST_PHOTOS } from 'graphql/gql'
import { compareAsc } from 'date-fns'
import type { ListPhotosType, Photo } from 'graphql/gql'

const PhotosVar = makeVar<Photo[]>([])

export const usePhotos = () => {
  const photos = useReactiveVar(PhotosVar)
  const { loading, data } = useQuery<ListPhotosType>(LIST_PHOTOS, {
    onCompleted: (data) => {
      PhotosVar(data?.listPhotos || [])
    },
  })

  const sortPhotos = (
    photosData: Photo[]
  ): { [key: string]: () => Photo[] } => ({
    name: () =>
      photosData.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      ),
    createdDate: () =>
      photosData.sort((a, b) =>
        compareAsc(new Date(a.insertedAt), new Date(b.insertedAt))
      ),
  })

  const sortBy = (sort: string): void => {
    const photosData = [...photos]
    const sortedPhotos = sortPhotos(photosData)[sort]?.() || []
    PhotosVar(sortedPhotos)
  }

  return {
    photos,
    sortPhotosBy: sortBy,
    loading,
  }
}
