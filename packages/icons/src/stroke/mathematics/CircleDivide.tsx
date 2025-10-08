import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CircleDivide: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CircleDivide(
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
        d="M8 12H16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="16" r=".5" fill="currentColor" />
      <circle cx="12" cy="8" r=".5" fill="currentColor" />
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CircleDivide.displayName = "CircleDivide";

CircleDivide.metadata = {
  name: "CircleDivide",
  category: "stroke/mathematics",
  tags: ["circle", "divide", "icon"],
  description: "CircleDivide icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CircleDivide;
