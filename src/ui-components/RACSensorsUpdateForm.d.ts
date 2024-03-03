/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { RACSensors } from "../API.ts";
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
export declare type RACSensorsUpdateFormInputValues = {
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
export declare type RACSensorsUpdateFormValidationValues = {
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
export declare type RACSensorsUpdateFormOverridesProps = {
    RACSensorsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type RACSensorsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RACSensorsUpdateFormOverridesProps | undefined | null;
} & {
    id?: {
        MAC: number;
        timestamp: string;
    };
    rACSensors?: RACSensors;
    onSubmit?: (fields: RACSensorsUpdateFormInputValues) => RACSensorsUpdateFormInputValues;
    onSuccess?: (fields: RACSensorsUpdateFormInputValues) => void;
    onError?: (fields: RACSensorsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RACSensorsUpdateFormInputValues) => RACSensorsUpdateFormInputValues;
    onValidate?: RACSensorsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RACSensorsUpdateForm(props: RACSensorsUpdateFormProps): React.ReactElement;
