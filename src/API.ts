/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTargetInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTargetConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTargetConditionInput | null > | null,
  or?: Array< ModelTargetConditionInput | null > | null,
  not?: ModelTargetConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Target = {
  __typename: "Target",
  id?: string,
  name?: string,
  description?: string | null,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateTargetInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTargetInput = {
  id?: string | null,
};

export type ModelTargetFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTargetFilterInput | null > | null,
  or?: Array< ModelTargetFilterInput | null > | null,
  not?: ModelTargetFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTargetConnection = {
  __typename: "ModelTargetConnection",
  items?:  Array<Target | null > | null,
  nextToken?: string | null,
};

export type CreateTargetMutationVariables = {
  input?: CreateTargetInput,
  condition?: ModelTargetConditionInput | null,
};

export type CreateTargetMutation = {
  createTarget?:  {
    __typename: "Target",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTargetMutationVariables = {
  input?: UpdateTargetInput,
  condition?: ModelTargetConditionInput | null,
};

export type UpdateTargetMutation = {
  updateTarget?:  {
    __typename: "Target",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTargetMutationVariables = {
  input?: DeleteTargetInput,
  condition?: ModelTargetConditionInput | null,
};

export type DeleteTargetMutation = {
  deleteTarget?:  {
    __typename: "Target",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTargetQueryVariables = {
  id?: string,
};

export type GetTargetQuery = {
  getTarget?:  {
    __typename: "Target",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTargetsQueryVariables = {
  filter?: ModelTargetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTargetsQuery = {
  listTargets?:  {
    __typename: "ModelTargetConnection",
    items?:  Array< {
      __typename: "Target",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTargetSubscription = {
  onCreateTarget?:  {
    __typename: "Target",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTargetSubscription = {
  onUpdateTarget?:  {
    __typename: "Target",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTargetSubscription = {
  onDeleteTarget?:  {
    __typename: "Target",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
