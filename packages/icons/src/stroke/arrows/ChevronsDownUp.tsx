import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronsDownUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChevronsDownUp(
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
        d="M7 20 12 15 17 20M7 4 12 9 17 4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronsDownUp.displayName = "ChevronsDownUp";

ChevronsDownUp.metadata = {
  name: "ChevronsDownUp",
  category: "stroke/arrows",
  tags: ["chevrons", "down", "up", "icon"],
  description: "ChevronsDownUp icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronsDownUp;
