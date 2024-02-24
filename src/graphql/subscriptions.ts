/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateActuation = /* GraphQL */ `subscription OnCreateActuation($filter: ModelSubscriptionActuationFilterInput) {
  onCreateActuation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateActuationSubscriptionVariables,
  APITypes.OnCreateActuationSubscription
>;
export const onUpdateActuation = /* GraphQL */ `subscription OnUpdateActuation($filter: ModelSubscriptionActuationFilterInput) {
  onUpdateActuation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateActuationSubscriptionVariables,
  APITypes.OnUpdateActuationSubscription
>;
export const onDeleteActuation = /* GraphQL */ `subscription OnDeleteActuation($filter: ModelSubscriptionActuationFilterInput) {
  onDeleteActuation(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteActuationSubscriptionVariables,
  APITypes.OnDeleteActuationSubscription
>;
export const onCreateRACSensors = /* GraphQL */ `subscription OnCreateRACSensors(
  $filter: ModelSubscriptionRACSensorsFilterInput
) {
  onCreateRACSensors(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateRACSensorsSubscriptionVariables,
  APITypes.OnCreateRACSensorsSubscription
>;
export const onUpdateRACSensors = /* GraphQL */ `subscription OnUpdateRACSensors(
  $filter: ModelSubscriptionRACSensorsFilterInput
) {
  onUpdateRACSensors(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateRACSensorsSubscriptionVariables,
  APITypes.OnUpdateRACSensorsSubscription
>;
export const onDeleteRACSensors = /* GraphQL */ `subscription OnDeleteRACSensors(
  $filter: ModelSubscriptionRACSensorsFilterInput
) {
  onDeleteRACSensors(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteRACSensorsSubscriptionVariables,
  APITypes.OnDeleteRACSensorsSubscription
>;
