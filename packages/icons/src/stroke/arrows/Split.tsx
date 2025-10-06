import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Split: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Split(
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
          d="M16 3H21V8M8 3H3V8"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V13.7C12.006 13.167 11.905 12.639 11.704 12.146 11.503 11.653 11.205 11.205 10.828 10.828L3 3M15 9 21 3"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Split.displayName = "Split";

Split.metadata = {
  name: "Split",
  category: "stroke/arrows",
  tags: ["split", "icon"],
  description: "Split icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Split;
