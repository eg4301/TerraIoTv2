/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ActuationMax } from "../API.ts";
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
export declare type ActuationMaxUpdateFormInputValues = {
    Max?: number;
    PesudoMax?: number;
    Setup?: string;
    Variable?: string;
};
export declare type ActuationMaxUpdateFormValidationValues = {
    Max?: ValidationFunction<number>;
    PesudoMax?: ValidationFunction<number>;
    Setup?: ValidationFunction<string>;
    Variable?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActuationMaxUpdateFormOverridesProps = {
    ActuationMaxUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Max?: PrimitiveOverrideProps<TextFieldProps>;
    PesudoMax?: PrimitiveOverrideProps<TextFieldProps>;
    Setup?: PrimitiveOverrideProps<TextFieldProps>;
    Variable?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActuationMaxUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActuationMaxUpdateFormOverridesProps | undefined | null;
} & {
    id?: {
        Setup: string;
        Variable: string;
    };
    actuationMax?: ActuationMax;
    onSubmit?: (fields: ActuationMaxUpdateFormInputValues) => ActuationMaxUpdateFormInputValues;
    onSuccess?: (fields: ActuationMaxUpdateFormInputValues) => void;
    onError?: (fields: ActuationMaxUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActuationMaxUpdateFormInputValues) => ActuationMaxUpdateFormInputValues;
    onValidate?: ActuationMaxUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActuationMaxUpdateForm(props: ActuationMaxUpdateFormProps): React.ReactElement;
