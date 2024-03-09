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
export declare type ActuationMinMaxCreateFormInputValues = {
    Max?: number;
    Min?: number;
    Setup?: string;
    Variable?: string;
};
export declare type ActuationMinMaxCreateFormValidationValues = {
    Max?: ValidationFunction<number>;
    Min?: ValidationFunction<number>;
    Setup?: ValidationFunction<string>;
    Variable?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActuationMinMaxCreateFormOverridesProps = {
    ActuationMinMaxCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Max?: PrimitiveOverrideProps<TextFieldProps>;
    Min?: PrimitiveOverrideProps<TextFieldProps>;
    Setup?: PrimitiveOverrideProps<TextFieldProps>;
    Variable?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActuationMinMaxCreateFormProps = React.PropsWithChildren<{
    overrides?: ActuationMinMaxCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActuationMinMaxCreateFormInputValues) => ActuationMinMaxCreateFormInputValues;
    onSuccess?: (fields: ActuationMinMaxCreateFormInputValues) => void;
    onError?: (fields: ActuationMinMaxCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActuationMinMaxCreateFormInputValues) => ActuationMinMaxCreateFormInputValues;
    onValidate?: ActuationMinMaxCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActuationMinMaxCreateForm(props: ActuationMinMaxCreateFormProps): React.ReactElement;
