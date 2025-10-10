import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Scale: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Scale(
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
          d="M16 16 19 8 22 16C21.13 16.65 20.08 17 19 17 17.92 17 16.87 16.65 16 16ZM2 16 5 8 8 16C7.13 16.65 6.08 17 5 17 3.92 17 2.87 16.65 2 16ZM7 21H17M12 3V21M3 7H5C7 7 10 6 12 5 14 6 17 7 19 7H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Scale.displayName = "Scale";

Scale.metadata = {
  name: "Scale",
  category: "stroke/navigation",
  tags: ["scale", "icon"],
  description: "Scale icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Scale;
