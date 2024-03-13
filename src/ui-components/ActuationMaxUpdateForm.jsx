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
import { getActuationMax } from "../graphql/queries";
import { updateActuationMax } from "../graphql/mutations";
const client = generateClient();
export default function ActuationMaxUpdateForm(props) {
  const {
    id: idProp,
    actuationMax: actuationMaxModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Max: "",
    PesudoMax: "",
    Setup: "",
    Variable: "",
  };
  const [Max, setMax] = React.useState(initialValues.Max);
  const [PesudoMax, setPesudoMax] = React.useState(initialValues.PesudoMax);
  const [Setup, setSetup] = React.useState(initialValues.Setup);
  const [Variable, setVariable] = React.useState(initialValues.Variable);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = actuationMaxRecord
      ? { ...initialValues, ...actuationMaxRecord }
      : initialValues;
    setMax(cleanValues.Max);
    setPesudoMax(cleanValues.PesudoMax);
    setSetup(cleanValues.Setup);
    setVariable(cleanValues.Variable);
    setErrors({});
  };
  const [actuationMaxRecord, setActuationMaxRecord] = React.useState(
    actuationMaxModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getActuationMax.replaceAll("__typename", ""),
              variables: { ...idProp },
            })
          )?.data?.getActuationMax
        : actuationMaxModelProp;
      setActuationMaxRecord(record);
    };
    queryData();
  }, [idProp, actuationMaxModelProp]);
  React.useEffect(resetStateValues, [actuationMaxRecord]);
  const validations = {
    Max: [],
    PesudoMax: [],
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
          Max: Max ?? null,
          PesudoMax: PesudoMax ?? null,
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
            query: updateActuationMax.replaceAll("__typename", ""),
            variables: {
              input: {
                Setup: actuationMaxRecord.Setup,
                Variable: actuationMaxRecord.Variable,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ActuationMaxUpdateForm")}
      {...rest}
    >
      <TextField
        label="Max"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Max}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Max: value,
              PesudoMax,
              Setup,
              Variable,
            };
            const result = onChange(modelFields);
            value = result?.Max ?? value;
          }
          if (errors.Max?.hasError) {
            runValidationTasks("Max", value);
          }
          setMax(value);
        }}
        onBlur={() => runValidationTasks("Max", Max)}
        errorMessage={errors.Max?.errorMessage}
        hasError={errors.Max?.hasError}
        {...getOverrideProps(overrides, "Max")}
      ></TextField>
      <TextField
        label="Pesudo max"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={PesudoMax}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Max,
              PesudoMax: value,
              Setup,
              Variable,
            };
            const result = onChange(modelFields);
            value = result?.PesudoMax ?? value;
          }
          if (errors.PesudoMax?.hasError) {
            runValidationTasks("PesudoMax", value);
          }
          setPesudoMax(value);
        }}
        onBlur={() => runValidationTasks("PesudoMax", PesudoMax)}
        errorMessage={errors.PesudoMax?.errorMessage}
        hasError={errors.PesudoMax?.hasError}
        {...getOverrideProps(overrides, "PesudoMax")}
      ></TextField>
      <TextField
        label="Setup"
        isRequired={true}
        isReadOnly={true}
        value={Setup}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Max,
              PesudoMax,
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
        isReadOnly={true}
        value={Variable}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Max,
              PesudoMax,
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || actuationMaxModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || actuationMaxModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
