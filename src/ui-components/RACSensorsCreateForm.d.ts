/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RACSensorsCreateFormInputValues = {
    CO2?: number;
    MAC?: number;
    O2?: number;
    atm_temperature?: number;
    conductivity?: number;
    humidity?: number;
    pH?: number;
    temperature?: number;
    timestamp?: string;
};
export declare type RACSensorsCreateFormValidationValues = {
    CO2?: ValidationFunction<number>;
    MAC?: ValidationFunction<number>;
    O2?: ValidationFunction<number>;
    atm_temperature?: ValidationFunction<number>;
    conductivity?: ValidationFunction<number>;
    humidity?: ValidationFunction<number>;
    pH?: ValidationFunction<number>;
    temperature?: ValidationFunction<number>;
    timestamp?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RACSensorsCreateFormOverridesProps = {
    RACSensorsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    CO2?: PrimitiveOverrideProps<TextFieldProps>;
    MAC?: PrimitiveOverrideProps<TextFieldProps>;
    O2?: PrimitiveOverrideProps<TextFieldProps>;
    atm_temperature?: PrimitiveOverrideProps<TextFieldProps>;
    conductivity?: PrimitiveOverrideProps<TextFieldProps>;
    humidity?: PrimitiveOverrideProps<TextFieldProps>;
    pH?: PrimitiveOverrideProps<TextFieldProps>;
    temperature?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RACSensorsCreateFormProps = React.PropsWithChildren<{
    overrides?: RACSensorsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RACSensorsCreateFormInputValues) => RACSensorsCreateFormInputValues;
    onSuccess?: (fields: RACSensorsCreateFormInputValues) => void;
    onError?: (fields: RACSensorsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RACSensorsCreateFormInputValues) => RACSensorsCreateFormInputValues;
    onValidate?: RACSensorsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RACSensorsCreateForm(props: RACSensorsCreateFormProps): React.ReactElement;
