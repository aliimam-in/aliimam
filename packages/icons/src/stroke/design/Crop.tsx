import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Crop: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Crop(
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
          d="M6 2V16C6 16.5304 6.21071 17.0391 6.58579 17.4142C6.96086 17.7893 7.46957 18 8 18H22"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 22V8C18 7.46957 17.7893 6.96086 17.4142 6.58579C17.0391 6.21071 16.5304 6 16 6H2"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Crop.displayName = "Crop";

Crop.metadata = {
  name: "Crop",
  category: "stroke/design",
  tags: ["crop", "icon"],
  description: "Crop icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Crop;
