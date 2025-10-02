import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ChevronsDown: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ChevronsDown(
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
        d="M7 6 12 11 17 6M7 13 12 18 17 13"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ChevronsDown.displayName = "ChevronsDown";

ChevronsDown.metadata = {
  name: "ChevronsDown",
  category: "stroke/arrows",
  tags: ["chevrons", "down", "icon"],
  description: "ChevronsDown icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ChevronsDown;
