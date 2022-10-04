import { ListAlbumsType, LIST_ALBUMS } from 'graphql/gql'
import { createMockResponse } from 'graphql/gql/mocks/createMockResponse'
import { render, screen, waitScreenUpdate } from 'utils/test.utils'
import GalleryDashboardContainer from '..'

describe('<GalleryDashboardContainer />', () => {
  const emptyAlbumMock = createMockResponse<ListAlbumsType>(LIST_ALBUMS, {
    listAlbums: [],
  })
  const listAlbumMock = createMockResponse<ListAlbumsType>(LIST_ALBUMS, {
    listAlbums: Array.from({ length: 5 }).map((_arr, i) => ({
      __typename: 'Album',
      description: `Album ${i} description`,
      id: `album-${i}`,
      insertedAt: new Date().toLocaleString(),
      name: `album ${i}`,
      photos: [],
    })),
  })

  it('Renders the loading state', () => {
    render(<GalleryDashboardContainer />, {
      mocks: [emptyAlbumMock],
    })
    expect(
      screen.getByRole('presentation', { name: 'loading-state' })
    ).toBeInTheDocument()
  })

  it('Renders the blank state', async () => {
    render(<GalleryDashboardContainer />, {
      mocks: [emptyAlbumMock],
    })
    await waitScreenUpdate()
    expect(
      screen.getByRole('presentation', { name: 'blank-state' })
    ).toBeInTheDocument()
  })

  it('Renders the initial components', async () => {
    render(<GalleryDashboardContainer />, {
      mocks: [listAlbumMock],
    })
    await waitScreenUpdate()
    expect(
      screen.getAllByRole('presentation', { name: 'album-card' }).length
    ).toBe(6) // last card is the view all card
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getAllByRole('option').length).toBe(2)
    expect(
      screen.getByRole('button', { name: /add photos/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /create album/i })).toHaveAttribute(
      'href',
      '/album/new'
    )
    expect(screen.getByPlaceholderText(/search album/i)).toBeInTheDocument()
  })
})
