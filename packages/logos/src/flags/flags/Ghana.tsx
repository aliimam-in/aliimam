import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Ghana: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Ghana(
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
        <path d="M1 11H31V21H1V11Z" fill="#f6d44a" />
        <path
          d="M5 4H27C29.208 4 31 5.792 31 8V12H1V8C1 5.792 2.792 4 5 4Z"
          fill="#be2a2c"
        />
        <path
          d="M27 28L5 28C2.792 28 1 26.208 1 24V20L31 20V24C31 26.208 29.208 28 27 28Z"
          fill="#2d6a41"
        />
        <path
          d="M17.606 16.944L20.206 15.056H16.993L16 12L15.007 15.056H11.794L14.394 16.944L13.401 20L16 18.111L18.599 20L17.606 16.944Z"
          fill="currentColor"
        />
      </svg>
    );
  },
);

Ghana.displayName = "Ghana";

Ghana.metadata = {
  name: "Ghana",
  category: "flags/flags",
  tags: ["ghana", "icon"],
  description: "Ghana icon from flags/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Ghana;
