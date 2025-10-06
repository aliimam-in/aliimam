import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SquareFunction: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SquareFunction(
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
        d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 17C11 17 11.8 16 11.8 14.2V10C11.8 8 12.8 6.7 15 7M9 11.2H14.7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SquareFunction.displayName = "SquareFunction";

SquareFunction.metadata = {
  name: "SquareFunction",
  category: "stroke/codingDevelopment",
  tags: ["square", "function", "icon"],
  description: "SquareFunction icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareFunction;
