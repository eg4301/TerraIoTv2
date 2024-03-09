/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listRACMAC2Sensors = /* GraphQL */ `query ListRACSensors2(
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
        humidity
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

export const listRACMAC1Sensors = /* GraphQL */ `query ListRACSensors1(
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
      MAC
      conductivity
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
