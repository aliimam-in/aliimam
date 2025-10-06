import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronsRightLeft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChevronsRightLeft(
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
        d="M20 17 15 12 20 7M4 17 9 12 4 7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronsRightLeft.displayName = "ChevronsRightLeft";

ChevronsRightLeft.metadata = {
  name: "ChevronsRightLeft",
  category: "stroke/arrows",
  tags: ["chevrons", "right", "left", "icon"],
  description: "ChevronsRightLeft icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronsRightLeft;
