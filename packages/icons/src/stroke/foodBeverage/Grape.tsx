import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Grape: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Grape(
    {
      color = "currentColor",
      fill,
      size = 24,
      strokeWidth,
      strokeLinecap,
      strokeLinejoin,
      strokeDasharray,
      opacity,
      className,
      ...props
    },
    forwardedRef,
  ) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
        strokeDasharray={strokeDasharray}
        opacity={opacity}
        {...props}
        ref={forwardedRef}
      >
        <path
          d="M22 5V2L16.11 7.89M16.6 18.89C18.257 18.89 19.6 17.547 19.6 15.89 19.6 14.233 18.257 12.89 16.6 12.89 14.943 12.89 13.6 14.233 13.6 15.89 13.6 17.547 14.943 18.89 16.6 18.89ZM8.11 10.4C9.767 10.4 11.11 9.057 11.11 7.4 11.11 5.743 9.767 4.4 8.11 4.4 6.453 4.4 5.11 5.743 5.11 7.4 5.11 9.057 6.453 10.4 8.11 10.4Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.35 14.65C14.0068 14.65 15.35 13.3069 15.35 11.65C15.35 9.99317 14.0068 8.65002 12.35 8.65002C10.6931 8.65002 9.34998 9.99317 9.34998 11.65C9.34998 13.3069 10.6931 14.65 12.35 14.65Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.91 8.84998C15.5668 8.84998 16.91 7.50683 16.91 5.84998C16.91 4.19312 15.5668 2.84998 13.91 2.84998C12.2531 2.84998 10.91 4.19312 10.91 5.84998C10.91 7.50683 12.2531 8.84998 13.91 8.84998Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.15 13.09C19.807 13.09 21.15 11.747 21.15 10.09 21.15 8.433 19.807 7.09 18.15 7.09 16.493 7.09 15.15 8.433 15.15 10.09 15.15 11.747 16.493 13.09 18.15 13.09ZM6.56 16.2C8.217 16.2 9.56 14.857 9.56 13.2 9.56 11.543 8.217 10.2 6.56 10.2 4.903 10.2 3.56 11.543 3.56 13.2 3.56 14.857 4.903 16.2 6.56 16.2Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8 20.44C12.4568 20.44 13.8 19.0969 13.8 17.44C13.8 15.7831 12.4568 14.44 10.8 14.44C9.14313 14.44 7.79999 15.7831 7.79999 17.44C7.79999 19.0969 9.14313 20.44 10.8 20.44Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 22C6.65685 22 8 20.6569 8 19C8 17.3431 6.65685 16 5 16C3.34315 16 2 17.3431 2 19C2 20.6569 3.34315 22 5 22Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Grape.displayName = "Grape";

Grape.metadata = {
  name: "Grape",
  category: "stroke/foodBeverage",
  tags: ["grape", "icon"],
  description: "Grape icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Grape;
