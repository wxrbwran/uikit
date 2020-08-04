import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export declare type ButtonSize = "lg" | "sm";
export declare type ButtonType = "primary" | "default" | "danger" | "link";
interface BaseButtonProps {
    className?: string;
    /**设置Button禁用 */
    disabled?: boolean;
    /**设置Button的大小 */
    size?: ButtonSize;
    /**设置Button的类型 */
    btnType?: ButtonType;
    children: React.ReactChild;
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps> & Partial<AnchorButtonProps>;
/**
 * 这是第一个Button组件
 *
 *
 */
export declare const Button: FC<ButtonProps>;
export default Button;
