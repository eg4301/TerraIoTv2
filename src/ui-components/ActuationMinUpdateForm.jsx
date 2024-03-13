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
import { getActuationMin } from "../graphql/queries";
import { updateActuationMin } from "../graphql/mutations";
const client = generateClient();
export default function ActuationMinUpdateForm(props) {
  const {
    id: idProp,
    actuationMin: actuationMinModelProp,
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
    const cleanValues = actuationMinRecord
      ? { ...initialValues, ...actuationMinRecord }
      : initialValues;
    setMin(cleanValues.Min);
    setPesudoMin(cleanValues.PesudoMin);
    setSetup(cleanValues.Setup);
    setVariable(cleanValues.Variable);
    setErrors({});
  };
  const [actuationMinRecord, setActuationMinRecord] = React.useState(
    actuationMinModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getActuationMin.replaceAll("__typename", ""),
              variables: { ...idProp },
            })
          )?.data?.getActuationMin
        : actuationMinModelProp;
      setActuationMinRecord(record);
    };
    queryData();
  }, [idProp, actuationMinModelProp]);
  React.useEffect(resetStateValues, [actuationMinRecord]);
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
          Min: Min ?? null,
          PesudoMin: PesudoMin ?? null,
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
            query: updateActuationMin.replaceAll("__typename", ""),
            variables: {
              input: {
                Setup: actuationMinRecord.Setup,
                Variable: actuationMinRecord.Variable,
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
      {...getOverrideProps(overrides, "ActuationMinUpdateForm")}
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
        isReadOnly={true}
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
        isReadOnly={true}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || actuationMinModelProp)}
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
              !(idProp || actuationMinModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
