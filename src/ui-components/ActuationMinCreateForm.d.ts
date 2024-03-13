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
export declare type ActuationMinCreateFormInputValues = {
    Min?: number;
    PesudoMin?: number;
    Setup?: string;
    Variable?: string;
};
export declare type ActuationMinCreateFormValidationValues = {
    Min?: ValidationFunction<number>;
    PesudoMin?: ValidationFunction<number>;
    Setup?: ValidationFunction<string>;
    Variable?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActuationMinCreateFormOverridesProps = {
    ActuationMinCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Min?: PrimitiveOverrideProps<TextFieldProps>;
    PesudoMin?: PrimitiveOverrideProps<TextFieldProps>;
    Setup?: PrimitiveOverrideProps<TextFieldProps>;
    Variable?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActuationMinCreateFormProps = React.PropsWithChildren<{
    overrides?: ActuationMinCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActuationMinCreateFormInputValues) => ActuationMinCreateFormInputValues;
    onSuccess?: (fields: ActuationMinCreateFormInputValues) => void;
    onError?: (fields: ActuationMinCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActuationMinCreateFormInputValues) => ActuationMinCreateFormInputValues;
    onValidate?: ActuationMinCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActuationMinCreateForm(props: ActuationMinCreateFormProps): React.ReactElement;
