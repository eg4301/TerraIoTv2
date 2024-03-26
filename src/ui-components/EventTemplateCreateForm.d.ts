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
export declare type EventTemplateCreateFormInputValues = {
    userId?: string;
    eventName?: string;
    description?: string;
    duration?: number;
};
export declare type EventTemplateCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    eventName?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventTemplateCreateFormOverridesProps = {
    EventTemplateCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    eventName?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventTemplateCreateFormProps = React.PropsWithChildren<{
    overrides?: EventTemplateCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EventTemplateCreateFormInputValues) => EventTemplateCreateFormInputValues;
    onSuccess?: (fields: EventTemplateCreateFormInputValues) => void;
    onError?: (fields: EventTemplateCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventTemplateCreateFormInputValues) => EventTemplateCreateFormInputValues;
    onValidate?: EventTemplateCreateFormValidationValues;
} & React.CSSProperties>;
export default function EventTemplateCreateForm(props: EventTemplateCreateFormProps): React.ReactElement;
