import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitCompareArrows: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitCompareArrows(
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
        d="M5 9C6.657 9 8 7.657 8 6 8 4.343 6.657 3 5 3 3.343 3 2 4.343 2 6 2 7.657 3.343 9 5 9ZM12 6H17C17.53 6 18.039 6.211 18.414 6.586 18.789 6.961 19 7.47 19 8V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 9 12 6 15 3M19 21C20.657 21 22 19.657 22 18 22 16.343 20.657 15 19 15 17.343 15 16 16.343 16 18 16 19.657 17.343 21 19 21ZM12 18H7C6.47 18 5.961 17.789 5.586 17.414 5.211 17.039 5 16.53 5 16V9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15L12 18L9 21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitCompareArrows.displayName = "GitCompareArrows";

GitCompareArrows.metadata = {
  name: "GitCompareArrows",
  category: "stroke/arrows",
  tags: ["git", "compare", "arrows", "icon"],
  description: "GitCompareArrows icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitCompareArrows;
