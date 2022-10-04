import { ChakraProvider } from '@chakra-ui/react'
import {
  act,
  render,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'
import { MockedProvider, MockedResponse } from '@apollo/client/testing'

// We'll add some providers here if ever we'll be using contexts
interface AllTheProvidersProps {
  children?: React.ReactNode
  mocks?: MockedResponse<any>[]
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({
  children,
  mocks = [],
}) => (
  <ChakraProvider>
    <MockedProvider mocks={mocks} addTypename={true}>
      {children}
    </MockedProvider>
  </ChakraProvider>
)

type RenderOptionsType = Omit<RenderOptions, 'queries'> & {
  mocks?: MockedResponse<any>[]
}

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptionsType
): RenderResult => {
  const { mocks = [], ...rest } = options || {}

  return render(ui, {
    wrapper: (props) => AllTheProviders({ ...props, mocks }),
    ...rest,
  })
}

export const waitScreenUpdate = async (timer?: number): Promise<void> => {
  // ? Wait for the lazy component to load
  await act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, timer || 0)
      })
  )
}

// Re-export all of react testing lib here
export * from '@testing-library/react'
export { customRender as render }
export { default as userEvent } from '@testing-library/user-event'
