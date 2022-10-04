import {
  CreatePhotoAlbumType,
  CreatePhotoAlbumVars,
  CREATE_PHOTO_ALBUM,
  ListPhotosType,
  LIST_PHOTOS,
} from 'graphql/gql'
import { createMockResponse } from 'graphql/gql/mocks/createMockResponse'
import { render, screen, userEvent, waitScreenUpdate } from 'utils/test.utils'
import CreateAlbumContainer from '../'

const mockRouterPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter() {
    return {
      push: mockRouterPush,
    }
  },
}))

describe('<CreateAlbumContainer />', () => {
  const user = userEvent.setup()
  const emptyPhotoMock = createMockResponse<ListPhotosType>(LIST_PHOTOS, {
    listPhotos: [],
  })
  const listPhotoMock = createMockResponse<ListPhotosType>(LIST_PHOTOS, {
    listPhotos: Array.from({ length: 5 }).map((_arr, i) => ({
      __typename: 'Photo',
      name: `Album ${i}`,
      type: 'image/jpg',
      id: `photo-${i}`,
      insertedAt: new Date().toLocaleString(),
    })),
  })
  const createAlbumMock = createMockResponse<
    CreatePhotoAlbumType,
    CreatePhotoAlbumVars
  >(
    CREATE_PHOTO_ALBUM,
    {
      createPhotoAlbum: {
        __typename: 'Album',
        description: 'new album description',
        id: 'album-0',
        insertedAt: new Date().toLocaleString(),
        name: 'new album',
        photos: [],
      },
    },
    {
      album: {
        description: 'new album description',
        name: 'new album',
      },
      photoIds: [],
    }
  )

  it('Renders the loading state', () => {
    render(<CreateAlbumContainer />, {
      mocks: [emptyPhotoMock],
    })
    expect(
      screen.getByRole('presentation', { name: 'loading-state' })
    ).toBeInTheDocument()
  })

  it('Renders the blank state', async () => {
    render(<CreateAlbumContainer />, {
      mocks: [emptyPhotoMock],
    })
    await waitScreenUpdate()
    expect(
      screen.getByRole('presentation', { name: 'blank-state' })
    ).toBeInTheDocument()
  })

  it('Renders the initial components', async () => {
    render(<CreateAlbumContainer />, {
      mocks: [listPhotoMock],
    })
    await waitScreenUpdate()
    expect(
      screen.getByRole('link', { name: /back to gallery/i })
    ).toHaveAttribute('href', '/')
    expect(screen.getAllByRole('checkbox').length).toBe(5)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getAllByRole('option').length).toBe(2)
    expect(
      screen.getByRole('button', { name: /select all/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /clear all/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument()
    expect(
      screen.getByRole('textbox', { name: /description/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /create album/i })).toBeDisabled()
  })

  it('Selects and deselect photo card checkbox', async () => {
    render(<CreateAlbumContainer />, {
      mocks: [listPhotoMock],
    })
    await waitScreenUpdate()
    // check initial state
    expect(screen.queryAllByRole('checkbox', { checked: true }).length).toBe(0)
    expect(
      screen.getByRole('presentation', { name: /selection-counter/i })
    ).toHaveTextContent(/0 photos selected/i)

    // click select all
    await user.click(screen.getByRole('button', { name: /select all/i }))
    expect(screen.queryAllByRole('checkbox', { checked: true }).length).toBe(5)
    expect(
      screen.getByRole('presentation', { name: /selection-counter/i })
    ).toHaveTextContent(/5 photos selected/i)

    // click clear all
    await user.click(screen.getByRole('button', { name: /clear all/i }))
    expect(screen.queryAllByRole('checkbox', { checked: true }).length).toBe(0)
    expect(
      screen.getByRole('presentation', { name: /selection-counter/i })
    ).toHaveTextContent(/0 photos selected/i)
  })

  it('Creates album on click create album button', async () => {
    render(<CreateAlbumContainer />, {
      mocks: [listPhotoMock, createAlbumMock],
    })
    await waitScreenUpdate()

    // initially, create button is diabled
    expect(screen.getByRole('button', { name: /create album/i })).toBeDisabled()

    await user.type(screen.getByRole('textbox', { name: /name/i }), 'new album')
    await user.type(
      screen.getByRole('textbox', { name: /description/i }),
      'new album description'
    )
    await user.click(screen.getByRole('button', { name: /create album/i }))
    await waitScreenUpdate()

    expect(mockRouterPush).toBeCalledWith('/')
  })
})
