import { GalleryLayout } from 'layout'
import { ViewAlbum } from './ViewAlbum'
import type { NextPage } from 'next'
import type { Album } from 'graphql/gql'

type ViewAlbumContainerProps = {
  album: Album
}

const ViewAlbumContainer: NextPage<ViewAlbumContainerProps> = ({ album }) => {
  const backPath = {
    label: 'Back to Gallery',
    path: '/',
  }

  return (
    <GalleryLayout pageTitle={album?.name} backPath={backPath}>
      <ViewAlbum album={album} />
    </GalleryLayout>
  )
}

export default ViewAlbumContainer
