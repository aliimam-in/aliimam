import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitPullRequestClosed: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitPullRequestClosed(
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
        d="M6 9C7.657 9 9 7.657 9 6 9 4.343 7.657 3 6 3 4.343 3 3 4.343 3 6 3 7.657 4.343 9 6 9ZM6 9V21M21 3 15 9M21 9 15 3M18 11.5V15M18 21C19.657 21 21 19.657 21 18 21 16.343 19.657 15 18 15 16.343 15 15 16.343 15 18 15 19.657 16.343 21 18 21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitPullRequestClosed.displayName = "GitPullRequestClosed";

GitPullRequestClosed.metadata = {
  name: "GitPullRequestClosed",
  category: "stroke/codingDevelopment",
  tags: ["git", "pull", "request", "closed", "icon"],
  description:
    "GitPullRequestClosed icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitPullRequestClosed;
