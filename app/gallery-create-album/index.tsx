import { GalleryLayout } from 'layout'
import { CreateAlbum } from './CreateAlbum'
import type { NextPage } from 'next'

const CreateAlbumContainer: NextPage = () => {
  const backPath = {
    label: 'Back to Gallery',
    path: '/',
  }

  return (
    <GalleryLayout pageTitle='Create Album' backPath={backPath}>
      <CreateAlbum />
    </GalleryLayout>
  )
}

export default CreateAlbumContainer
