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
import { getSoilSensors } from "../graphql/queries";
import { updateSoilSensors } from "../graphql/mutations";
const client = generateClient();
export default function SoilSensorsUpdateForm(props) {
  const {
    id: idProp,
    soilSensors: soilSensorsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    CO2: "",
    MAC: "",
    O2: "",
    atm_temperature: "",
    conductivity: "",
    humidity: "",
    Nitrogen: "",
    Phosphorous: "",
    pH: "",
    temperature: "",
    timestamp: "",
  };
  const [CO2, setCO2] = React.useState(initialValues.CO2);
  const [MAC, setMAC] = React.useState(initialValues.MAC);
  const [O2, setO2] = React.useState(initialValues.O2);
  const [atm_temperature, setAtm_temperature] = React.useState(
    initialValues.atm_temperature
  );
  const [conductivity, setConductivity] = React.useState(
    initialValues.conductivity
  );
  const [humidity, setHumidity] = React.useState(initialValues.humidity);
  const [Nitrogen, setNitrogen] = React.useState(initialValues.Nitrogen);
  const [Phosphorous, setPhosphorous] = React.useState(
    initialValues.Phosphorous
  );
  const [pH, setPH] = React.useState(initialValues.pH);
  const [temperature, setTemperature] = React.useState(
    initialValues.temperature
  );
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = soilSensorsRecord
      ? { ...initialValues, ...soilSensorsRecord }
      : initialValues;
    setCO2(cleanValues.CO2);
    setMAC(cleanValues.MAC);
    setO2(cleanValues.O2);
    setAtm_temperature(cleanValues.atm_temperature);
    setConductivity(cleanValues.conductivity);
    setHumidity(cleanValues.humidity);
    setNitrogen(cleanValues.Nitrogen);
    setPhosphorous(cleanValues.Phosphorous);
    setPH(cleanValues.pH);
    setTemperature(cleanValues.temperature);
    setTimestamp(cleanValues.timestamp);
    setErrors({});
  };
  const [soilSensorsRecord, setSoilSensorsRecord] =
    React.useState(soilSensorsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getSoilSensors.replaceAll("__typename", ""),
              variables: { ...idProp },
            })
          )?.data?.getSoilSensors
        : soilSensorsModelProp;
      setSoilSensorsRecord(record);
    };
    queryData();
  }, [idProp, soilSensorsModelProp]);
  React.useEffect(resetStateValues, [soilSensorsRecord]);
  const validations = {
    CO2: [],
    MAC: [{ type: "Required" }],
    O2: [],
    atm_temperature: [],
    conductivity: [],
    humidity: [],
    Nitrogen: [],
    Phosphorous: [],
    pH: [],
    temperature: [],
    timestamp: [{ type: "Required" }],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          CO2: CO2 ?? null,
          MAC,
          O2: O2 ?? null,
          atm_temperature: atm_temperature ?? null,
          conductivity: conductivity ?? null,
          humidity: humidity ?? null,
          Nitrogen: Nitrogen ?? null,
          Phosphorous: Phosphorous ?? null,
          pH: pH ?? null,
          temperature: temperature ?? null,
          timestamp,
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
            query: updateSoilSensors.replaceAll("__typename", ""),
            variables: {
              input: {
                MAC: soilSensorsRecord.MAC,
                timestamp: soilSensorsRecord.timestamp,
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
      {...getOverrideProps(overrides, "SoilSensorsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Co2"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={CO2}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CO2: value,
              MAC,
              O2,
              atm_temperature,
              conductivity,
              humidity,
              Nitrogen,
              Phosphorous,
              pH,
              temperature,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.CO2 ?? value;
          }
          if (errors.CO2?.hasError) {
            runValidationTasks("CO2", value);
          }
          setCO2(value);
        }}
        onBlur={() => runValidationTasks("CO2", CO2)}
        errorMessage={errors.CO2?.errorMessage}
        hasError={errors.CO2?.hasError}
        {...getOverrideProps(overrides, "CO2")}
      ></TextField>
      <TextField
        label="Mac"
        isRequired={true}
        isReadOnly={true}
        type="number"
        step="any"
        value={MAC}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              CO2,
              MAC: value,
              O2,
              atm_temperature,
              conductivity,
              humidity,
              Nitrogen,
              Phosphorous,
              pH,
              temperature,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.MAC ?? value;
          }
          if (errors.MAC?.hasError) {
            runValidationTasks("MAC", value);
          }
          setMAC(value);
        }}
        onBlur={() => runValidationTasks("MAC", MAC)}
        errorMessage={errors.MAC?.errorMessage}
        hasError={errors.MAC?.hasError}
        {...getOverrideProps(overrides, "MAC")}
      ></TextField>
      <TextField
        label="O2"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={O2}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CO2,
              MAC,
              O2: value,
              atm_temperature,
              conductivity,
              humidity,
              Nitrogen,
              Phosphorous,
              pH,
              temperature,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.O2 ?? value;
          }
          if (errors.O2?.hasError) {
            runValidationTasks("O2", value);
          }
          setO2(value);
        }}
        onBlur={() => runValidationTasks("O2", O2)}
        errorMessage={errors.O2?.errorMessage}
        hasError={errors.O2?.hasError}
        {...getOverrideProps(overrides, "O2")}
      ></TextField>
      <TextField
        label="Atm temperature"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={atm_temperature}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CO2,
              MAC,
              O2,
              atm_temperature: value,
              conductivity,
              humidity,
              Nitrogen,
              Phosphorous,
              pH,
              temperature,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.atm_temperature ?? value;
          }
          if (errors.atm_temperature?.hasError) {
            runValidationTasks("atm_temperature", value);
          }
          setAtm_temperature(value);
        }}
        onBlur={() => runValidationTasks("atm_temperature", atm_temperature)}
        errorMessage={errors.atm_temperature?.errorMessage}
        hasError={errors.atm_temperature?.hasError}
        {...getOverrideProps(overrides, "atm_temperature")}
      ></TextField>
      <TextField
        label="Conductivity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={conductivity}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CO2,
              MAC,
              O2,
              atm_temperature,
              conductivity: value,
              humidity,
              Nitrogen,
              Phosphorous,
              pH,
              temperature,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.conductivity ?? value;
          }
          if (errors.conductivity?.hasError) {
            runValidationTasks("conductivity", value);
          }
          setConductivity(value);
        }}
        onBlur={() => runValidationTasks("conductivity", conductivity)}
        errorMessage={errors.conductivity?.errorMessage}
        hasError={errors.conductivity?.hasError}
        {...getOverrideProps(overrides, "conductivity")}
      ></TextField>
      <TextField
        label="Humidity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={humidity}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CO2,
              MAC,
              O2,
              atm_temperature,
              conductivity,
              humidity: value,
              Nitrogen,
              Phosphorous,
              pH,
              temperature,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.humidity ?? value;
          }
          if (errors.humidity?.hasError) {
            runValidationTasks("humidity", value);
          }
          setHumidity(value);
        }}
        onBlur={() => runValidationTasks("humidity", humidity)}
        errorMessage={errors.humidity?.errorMessage}
        hasError={errors.humidity?.hasError}
        {...getOverrideProps(overrides, "humidity")}
      ></TextField>
      <TextField
        label="Nitrogen"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Nitrogen}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CO2,
              MAC,
              O2,
              atm_temperature,
              conductivity,
              humidity,
              Nitrogen: value,
              Phosphorous,
              pH,
              temperature,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.Nitrogen ?? value;
          }
          if (errors.Nitrogen?.hasError) {
            runValidationTasks("Nitrogen", value);
          }
          setNitrogen(value);
        }}
        onBlur={() => runValidationTasks("Nitrogen", Nitrogen)}
        errorMessage={errors.Nitrogen?.errorMessage}
        hasError={errors.Nitrogen?.hasError}
        {...getOverrideProps(overrides, "Nitrogen")}
      ></TextField>
      <TextField
        label="Phosphorous"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Phosphorous}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CO2,
              MAC,
              O2,
              atm_temperature,
              conductivity,
              humidity,
              Nitrogen,
              Phosphorous: value,
              pH,
              temperature,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.Phosphorous ?? value;
          }
          if (errors.Phosphorous?.hasError) {
            runValidationTasks("Phosphorous", value);
          }
          setPhosphorous(value);
        }}
        onBlur={() => runValidationTasks("Phosphorous", Phosphorous)}
        errorMessage={errors.Phosphorous?.errorMessage}
        hasError={errors.Phosphorous?.hasError}
        {...getOverrideProps(overrides, "Phosphorous")}
      ></TextField>
      <TextField
        label="P h"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={pH}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CO2,
              MAC,
              O2,
              atm_temperature,
              conductivity,
              humidity,
              Nitrogen,
              Phosphorous,
              pH: value,
              temperature,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.pH ?? value;
          }
          if (errors.pH?.hasError) {
            runValidationTasks("pH", value);
          }
          setPH(value);
        }}
        onBlur={() => runValidationTasks("pH", pH)}
        errorMessage={errors.pH?.errorMessage}
        hasError={errors.pH?.hasError}
        {...getOverrideProps(overrides, "pH")}
      ></TextField>
      <TextField
        label="Temperature"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={temperature}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CO2,
              MAC,
              O2,
              atm_temperature,
              conductivity,
              humidity,
              Nitrogen,
              Phosphorous,
              pH,
              temperature: value,
              timestamp,
            };
            const result = onChange(modelFields);
            value = result?.temperature ?? value;
          }
          if (errors.temperature?.hasError) {
            runValidationTasks("temperature", value);
          }
          setTemperature(value);
        }}
        onBlur={() => runValidationTasks("temperature", temperature)}
        errorMessage={errors.temperature?.errorMessage}
        hasError={errors.temperature?.hasError}
        {...getOverrideProps(overrides, "temperature")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={true}
        type="datetime-local"
        value={timestamp && convertToLocal(new Date(timestamp))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              CO2,
              MAC,
              O2,
              atm_temperature,
              conductivity,
              humidity,
              Nitrogen,
              Phosphorous,
              pH,
              temperature,
              timestamp: value,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
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
          isDisabled={!(idProp || soilSensorsModelProp)}
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
              !(idProp || soilSensorsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
