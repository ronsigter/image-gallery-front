import { GalleryLayout } from 'layout'
import type { NextPage } from 'next'
import { ViewPhotos } from './ViewPhotos'

const ViewContainer: NextPage = () => {
  const backPath = {
    label: 'Back to Gallery',
    path: '/',
  }

  return (
    <GalleryLayout pageTitle='Photos' backPath={backPath}>
      <ViewPhotos />
    </GalleryLayout>
  )
}

export default ViewContainer
