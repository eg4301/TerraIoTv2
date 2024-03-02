/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UpdateActuationByVariableInput = {
  Min: number,
};

export type ActuationMin = {
  __typename: "ActuationMin",
  Min?: number | null,
  Setup: string,
  Variable: string,
};

export type CreateActuationMaxInput = {
  Max?: number | null,
  Setup: string,
  Variable: string,
};

export type ModelActuationMaxConditionInput = {
  Max?: ModelFloatInput | null,
  and?: Array< ModelActuationMaxConditionInput | null > | null,
  or?: Array< ModelActuationMaxConditionInput | null > | null,
  not?: ModelActuationMaxConditionInput | null,
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


export type ActuationMax = {
  __typename: "ActuationMax",
  Max?: number | null,
  Setup: string,
  Variable: string,
};

export type UpdateActuationMaxInput = {
  Max?: number | null,
  Setup: string,
  Variable: string,
};

export type DeleteActuationMaxInput = {
  Setup: string,
  Variable: string,
};

export type CreateActuationMinInput = {
  Min?: number | null,
  Setup: string,
  Variable: string,
};

export type ModelActuationMinConditionInput = {
  Min?: ModelFloatInput | null,
  and?: Array< ModelActuationMinConditionInput | null > | null,
  or?: Array< ModelActuationMinConditionInput | null > | null,
  not?: ModelActuationMinConditionInput | null,
};

export type UpdateActuationMinInput = {
  Min?: number | null,
  Setup: string,
  Variable: string,
};

export type DeleteActuationMinInput = {
  Setup: string,
  Variable: string,
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
};

export type ModelRACSensorsConditionInput = {
  CO2?: ModelFloatInput | null,
  O2?: ModelFloatInput | null,
  atm_temperature?: ModelFloatInput | null,
  conductivity?: ModelFloatInput | null,
  humidity?: ModelFloatInput | null,
  pH?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  and?: Array< ModelRACSensorsConditionInput | null > | null,
  or?: Array< ModelRACSensorsConditionInput | null > | null,
  not?: ModelRACSensorsConditionInput | null,
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
};

export type UpdateRACSensorsInput = {
  CO2?: number | null,
  MAC: number,
  O2?: number | null,
  atm_temperature?: number | null,
  conductivity?: number | null,
  humidity?: number | null,
  pH?: number | null,
  temperature?: number | null,
  timestamp: string,
};

export type DeleteRACSensorsInput = {
  MAC: number,
  timestamp: string,
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

export type ModelActuationMaxFilterInput = {
  Max?: ModelFloatInput | null,
  Setup?: ModelStringInput | null,
  Variable?: ModelStringInput | null,
  and?: Array< ModelActuationMaxFilterInput | null > | null,
  or?: Array< ModelActuationMaxFilterInput | null > | null,
  not?: ModelActuationMaxFilterInput | null,
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelActuationMaxConnection = {
  __typename: "ModelActuationMaxConnection",
  items:  Array<ActuationMax | null >,
  nextToken?: string | null,
};

export type ModelActuationMinFilterInput = {
  Min?: ModelFloatInput | null,
  Setup?: ModelStringInput | null,
  Variable?: ModelStringInput | null,
  and?: Array< ModelActuationMinFilterInput | null > | null,
  or?: Array< ModelActuationMinFilterInput | null > | null,
  not?: ModelActuationMinFilterInput | null,
};

export type ModelActuationMinConnection = {
  __typename: "ModelActuationMinConnection",
  items:  Array<ActuationMin | null >,
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

export type ModelRACSensorsConnection = {
  __typename: "ModelRACSensorsConnection",
  items:  Array<RACSensors | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionActuationMaxFilterInput = {
  Max?: ModelSubscriptionFloatInput | null,
  Setup?: ModelSubscriptionStringInput | null,
  Variable?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActuationMaxFilterInput | null > | null,
  or?: Array< ModelSubscriptionActuationMaxFilterInput | null > | null,
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

export type ModelSubscriptionActuationMinFilterInput = {
  Min?: ModelSubscriptionFloatInput | null,
  Setup?: ModelSubscriptionStringInput | null,
  Variable?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActuationMinFilterInput | null > | null,
  or?: Array< ModelSubscriptionActuationMinFilterInput | null > | null,
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

export type UpdateActuationMinByVariableMutationVariables = {
  input?: UpdateActuationByVariableInput | null,
  variable?: string | null,
};

export type UpdateActuationMinByVariableMutation = {
  updateActuationMinByVariable:  {
    __typename: "ActuationMin",
    Min?: number | null,
    Setup: string,
    Variable: string,
  },
};

export type CreateActuationMaxMutationVariables = {
  input: CreateActuationMaxInput,
  condition?: ModelActuationMaxConditionInput | null,
};

export type CreateActuationMaxMutation = {
  createActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type UpdateActuationMaxMutationVariables = {
  input: UpdateActuationMaxInput,
  condition?: ModelActuationMaxConditionInput | null,
};

export type UpdateActuationMaxMutation = {
  updateActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type DeleteActuationMaxMutationVariables = {
  input: DeleteActuationMaxInput,
  condition?: ModelActuationMaxConditionInput | null,
};

export type DeleteActuationMaxMutation = {
  deleteActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type CreateActuationMinMutationVariables = {
  input: CreateActuationMinInput,
  condition?: ModelActuationMinConditionInput | null,
};

export type CreateActuationMinMutation = {
  createActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type UpdateActuationMinMutationVariables = {
  input: UpdateActuationMinInput,
  condition?: ModelActuationMinConditionInput | null,
};

export type UpdateActuationMinMutation = {
  updateActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type DeleteActuationMinMutationVariables = {
  input: DeleteActuationMinInput,
  condition?: ModelActuationMinConditionInput | null,
};

export type DeleteActuationMinMutation = {
  deleteActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    Setup: string,
    Variable: string,
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
  } | null,
};

export type GetActuationMaxQueryVariables = {
  Setup: string,
  Variable: string,
};

export type GetActuationMaxQuery = {
  getActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type ListActuationMaxesQueryVariables = {
  Setup?: string | null,
  Variable?: ModelStringKeyConditionInput | null,
  filter?: ModelActuationMaxFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListActuationMaxesQuery = {
  listActuationMaxes?:  {
    __typename: "ModelActuationMaxConnection",
    items:  Array< {
      __typename: "ActuationMax",
      Max?: number | null,
      Setup: string,
      Variable: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetActuationMinQueryVariables = {
  Setup: string,
  Variable: string,
};

export type GetActuationMinQuery = {
  getActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type ListActuationMinsQueryVariables = {
  Setup?: string | null,
  Variable?: ModelStringKeyConditionInput | null,
  filter?: ModelActuationMinFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListActuationMinsQuery = {
  listActuationMins?:  {
    __typename: "ModelActuationMinConnection",
    items:  Array< {
      __typename: "ActuationMin",
      Min?: number | null,
      Setup: string,
      Variable: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRACSensorsQueryVariables = {
  MAC: number,
  timestamp: string,
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
  } | null,
};

export type ListRACSensorsQueryVariables = {
  MAC?: number | null,
  timestamp?: ModelStringKeyConditionInput | null,
  filter?: ModelRACSensorsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
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
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateActuationMaxSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMaxFilterInput | null,
};

export type OnCreateActuationMaxSubscription = {
  onCreateActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnUpdateActuationMaxSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMaxFilterInput | null,
};

export type OnUpdateActuationMaxSubscription = {
  onUpdateActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnDeleteActuationMaxSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMaxFilterInput | null,
};

export type OnDeleteActuationMaxSubscription = {
  onDeleteActuationMax?:  {
    __typename: "ActuationMax",
    Max?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnCreateActuationMinSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMinFilterInput | null,
};

export type OnCreateActuationMinSubscription = {
  onCreateActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnUpdateActuationMinSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMinFilterInput | null,
};

export type OnUpdateActuationMinSubscription = {
  onUpdateActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    Setup: string,
    Variable: string,
  } | null,
};

export type OnDeleteActuationMinSubscriptionVariables = {
  filter?: ModelSubscriptionActuationMinFilterInput | null,
};

export type OnDeleteActuationMinSubscription = {
  onDeleteActuationMin?:  {
    __typename: "ActuationMin",
    Min?: number | null,
    Setup: string,
    Variable: string,
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
  } | null,
};
