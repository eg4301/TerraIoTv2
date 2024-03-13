/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateActuationMax = /* GraphQL */ `subscription OnCreateActuationMax(
  $filter: ModelSubscriptionActuationMaxFilterInput
) {
  onCreateActuationMax(filter: $filter) {
    Max
    PesudoMax
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateActuationMaxSubscriptionVariables,
  APITypes.OnCreateActuationMaxSubscription
>;
export const onUpdateActuationMax = /* GraphQL */ `subscription OnUpdateActuationMax(
  $filter: ModelSubscriptionActuationMaxFilterInput
) {
  onUpdateActuationMax(filter: $filter) {
    Max
    PesudoMax
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateActuationMaxSubscriptionVariables,
  APITypes.OnUpdateActuationMaxSubscription
>;
export const onDeleteActuationMax = /* GraphQL */ `subscription OnDeleteActuationMax(
  $filter: ModelSubscriptionActuationMaxFilterInput
) {
  onDeleteActuationMax(filter: $filter) {
    Max
    PesudoMax
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteActuationMaxSubscriptionVariables,
  APITypes.OnDeleteActuationMaxSubscription
>;
export const onCreateActuationMin = /* GraphQL */ `subscription OnCreateActuationMin(
  $filter: ModelSubscriptionActuationMinFilterInput
) {
  onCreateActuationMin(filter: $filter) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateActuationMinSubscriptionVariables,
  APITypes.OnCreateActuationMinSubscription
>;
export const onUpdateActuationMin = /* GraphQL */ `subscription OnUpdateActuationMin(
  $filter: ModelSubscriptionActuationMinFilterInput
) {
  onUpdateActuationMin(filter: $filter) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateActuationMinSubscriptionVariables,
  APITypes.OnUpdateActuationMinSubscription
>;
export const onDeleteActuationMin = /* GraphQL */ `subscription OnDeleteActuationMin(
  $filter: ModelSubscriptionActuationMinFilterInput
) {
  onDeleteActuationMin(filter: $filter) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteActuationMinSubscriptionVariables,
  APITypes.OnDeleteActuationMinSubscription
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteRACSensorsSubscriptionVariables,
  APITypes.OnDeleteRACSensorsSubscription
>;
