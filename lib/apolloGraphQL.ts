import fetch from 'cross-fetch'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import type { NormalizedCacheObject } from '@apollo/client'

// get graphql server link
const GRAPHQL_SERVER =
  process.env.GRAPHQL_SERVER || 'http://localhost:4000/graphql'

const httpLink = createHttpLink({
  uri: GRAPHQL_SERVER,
  fetch,
})

// configure headers
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  // we will transfer this to cookies in the future
  const token = ''

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

// Chain the HTTP link and the authorization link.
const link = authLink.concat(httpLink)
const cache = new InMemoryCache()

// instantiate Apollo Client
export const apolloClient: ApolloClient<NormalizedCacheObject> =
  new ApolloClient({
    link,
    cache,
  })
