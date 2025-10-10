import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const CaseSensitive: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function CaseSensitive(
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
        d="M2 16 6.039 6.31C6.077 6.219 6.141 6.141 6.223 6.086 6.305 6.032 6.402 6.002 6.501 6.002 6.599 6.002 6.696 6.032 6.778 6.086 6.86 6.141 6.924 6.219 6.962 6.31L11 16M22 9V16M3.304 13H9.696M18.5 16C20.433 16 22 14.433 22 12.5 22 10.567 20.433 9 18.5 9 16.567 9 15 10.567 15 12.5 15 14.433 16.567 16 18.5 16Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

CaseSensitive.displayName = "CaseSensitive";

CaseSensitive.metadata = {
  name: "CaseSensitive",
  category: "stroke/textFormatting",
  tags: ["case", "sensitive", "icon"],
  description: "CaseSensitive icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default CaseSensitive;
