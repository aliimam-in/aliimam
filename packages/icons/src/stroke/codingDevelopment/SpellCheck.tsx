import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SpellCheck: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SpellCheck(
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
        d="M6 16 12 4 18 16M8 12H16M16 20 18 22 22 18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SpellCheck.displayName = "SpellCheck";

SpellCheck.metadata = {
  name: "SpellCheck",
  category: "stroke/codingDevelopment",
  tags: ["spell", "check", "icon"],
  description: "SpellCheck icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SpellCheck;
