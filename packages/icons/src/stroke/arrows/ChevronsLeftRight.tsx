import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronsLeftRight: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChevronsLeftRight(
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
        d="M9 7 4 12 9 17M15 7 20 12 15 17"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronsLeftRight.displayName = "ChevronsLeftRight";

ChevronsLeftRight.metadata = {
  name: "ChevronsLeftRight",
  category: "stroke/arrows",
  tags: ["chevrons", "left", "right", "icon"],
  description: "ChevronsLeftRight icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronsLeftRight;
