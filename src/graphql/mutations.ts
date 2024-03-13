/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const updateActuationMinByVariable = /* GraphQL */ `mutation UpdateActuationMinByVariable(
  $input: UpdateActuationByVariableInput
  $variable: String
) {
  updateActuationMinByVariable(input: $input, variable: $variable) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateActuationMinByVariableMutationVariables,
  APITypes.UpdateActuationMinByVariableMutation
>;
export const createActuationMax = /* GraphQL */ `mutation CreateActuationMax(
  $input: CreateActuationMaxInput!
  $condition: ModelActuationMaxConditionInput
) {
  createActuationMax(input: $input, condition: $condition) {
    Max
    PesudoMax
    Setup
    Variable
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateActuationMaxMutationVariables,
  APITypes.CreateActuationMaxMutation
>;
export const updateActuationMax = /* GraphQL */ `mutation UpdateActuationMax(
  $input: UpdateActuationMaxInput!
  $condition: ModelActuationMaxConditionInput
) {
  updateActuationMax(input: $input, condition: $condition) {
    Max
    PesudoMax
    Setup
    Variable
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateActuationMaxMutationVariables,
  APITypes.UpdateActuationMaxMutation
>;
export const deleteActuationMax = /* GraphQL */ `mutation DeleteActuationMax(
  $input: DeleteActuationMaxInput!
  $condition: ModelActuationMaxConditionInput
) {
  deleteActuationMax(input: $input, condition: $condition) {
    Max
    PesudoMax
    Setup
    Variable
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteActuationMaxMutationVariables,
  APITypes.DeleteActuationMaxMutation
>;
export const createActuationMin = /* GraphQL */ `mutation CreateActuationMin(
  $input: CreateActuationMinInput!
  $condition: ModelActuationMinConditionInput
) {
  createActuationMin(input: $input, condition: $condition) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateActuationMinMutationVariables,
  APITypes.CreateActuationMinMutation
>;
export const updateActuationMin = /* GraphQL */ `mutation UpdateActuationMin(
  $input: UpdateActuationMinInput!
  $condition: ModelActuationMinConditionInput
) {
  updateActuationMin(input: $input, condition: $condition) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateActuationMinMutationVariables,
  APITypes.UpdateActuationMinMutation
>;
export const deleteActuationMin = /* GraphQL */ `mutation DeleteActuationMin(
  $input: DeleteActuationMinInput!
  $condition: ModelActuationMinConditionInput
) {
  deleteActuationMin(input: $input, condition: $condition) {
    Min
    PesudoMin
    Setup
    Variable
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteActuationMinMutationVariables,
  APITypes.DeleteActuationMinMutation
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
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteRACSensorsMutationVariables,
  APITypes.DeleteRACSensorsMutation
>;
