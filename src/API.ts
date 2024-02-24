/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateActuationInput = {
  Max?: number | null,
  Min?: number | null,
  Setup: string,
  Variable: string,
  id?: string | null,
};

export type ModelActuationConditionInput = {
  Max?: ModelFloatInput | null,
  Min?: ModelFloatInput | null,
  Setup?: ModelStringInput | null,
  Variable?: ModelStringInput | null,
  and?: Array< ModelActuationConditionInput | null > | null,
  or?: Array< ModelActuationConditionInput | null > | null,
  not?: ModelActuationConditionInput | null,
};

export type ModelFloatInput = {
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Actuation = {
  __typename: "Actuation",
  Max?: number | null,
  Min?: number | null,
  Setup: string,
  Variable: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateActuationInput = {
  Max?: number | null,
  Min?: number | null,
  Setup?: string | null,
  Variable?: string | null,
  id: string,
};

export type DeleteActuationInput = {
  id: string,
};

export type CreateRACSensorsInput = {
  CO2?: number | null,
  MAC: number,
  O2?: number | null,
  atm_temperature?: number | null,
  conductivity?: number | null,
  humidity?: number | null,
  pH?: number | null,
  temperature?: number | null,
  timestamp: string,
  id?: string | null,
};

export type ModelRACSensorsConditionInput = {
  CO2?: ModelFloatInput | null,
  MAC?: ModelIntInput | null,
  O2?: ModelFloatInput | null,
  atm_temperature?: ModelFloatInput | null,
  conductivity?: ModelFloatInput | null,
  humidity?: ModelFloatInput | null,
  pH?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelRACSensorsConditionInput | null > | null,
  or?: Array< ModelRACSensorsConditionInput | null > | null,
  not?: ModelRACSensorsConditionInput | null,
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

export type RACSensors = {
  __typename: "RACSensors",
  CO2?: number | null,
  MAC: number,
  O2?: number | null,
  atm_temperature?: number | null,
  conductivity?: number | null,
  humidity?: number | null,
  pH?: number | null,
  temperature?: number | null,
  timestamp: string,
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateRACSensorsInput = {
  CO2?: number | null,
  MAC?: number | null,
  O2?: number | null,
  atm_temperature?: number | null,
  conductivity?: number | null,
  humidity?: number | null,
  pH?: number | null,
  temperature?: number | null,
  timestamp?: string | null,
  id: string,
};

export type DeleteRACSensorsInput = {
  id: string,
};

export type ModelActuationFilterInput = {
  Max?: ModelFloatInput | null,
  Min?: ModelFloatInput | null,
  Setup?: ModelStringInput | null,
  Variable?: ModelStringInput | null,
  and?: Array< ModelActuationFilterInput | null > | null,
  or?: Array< ModelActuationFilterInput | null > | null,
  not?: ModelActuationFilterInput | null,
};

export type ModelActuationConnection = {
  __typename: "ModelActuationConnection",
  items:  Array<Actuation | null >,
  nextToken?: string | null,
};

export type ModelRACSensorsFilterInput = {
  CO2?: ModelFloatInput | null,
  MAC?: ModelIntInput | null,
  O2?: ModelFloatInput | null,
  atm_temperature?: ModelFloatInput | null,
  conductivity?: ModelFloatInput | null,
  humidity?: ModelFloatInput | null,
  pH?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelRACSensorsFilterInput | null > | null,
  or?: Array< ModelRACSensorsFilterInput | null > | null,
  not?: ModelRACSensorsFilterInput | null,
};

export type ModelRACSensorsConnection = {
  __typename: "ModelRACSensorsConnection",
  items:  Array<RACSensors | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionActuationFilterInput = {
  Max?: ModelSubscriptionFloatInput | null,
  Min?: ModelSubscriptionFloatInput | null,
  Setup?: ModelSubscriptionStringInput | null,
  Variable?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActuationFilterInput | null > | null,
  or?: Array< ModelSubscriptionActuationFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
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

export type ModelSubscriptionRACSensorsFilterInput = {
  CO2?: ModelSubscriptionFloatInput | null,
  MAC?: ModelSubscriptionIntInput | null,
  O2?: ModelSubscriptionFloatInput | null,
  atm_temperature?: ModelSubscriptionFloatInput | null,
  conductivity?: ModelSubscriptionFloatInput | null,
  humidity?: ModelSubscriptionFloatInput | null,
  pH?: ModelSubscriptionFloatInput | null,
  temperature?: ModelSubscriptionFloatInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionRACSensorsFilterInput | null > | null,
  or?: Array< ModelSubscriptionRACSensorsFilterInput | null > | null,
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

export type CreateActuationMutationVariables = {
  input: CreateActuationInput,
  condition?: ModelActuationConditionInput | null,
};

export type CreateActuationMutation = {
  createActuation?:  {
    __typename: "Actuation",
    Max?: number | null,
    Min?: number | null,
    Setup: string,
    Variable: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActuationMutationVariables = {
  input: UpdateActuationInput,
  condition?: ModelActuationConditionInput | null,
};

export type UpdateActuationMutation = {
  updateActuation?:  {
    __typename: "Actuation",
    Max?: number | null,
    Min?: number | null,
    Setup: string,
    Variable: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActuationMutationVariables = {
  input: DeleteActuationInput,
  condition?: ModelActuationConditionInput | null,
};

export type DeleteActuationMutation = {
  deleteActuation?:  {
    __typename: "Actuation",
    Max?: number | null,
    Min?: number | null,
    Setup: string,
    Variable: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRACSensorsMutationVariables = {
  input: CreateRACSensorsInput,
  condition?: ModelRACSensorsConditionInput | null,
};

export type CreateRACSensorsMutation = {
  createRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRACSensorsMutationVariables = {
  input: UpdateRACSensorsInput,
  condition?: ModelRACSensorsConditionInput | null,
};

export type UpdateRACSensorsMutation = {
  updateRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRACSensorsMutationVariables = {
  input: DeleteRACSensorsInput,
  condition?: ModelRACSensorsConditionInput | null,
};

export type DeleteRACSensorsMutation = {
  deleteRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetActuationQueryVariables = {
  id: string,
};

export type GetActuationQuery = {
  getActuation?:  {
    __typename: "Actuation",
    Max?: number | null,
    Min?: number | null,
    Setup: string,
    Variable: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActuationsQueryVariables = {
  filter?: ModelActuationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActuationsQuery = {
  listActuations?:  {
    __typename: "ModelActuationConnection",
    items:  Array< {
      __typename: "Actuation",
      Max?: number | null,
      Min?: number | null,
      Setup: string,
      Variable: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRACSensorsQueryVariables = {
  id: string,
};

export type GetRACSensorsQuery = {
  getRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRACSensorsQueryVariables = {
  filter?: ModelRACSensorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRACSensorsQuery = {
  listRACSensors?:  {
    __typename: "ModelRACSensorsConnection",
    items:  Array< {
      __typename: "RACSensors",
      CO2?: number | null,
      MAC: number,
      O2?: number | null,
      atm_temperature?: number | null,
      conductivity?: number | null,
      humidity?: number | null,
      pH?: number | null,
      temperature?: number | null,
      timestamp: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSenesorsDataByMACQueryVariables = {
  MAC: number,
  timestamp?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRACSensorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetSenesorsDataByMACQuery = {
  getSenesorsDataByMAC?:  {
    __typename: "ModelRACSensorsConnection",
    items:  Array< {
      __typename: "RACSensors",
      CO2?: number | null,
      MAC: number,
      O2?: number | null,
      atm_temperature?: number | null,
      conductivity?: number | null,
      humidity?: number | null,
      pH?: number | null,
      temperature?: number | null,
      timestamp: string,
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateActuationSubscriptionVariables = {
  filter?: ModelSubscriptionActuationFilterInput | null,
};

export type OnCreateActuationSubscription = {
  onCreateActuation?:  {
    __typename: "Actuation",
    Max?: number | null,
    Min?: number | null,
    Setup: string,
    Variable: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActuationSubscriptionVariables = {
  filter?: ModelSubscriptionActuationFilterInput | null,
};

export type OnUpdateActuationSubscription = {
  onUpdateActuation?:  {
    __typename: "Actuation",
    Max?: number | null,
    Min?: number | null,
    Setup: string,
    Variable: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActuationSubscriptionVariables = {
  filter?: ModelSubscriptionActuationFilterInput | null,
};

export type OnDeleteActuationSubscription = {
  onDeleteActuation?:  {
    __typename: "Actuation",
    Max?: number | null,
    Min?: number | null,
    Setup: string,
    Variable: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRACSensorsSubscriptionVariables = {
  filter?: ModelSubscriptionRACSensorsFilterInput | null,
};

export type OnCreateRACSensorsSubscription = {
  onCreateRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRACSensorsSubscriptionVariables = {
  filter?: ModelSubscriptionRACSensorsFilterInput | null,
};

export type OnUpdateRACSensorsSubscription = {
  onUpdateRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRACSensorsSubscriptionVariables = {
  filter?: ModelSubscriptionRACSensorsFilterInput | null,
};

export type OnDeleteRACSensorsSubscription = {
  onDeleteRACSensors?:  {
    __typename: "RACSensors",
    CO2?: number | null,
    MAC: number,
    O2?: number | null,
    atm_temperature?: number | null,
    conductivity?: number | null,
    humidity?: number | null,
    pH?: number | null,
    temperature?: number | null,
    timestamp: string,
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
