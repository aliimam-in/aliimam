import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const EqualNot: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function EqualNot(
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
        d="M5 9H19M5 15H19M19 5 5 19"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

EqualNot.displayName = "EqualNot";

EqualNot.metadata = {
  name: "EqualNot",
  category: "stroke/codingDevelopment",
  tags: ["equal", "not", "icon"],
  description: "EqualNot icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default EqualNot;
