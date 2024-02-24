/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createActuation = /* GraphQL */ `mutation CreateActuation(
  $input: CreateActuationInput!
  $condition: ModelActuationConditionInput
) {
  createActuation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateActuationMutationVariables,
  APITypes.CreateActuationMutation
>;
export const updateActuation = /* GraphQL */ `mutation UpdateActuation(
  $input: UpdateActuationInput!
  $condition: ModelActuationConditionInput
) {
  updateActuation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateActuationMutationVariables,
  APITypes.UpdateActuationMutation
>;
export const deleteActuation = /* GraphQL */ `mutation DeleteActuation(
  $input: DeleteActuationInput!
  $condition: ModelActuationConditionInput
) {
  deleteActuation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteActuationMutationVariables,
  APITypes.DeleteActuationMutation
>;
export const createRACSensors = /* GraphQL */ `mutation CreateRACSensors(
  $input: CreateRACSensorsInput!
  $condition: ModelRACSensorsConditionInput
) {
  createRACSensors(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateRACSensorsMutationVariables,
  APITypes.CreateRACSensorsMutation
>;
export const updateRACSensors = /* GraphQL */ `mutation UpdateRACSensors(
  $input: UpdateRACSensorsInput!
  $condition: ModelRACSensorsConditionInput
) {
  updateRACSensors(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateRACSensorsMutationVariables,
  APITypes.UpdateRACSensorsMutation
>;
export const deleteRACSensors = /* GraphQL */ `mutation DeleteRACSensors(
  $input: DeleteRACSensorsInput!
  $condition: ModelRACSensorsConditionInput
) {
  deleteRACSensors(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteRACSensorsMutationVariables,
  APITypes.DeleteRACSensorsMutation
>;
