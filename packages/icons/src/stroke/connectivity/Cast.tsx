import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Cast: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Cast(
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
          d="M2 8V6C2 5.47 2.211 4.961 2.586 4.586 2.961 4.211 3.47 4 4 4H20C20.53 4 21.039 4.211 21.414 4.586 21.789 4.961 22 5.47 22 6V18C22 18.53 21.789 19.039 21.414 19.414 21.039 19.789 20.53 20 20 20H14M2 12C4.047 12.217 5.958 13.13 7.414 14.586 8.87 16.042 9.783 17.953 10 20M2 16C2.993 16.185 3.906 16.666 4.62 17.38 5.334 18.094 5.815 19.007 6 20M2 20H2.01"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Cast.displayName = "Cast";

Cast.metadata = {
  name: "Cast",
  category: "stroke/connectivity",
  tags: ["cast", "icon"],
  description: "Cast icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Cast;
