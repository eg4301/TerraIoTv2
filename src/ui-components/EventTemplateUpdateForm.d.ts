/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EventTemplate } from "../API.ts";
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
export declare type EventTemplateUpdateFormInputValues = {
    userId?: string;
    eventName?: string;
    description?: string;
    duration?: number;
};
export declare type EventTemplateUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    eventName?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EventTemplateUpdateFormOverridesProps = {
    EventTemplateUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    eventName?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EventTemplateUpdateFormProps = React.PropsWithChildren<{
    overrides?: EventTemplateUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    eventTemplate?: EventTemplate;
    onSubmit?: (fields: EventTemplateUpdateFormInputValues) => EventTemplateUpdateFormInputValues;
    onSuccess?: (fields: EventTemplateUpdateFormInputValues) => void;
    onError?: (fields: EventTemplateUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EventTemplateUpdateFormInputValues) => EventTemplateUpdateFormInputValues;
    onValidate?: EventTemplateUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EventTemplateUpdateForm(props: EventTemplateUpdateFormProps): React.ReactElement;
