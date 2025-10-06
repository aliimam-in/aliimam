import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitBranch: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitBranch(
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
        d="M6 3V15M18 9C19.657 9 21 7.657 21 6 21 4.343 19.657 3 18 3 16.343 3 15 4.343 15 6 15 7.657 16.343 9 18 9ZM6 21C7.657 21 9 19.657 9 18 9 16.343 7.657 15 6 15 4.343 15 3 16.343 3 18 3 19.657 4.343 21 6 21ZM18 9C18 11.387 17.052 13.676 15.364 15.364 13.676 17.052 11.387 18 9 18"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitBranch.displayName = "GitBranch";

GitBranch.metadata = {
  name: "GitBranch",
  category: "stroke/codingDevelopment",
  tags: ["git", "branch", "icon"],
  description: "GitBranch icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitBranch;
