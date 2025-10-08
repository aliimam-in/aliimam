import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const HopOff: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function HopOff(
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
          d="M10.82 16.12C12.51 16.72 14.73 16.91 16 16.97C16.28 16.98 16.53 16.88 16.7 16.7"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.14 20.57C11.66 20.81 13.58 21.69 15.22 21.94C15.68 22 16.08 21.69 16.12 21.23C16.24 19.71 15.82 17.8 15.62 16.95"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.13 21.05C17.78 21.68 19.81 21.89 21 21.96 21.129 21.969 21.258 21.951 21.378 21.906 21.499 21.861 21.609 21.791 21.7 21.7M17.99 5.52C19.234 6.874 20.293 8.388 21.14 10.02 21.194 10.138 21.218 10.268 21.211 10.397 21.203 10.527 21.164 10.653 21.097 10.764 21.03 10.875 20.937 10.969 20.826 11.036 20.715 11.103 20.59 11.142 20.46 11.15 19.29 11.25 17.96 11.17 16.56 10.9M20.57 11.14C20.81 11.66 21.69 13.58 21.94 15.22 21.98 15.52 21.86 15.81 21.63 15.97M4.93 4.93C3.177 6.683 2.138 9.025 2.014 11.501 1.89 13.977 2.691 16.411 4.26 18.33 4.61 18.76 5.22 18.73 5.43 18.21 6.12 16.5 6.5 13.14 6.5 11.5 7.84 11.95 9.6 12.4 11.38 12.12 11.562 12.094 11.73 12.01 11.86 11.88"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.52 17.99C6.57 18.94 8.43 20.41 10.02 21.14 10.138 21.194 10.268 21.218 10.397 21.211 10.527 21.203 10.653 21.164 10.764 21.097 10.875 21.03 10.969 20.937 11.036 20.826 11.103 20.715 11.142 20.59 11.15 20.46 11.35 18.12 10.82 15.16 9.58 12.18M8.35 2.68C10.004 2.034 11.8 1.839 13.554 2.117 15.308 2.394 16.957 3.134 18.33 4.26 18.76 4.61 18.73 5.22 18.21 5.43 16.71 6.03 13.91 6.41 12.14 6.48M2 2 22 22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

HopOff.displayName = "HopOff";

HopOff.metadata = {
  name: "HopOff",
  category: "stroke/foodBeverage",
  tags: ["hop", "off", "icon"],
  description: "HopOff icon from stroke/foodBeverage category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default HopOff;
