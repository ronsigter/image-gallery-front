import { GalleryLayout } from 'layout'
import type { NextPage } from 'next'
import { Photos } from './Photos'

const PhotosContainer: NextPage = () => {
  return (
    <GalleryLayout pageTitle='Photos'>
      <Photos />
    </GalleryLayout>
  )
}

export default PhotosContainer
