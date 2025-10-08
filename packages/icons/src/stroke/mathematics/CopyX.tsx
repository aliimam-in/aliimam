import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CopyX: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function CopyX(
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
          d="M12 12 18 18M12 18 18 12M20 8H10C8.895 8 8 8.895 8 10V20C8 21.105 8.895 22 10 22H20C21.105 22 22 21.105 22 20V10C22 8.895 21.105 8 20 8Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 16C2.9 16 2 15.1 2 14V4C2 2.9 2.9 2 4 2H14C15.1 2 16 2.9 16 4"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

CopyX.displayName = "CopyX";

CopyX.metadata = {
  name: "CopyX",
  category: "stroke/mathematics",
  tags: ["copy", "icon"],
  description: "CopyX icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CopyX;
