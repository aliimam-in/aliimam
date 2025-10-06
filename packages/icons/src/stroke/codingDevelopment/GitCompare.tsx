import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitCompare: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitCompare(
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
        d="M18 21C19.657 21 21 19.657 21 18 21 16.343 19.657 15 18 15 16.343 15 15 16.343 15 18 15 19.657 16.343 21 18 21ZM6 9C7.657 9 9 7.657 9 6 9 4.343 7.657 3 6 3 4.343 3 3 4.343 3 6 3 7.657 4.343 9 6 9ZM13 6H16C16.53 6 17.039 6.211 17.414 6.586 17.789 6.961 18 7.47 18 8V15M11 18H8C7.47 18 6.961 17.789 6.586 17.414 6.211 17.039 6 16.53 6 16V9"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitCompare.displayName = "GitCompare";

GitCompare.metadata = {
  name: "GitCompare",
  category: "stroke/codingDevelopment",
  tags: ["git", "compare", "icon"],
  description: "GitCompare icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitCompare;
