import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Grid3X3: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Grid3X3(
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
        d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM3 9H21M3 15H21M9 3V21M15 3V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Grid3X3.displayName = "Grid3X3";

Grid3X3.metadata = {
  name: "Grid3X3",
  category: "stroke/design",
  tags: ["grid", "icon"],
  description: "Grid3X3 icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Grid3X3;
