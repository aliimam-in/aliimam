import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const X: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function X(
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
          d="M18 6 6 18M6 6 18 18"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

X.displayName = "X";

X.metadata = {
  name: "X",
  category: "stroke/mathematics",
  tags: ["icon"],
  description: "X icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default X;
