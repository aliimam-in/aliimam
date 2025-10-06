import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Maximize2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Maximize2(
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
        d="M15 3H21V9M21 3 14 10M3 21 10 14M9 21H3V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Maximize2.displayName = "Maximize2";

Maximize2.metadata = {
  name: "Maximize2",
  category: "stroke/arrows",
  tags: ["maximize", "icon"],
  description: "Maximize2 icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Maximize2;
