import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Bird: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Bird(
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
          d="M16 7H16.01M3.4 18H12C14.122 18 16.157 17.157 17.657 15.657 19.157 14.157 20 12.122 20 10V7C20.002 6.148 19.732 5.317 19.23 4.629 18.727 3.941 18.018 3.432 17.205 3.175 16.393 2.919 15.519 2.928 14.713 3.202 13.906 3.477 13.208 4.001 12.72 4.7L2 20"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 7 22 7.5 20 8M10 18V21M14 17.75V21M7 18C8.233 18 9.436 17.62 10.446 16.912 11.455 16.203 12.222 15.201 12.642 14.042 13.061 12.882 13.113 11.622 12.791 10.432 12.469 9.241 11.787 8.179 10.84 7.39"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Bird.displayName = "Bird";

Bird.metadata = {
  name: "Bird",
  category: "stroke/animals",
  tags: ["bird", "icon"],
  description: "Bird icon from stroke/animals category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Bird;
