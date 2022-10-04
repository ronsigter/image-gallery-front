import type { MockedResponse } from '@apollo/client/testing'
import type { DocumentNode } from 'graphql'
import type { GraphQLRequest } from '@apollo/client'

export const createMockResponse = <T = any, V = any>(
  query: DocumentNode,
  data: T,
  variables?: V
): MockedResponse<T> => {
  let request: GraphQLRequest = {
    query,
  }

  if (variables)
    request = {
      ...request,
      variables,
    }

  return {
    request,
    result: {
      data,
    },
  }
}
