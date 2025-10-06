import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SpellCheck2: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SpellCheck2(
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
        d="M6 16 12 4 18 16M8 12H16M4 21C5.1 21 5.1 20 6.3 20 7.5 20 7.4 21 8.6 21 9.7 21 9.7 20 10.9 20 12 20 12 21 13.2 21 14.3 21 14.3 20 15.5 20 16.6 20 16.6 21 17.8 21 18.9 21 18.9 20 20.1 20"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SpellCheck2.displayName = "SpellCheck2";

SpellCheck2.metadata = {
  name: "SpellCheck2",
  category: "stroke/codingDevelopment",
  tags: ["spell", "check", "icon"],
  description: "SpellCheck2 icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SpellCheck2;
