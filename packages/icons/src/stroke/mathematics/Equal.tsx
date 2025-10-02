import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Equal: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Equal(
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
          d="M5 9H19M5 15H19"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Equal.displayName = "Equal";

Equal.metadata = {
  name: "Equal",
  category: "stroke/mathematics",
  tags: ["equal", "icon"],
  description: "Equal icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Equal;
