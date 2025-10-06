import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const AArrowUp: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function AArrowUp(
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
        d="M14 11 18 7 22 11M18 16V7M2 16 6.039 6.31C6.077 6.219 6.141 6.141 6.223 6.086 6.305 6.032 6.402 6.002 6.501 6.002 6.599 6.002 6.696 6.032 6.778 6.086 6.86 6.141 6.924 6.219 6.962 6.31L11 16M3.304 13H9.696"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

AArrowUp.displayName = "AArrowUp";

AArrowUp.metadata = {
  name: "AArrowUp",
  category: "stroke/design",
  tags: ["arrow", "up", "icon"],
  description: "AArrowUp icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default AArrowUp;
