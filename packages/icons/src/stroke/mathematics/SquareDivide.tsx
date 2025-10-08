import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareDivide: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareDivide(
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
        d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM8 12H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="16" r=".5" fill="currentColor" />
      <circle cx="12" cy="8" r=".5" fill="currentColor" />
    </svg>
  );
});

SquareDivide.displayName = "SquareDivide";

SquareDivide.metadata = {
  name: "SquareDivide",
  category: "stroke/mathematics",
  tags: ["square", "divide", "icon"],
  description: "SquareDivide icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareDivide;
