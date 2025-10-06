import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronsUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChevronsUp(
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
        d="M17 11 12 6 7 11M17 18 12 13 7 18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronsUp.displayName = "ChevronsUp";

ChevronsUp.metadata = {
  name: "ChevronsUp",
  category: "stroke/arrows",
  tags: ["chevrons", "up", "icon"],
  description: "ChevronsUp icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronsUp;
