/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTarget = /* GraphQL */ `
  query GetTarget($id: ID!) {
    getTarget(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTargets = /* GraphQL */ `
  query ListTargets(
    $filter: ModelTargetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTargets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
