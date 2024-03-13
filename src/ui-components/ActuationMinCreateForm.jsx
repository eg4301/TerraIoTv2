/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createActuationMin } from "../graphql/mutations";
const client = generateClient();
export default function ActuationMinCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Min: "",
    PesudoMin: "",
    Setup: "",
    Variable: "",
  };
  const [Min, setMin] = React.useState(initialValues.Min);
  const [PesudoMin, setPesudoMin] = React.useState(initialValues.PesudoMin);
  const [Setup, setSetup] = React.useState(initialValues.Setup);
  const [Variable, setVariable] = React.useState(initialValues.Variable);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMin(initialValues.Min);
    setPesudoMin(initialValues.PesudoMin);
    setSetup(initialValues.Setup);
    setVariable(initialValues.Variable);
    setErrors({});
  };
  const validations = {
    Min: [],
    PesudoMin: [],
    Setup: [{ type: "Required" }],
    Variable: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Min,
          PesudoMin,
          Setup,
          Variable,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createActuationMin.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ActuationMinCreateForm")}
      {...rest}
    >
      <TextField
        label="Min"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Min}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Min: value,
              PesudoMin,
              Setup,
              Variable,
            };
            const result = onChange(modelFields);
            value = result?.Min ?? value;
          }
          if (errors.Min?.hasError) {
            runValidationTasks("Min", value);
          }
          setMin(value);
        }}
        onBlur={() => runValidationTasks("Min", Min)}
        errorMessage={errors.Min?.errorMessage}
        hasError={errors.Min?.hasError}
        {...getOverrideProps(overrides, "Min")}
      ></TextField>
      <TextField
        label="Pesudo min"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={PesudoMin}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Min,
              PesudoMin: value,
              Setup,
              Variable,
            };
            const result = onChange(modelFields);
            value = result?.PesudoMin ?? value;
          }
          if (errors.PesudoMin?.hasError) {
            runValidationTasks("PesudoMin", value);
          }
          setPesudoMin(value);
        }}
        onBlur={() => runValidationTasks("PesudoMin", PesudoMin)}
        errorMessage={errors.PesudoMin?.errorMessage}
        hasError={errors.PesudoMin?.hasError}
        {...getOverrideProps(overrides, "PesudoMin")}
      ></TextField>
      <TextField
        label="Setup"
        isRequired={true}
        isReadOnly={false}
        value={Setup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Min,
              PesudoMin,
              Setup: value,
              Variable,
            };
            const result = onChange(modelFields);
            value = result?.Setup ?? value;
          }
          if (errors.Setup?.hasError) {
            runValidationTasks("Setup", value);
          }
          setSetup(value);
        }}
        onBlur={() => runValidationTasks("Setup", Setup)}
        errorMessage={errors.Setup?.errorMessage}
        hasError={errors.Setup?.hasError}
        {...getOverrideProps(overrides, "Setup")}
      ></TextField>
      <TextField
        label="Variable"
        isRequired={true}
        isReadOnly={false}
        value={Variable}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Min,
              PesudoMin,
              Setup,
              Variable: value,
            };
            const result = onChange(modelFields);
            value = result?.Variable ?? value;
          }
          if (errors.Variable?.hasError) {
            runValidationTasks("Variable", value);
          }
          setVariable(value);
        }}
        onBlur={() => runValidationTasks("Variable", Variable)}
        errorMessage={errors.Variable?.errorMessage}
        hasError={errors.Variable?.hasError}
        {...getOverrideProps(overrides, "Variable")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
