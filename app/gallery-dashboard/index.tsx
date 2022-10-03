import { GalleryDashboard } from './GalleryDashboard'
import type { NextPage } from 'next'
import { GalleryLayout } from 'layout'

const GalleryDashboardContainer: NextPage = () => {
  return (
    <GalleryLayout pageTitle='Image Gallery'>
      <GalleryDashboard />
    </GalleryLayout>
  )
}

export default GalleryDashboardContainer
