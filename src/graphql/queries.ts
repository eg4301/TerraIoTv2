/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getActuationMax = /* GraphQL */ `query GetActuationMax($Setup: String!, $Variable: String!) {
  getActuationMax(Setup: $Setup, Variable: $Variable) {
    Max
    Setup
    Variable
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetActuationMaxQueryVariables,
  APITypes.GetActuationMaxQuery
>;
export const listActuationMaxes = /* GraphQL */ `query ListActuationMaxes(
  $Setup: String
  $Variable: ModelStringKeyConditionInput
  $filter: ModelActuationMaxFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listActuationMaxes(
    Setup: $Setup
    Variable: $Variable
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      Max
      Setup
      Variable
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActuationMaxesQueryVariables,
  APITypes.ListActuationMaxesQuery
>;
export const getActuationMin = /* GraphQL */ `query GetActuationMin($Setup: String!, $Variable: String!) {
  getActuationMin(Setup: $Setup, Variable: $Variable) {
    Min
    Setup
    Variable
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetActuationMinQueryVariables,
  APITypes.GetActuationMinQuery
>;
export const listActuationMins = /* GraphQL */ `query ListActuationMins(
  $Setup: String
  $Variable: ModelStringKeyConditionInput
  $filter: ModelActuationMinFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listActuationMins(
    Setup: $Setup
    Variable: $Variable
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      Min
      Setup
      Variable
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActuationMinsQueryVariables,
  APITypes.ListActuationMinsQuery
>;
export const getActuationMinMax = /* GraphQL */ `query GetActuationMinMax($Setup: String!, $Variable: String!) {
  getActuationMinMax(Setup: $Setup, Variable: $Variable) {
    Max
    Min
    Setup
    Variable
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetActuationMinMaxQueryVariables,
  APITypes.GetActuationMinMaxQuery
>;
export const listActuationMinMaxes = /* GraphQL */ `query ListActuationMinMaxes(
  $Setup: String
  $Variable: ModelStringKeyConditionInput
  $filter: ModelActuationMinMaxFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listActuationMinMaxes(
    Setup: $Setup
    Variable: $Variable
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      Max
      Min
      Setup
      Variable
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActuationMinMaxesQueryVariables,
  APITypes.ListActuationMinMaxesQuery
>;
export const getRACSensors = /* GraphQL */ `query GetRACSensors($MAC: Int!, $timestamp: AWSDateTime!) {
  getRACSensors(MAC: $MAC, timestamp: $timestamp) {
    CO2
    MAC
    O2
    atm_temperature
    conductivity
    humidity
    pH
    temperature
    timestamp
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRACSensorsQueryVariables,
  APITypes.GetRACSensorsQuery
>;
export const listRACSensors = /* GraphQL */ `query ListRACSensors(
  $MAC: Int
  $timestamp: ModelStringKeyConditionInput
  $filter: ModelRACSensorsFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listRACSensors(
    MAC: $MAC
    timestamp: $timestamp
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      CO2
      MAC
      O2
      atm_temperature
      conductivity
      humidity
      pH
      temperature
      timestamp
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRACSensorsQueryVariables,
  APITypes.ListRACSensorsQuery
>;
