import { GalleryLayout } from 'layout'
import type { NextPage } from 'next'
import { Photos } from './Photos'

const PhotosContainer: NextPage = () => {
  const backPath = {
    label: 'Back to Gallery',
    path: '/',
  }

  return (
    <GalleryLayout pageTitle='Photos' backPath={backPath}>
      <Photos />
    </GalleryLayout>
  )
}

export default PhotosContainer
