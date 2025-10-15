import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Malawi: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Malawi(
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
        viewBox="0 0 32 32"
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
        <path d="M1 11H31V21H1V11Z" fill="#be2a2c" />
        <path
          d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
          fill="currentColor"
        />
        <path
          d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
          fill="#539d42"
        />
        <path
          d="M20.578 10C19.806 8.236 18.049 7 16 7 13.951 7 12.194 8.236 11.422 10H20.578ZM13.027 16C13.86 16.62 14.881 17 16 17 17.119 17 18.14 16.62 18.973 16H13.027Z"
          fill="#be2a2c"
        />
      </svg>
    );
  },
);

Malawi.displayName = "Malawi";

Malawi.metadata = {
  name: "Malawi",
  category: "symbols/flags",
  tags: ["malawi", "icon"],
  description: "Malawi icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Malawi;
