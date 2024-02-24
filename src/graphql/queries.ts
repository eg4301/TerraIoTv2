/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getActuation = /* GraphQL */ `query GetActuation($id: ID!) {
  getActuation(id: $id) {
    Max
    Min
    Setup
    Variable
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetActuationQueryVariables,
  APITypes.GetActuationQuery
>;
export const listActuations = /* GraphQL */ `query ListActuations(
  $filter: ModelActuationFilterInput
  $limit: Int
  $nextToken: String
) {
  listActuations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      Max
      Min
      Setup
      Variable
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActuationsQueryVariables,
  APITypes.ListActuationsQuery
>;
export const getRACSensors = /* GraphQL */ `query GetRACSensors($id: ID!) {
  getRACSensors(id: $id) {
    CO2
    MAC
    O2
    atm_temperature
    conductivity
    humidity
    pH
    temperature
    timestamp
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetRACSensorsQueryVariables,
  APITypes.GetRACSensorsQuery
>;
export const listRACSensors = /* GraphQL */ `query ListRACSensors(
  $filter: ModelRACSensorsFilterInput
  $limit: Int
  $nextToken: String
) {
  listRACSensors(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      id
      createdAt
      updatedAt
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
export const getSenesorsDataByMAC = /* GraphQL */ `query GetSenesorsDataByMAC(
  $MAC: Int!
  $timestamp: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelRACSensorsFilterInput
  $limit: Int
  $nextToken: String
) {
  getSenesorsDataByMAC(
    MAC: $MAC
    timestamp: $timestamp
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
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
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSenesorsDataByMACQueryVariables,
  APITypes.GetSenesorsDataByMACQuery
>;
