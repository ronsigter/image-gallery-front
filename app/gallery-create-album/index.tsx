import { GalleryLayout } from 'layout'
import { CreateAlbum } from './CreateAlbum'
import type { NextPage } from 'next'

const CreateAlbumContainer: NextPage = () => {
  return (
    <GalleryLayout pageTitle='Create Album'>
      <CreateAlbum />
    </GalleryLayout>
  )
}

export default CreateAlbumContainer
