/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTarget = /* GraphQL */ `
  mutation CreateTarget(
    $input: CreateTargetInput!
    $condition: ModelTargetConditionInput
  ) {
    createTarget(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTarget = /* GraphQL */ `
  mutation UpdateTarget(
    $input: UpdateTargetInput!
    $condition: ModelTargetConditionInput
  ) {
    updateTarget(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTarget = /* GraphQL */ `
  mutation DeleteTarget(
    $input: DeleteTargetInput!
    $condition: ModelTargetConditionInput
  ) {
    deleteTarget(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
