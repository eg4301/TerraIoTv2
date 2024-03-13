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
export declare type ActuationMaxCreateFormInputValues = {
    Max?: number;
    PesudoMax?: number;
    Setup?: string;
    Variable?: string;
};
export declare type ActuationMaxCreateFormValidationValues = {
    Max?: ValidationFunction<number>;
    PesudoMax?: ValidationFunction<number>;
    Setup?: ValidationFunction<string>;
    Variable?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActuationMaxCreateFormOverridesProps = {
    ActuationMaxCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Max?: PrimitiveOverrideProps<TextFieldProps>;
    PesudoMax?: PrimitiveOverrideProps<TextFieldProps>;
    Setup?: PrimitiveOverrideProps<TextFieldProps>;
    Variable?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ActuationMaxCreateFormProps = React.PropsWithChildren<{
    overrides?: ActuationMaxCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ActuationMaxCreateFormInputValues) => ActuationMaxCreateFormInputValues;
    onSuccess?: (fields: ActuationMaxCreateFormInputValues) => void;
    onError?: (fields: ActuationMaxCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActuationMaxCreateFormInputValues) => ActuationMaxCreateFormInputValues;
    onValidate?: ActuationMaxCreateFormValidationValues;
} & React.CSSProperties>;
export default function ActuationMaxCreateForm(props: ActuationMaxCreateFormProps): React.ReactElement;
