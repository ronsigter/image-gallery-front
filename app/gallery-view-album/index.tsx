import { GalleryLayout } from 'layout'
import { ViewAlbum } from './ViewAlbum'
import type { NextPage } from 'next'

const ViewAlbumContainer: NextPage = () => {
  const backPath = {
    label: 'Back to Gallery',
    path: '/',
  }

  return (
    <GalleryLayout pageTitle='FF14 Album' backPath={backPath}>
      <ViewAlbum />
    </GalleryLayout>
  )
}

export default ViewAlbumContainer
