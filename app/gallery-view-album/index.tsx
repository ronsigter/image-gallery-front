import { GalleryLayout } from 'layout'
import { ViewAlbum } from './ViewAlbum'
import type { NextPage } from 'next'

const ViewAlbumContainer: NextPage = () => {
  return (
    <GalleryLayout pageTitle='FF14 Album'>
      <ViewAlbum />
    </GalleryLayout>
  )
}

export default ViewAlbumContainer
