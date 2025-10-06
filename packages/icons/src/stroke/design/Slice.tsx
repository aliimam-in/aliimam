import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Slice: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Slice(
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
          d="M11 16.586V19C11 19.2652 10.8946 19.5196 10.7071 19.7071C10.5196 19.8946 10.2652 20 10 20H2L18.37 3.62999C18.7678 3.23216 19.3074 3.00867 19.87 3.00867C20.4326 3.00867 20.9722 3.23216 21.37 3.62999C21.7678 4.02781 21.9913 4.56738 21.9913 5.12999C21.9913 5.6926 21.7678 6.23216 21.37 6.62999L11.707 16.293C11.5195 16.4805 11.2652 16.586 11 16.586ZM11 16.586C10.7348 16.586 10.4805 16.4805 10.293 16.293L8 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Slice.displayName = "Slice";

Slice.metadata = {
  name: "Slice",
  category: "stroke/design",
  tags: ["slice", "icon"],
  description: "Slice icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Slice;
