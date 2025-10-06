import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CaseLower: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CaseLower(
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
        d="M10 9V16M14 6V16M17.5 16C19.433 16 21 14.433 21 12.5 21 10.567 19.433 9 17.5 9 15.567 9 14 10.567 14 12.5 14 14.433 15.567 16 17.5 16ZM6.5 16C8.433 16 10 14.433 10 12.5 10 10.567 8.433 9 6.5 9 4.567 9 3 10.567 3 12.5 3 14.433 4.567 16 6.5 16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CaseLower.displayName = "CaseLower";

CaseLower.metadata = {
  name: "CaseLower",
  category: "stroke/codingDevelopment",
  tags: ["case", "lower", "icon"],
  description: "CaseLower icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CaseLower;
