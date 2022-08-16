/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVideoInput = {
  id?: string | null,
  name: string,
  description: string,
  url: string,
  like: number,
  author: string,
};

export type ModelVideoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  like?: ModelIntInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelVideoConditionInput | null > | null,
  or?: Array< ModelVideoConditionInput | null > | null,
  not?: ModelVideoConditionInput | null,
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

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Video = {
  __typename: "Video",
  id: string,
  name: string,
  description: string,
  url: string,
  like: number,
  author: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVideoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  url?: string | null,
  like?: number | null,
  author?: string | null,
};

export type DeleteVideoInput = {
  id: string,
};

export type ModelVideoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  url?: ModelStringInput | null,
  like?: ModelIntInput | null,
  author?: ModelStringInput | null,
  and?: Array< ModelVideoFilterInput | null > | null,
  or?: Array< ModelVideoFilterInput | null > | null,
  not?: ModelVideoFilterInput | null,
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

export type ModelVideoConnection = {
  __typename: "ModelVideoConnection",
  items:  Array<Video | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionVideoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  like?: ModelSubscriptionIntInput | null,
  author?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVideoFilterInput | null > | null,
  or?: Array< ModelSubscriptionVideoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
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
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateVideoMutationVariables = {
  input: CreateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type CreateVideoMutation = {
  createVideo?:  {
    __typename: "Video",
    id: string,
    name: string,
    description: string,
    url: string,
    like: number,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVideoMutationVariables = {
  input: UpdateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type UpdateVideoMutation = {
  updateVideo?:  {
    __typename: "Video",
    id: string,
    name: string,
    description: string,
    url: string,
    like: number,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVideoMutationVariables = {
  input: DeleteVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type DeleteVideoMutation = {
  deleteVideo?:  {
    __typename: "Video",
    id: string,
    name: string,
    description: string,
    url: string,
    like: number,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetVideoQueryVariables = {
  id: string,
};

export type GetVideoQuery = {
  getVideo?:  {
    __typename: "Video",
    id: string,
    name: string,
    description: string,
    url: string,
    like: number,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVideosQueryVariables = {
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideosQuery = {
  listVideos?:  {
    __typename: "ModelVideoConnection",
    items:  Array< {
      __typename: "Video",
      id: string,
      name: string,
      description: string,
      url: string,
      like: number,
      author: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateVideoSubscriptionVariables = {
  filter?: ModelSubscriptionVideoFilterInput | null,
};

export type OnCreateVideoSubscription = {
  onCreateVideo?:  {
    __typename: "Video",
    id: string,
    name: string,
    description: string,
    url: string,
    like: number,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVideoSubscriptionVariables = {
  filter?: ModelSubscriptionVideoFilterInput | null,
};

export type OnUpdateVideoSubscription = {
  onUpdateVideo?:  {
    __typename: "Video",
    id: string,
    name: string,
    description: string,
    url: string,
    like: number,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVideoSubscriptionVariables = {
  filter?: ModelSubscriptionVideoFilterInput | null,
};

export type OnDeleteVideoSubscription = {
  onDeleteVideo?:  {
    __typename: "Video",
    id: string,
    name: string,
    description: string,
    url: string,
    like: number,
    author: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
