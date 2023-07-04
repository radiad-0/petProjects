import {ButtonHTMLAttributes, ChangeEvent, CSSProperties, FormHTMLAttributes, HTMLInputTypeAttribute} from "react";

export interface InputProps {
    className?: string;
    id?: string;
    label?: string;
    name?: string;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    style?: CSSProperties;
    type?: HTMLInputTypeAttribute
    value?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface FormProps extends FormHTMLAttributes<HTMLButtonElement> {}

export enum sizeEnum {
    Nano,
    Micro,
    XXSmall,
    XSmall,
    Small,
    Medium,
    Large,
    XLarge,
    XXLarge,
    Mega,
    Giga
}

export interface PoizonhubLogoProps {
    logoSize: sizeEnum
}