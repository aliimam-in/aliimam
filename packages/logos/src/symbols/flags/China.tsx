import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const China: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function China(
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
        <path
          d="M27 4H5C2.79086 4 1 5.79086 1 8V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V8C31 5.79086 29.2091 4 27 4Z"
          fill="#db362f"
        />
        <path
          d="M7.958 10.152 7.19 7.786 6.421 10.152H3.934L5.946 11.614 5.177 13.979 7.19 12.517 9.202 13.979 8.433 11.614 10.446 10.152H7.958ZM12.725 8.187 13.152 8.898 13.224 8.072 14.032 7.886 13.269 7.562 13.342 6.736 12.798 7.361 12.035 7.037 12.461 7.748 11.917 8.373 12.725 8.187ZM14.865 10.372 14.982 11.193 15.37 10.46 16.187 10.602 15.61 10.007 15.997 9.274 15.253 9.639 14.675 9.044 14.793 9.865 14.048 10.23 14.865 10.372ZM15.597 13.612 16.25 13.101 15.421 13.13 15.137 12.352 14.909 13.149 14.081 13.179 14.769 13.642 14.541 14.439 15.194 13.928 15.881 14.391 15.597 13.612ZM13.26 15.535 13.298 14.707 12.78 15.354 12.005 15.062 12.46 15.754 11.942 16.402 12.742 16.182 13.198 16.875 13.236 16.047 14.036 15.827 13.26 15.535Z"
          fill="#ff0"
        />
      </svg>
    );
  },
);

China.displayName = "China";

China.metadata = {
  name: "China",
  category: "symbols/flags",
  tags: ["china", "icon"],
  description: "China icon from symbols/flags category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default China;
