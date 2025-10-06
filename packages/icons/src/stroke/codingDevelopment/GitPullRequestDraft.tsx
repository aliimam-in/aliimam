import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitPullRequestDraft: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitPullRequestDraft(
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
        d="M18 21C19.657 21 21 19.657 21 18 21 16.343 19.657 15 18 15 16.343 15 15 16.343 15 18 15 19.657 16.343 21 18 21ZM6 9C7.657 9 9 7.657 9 6 9 4.343 7.657 3 6 3 4.343 3 3 4.343 3 6 3 7.657 4.343 9 6 9ZM18 6V5M18 11V10M6 9V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitPullRequestDraft.displayName = "GitPullRequestDraft";

GitPullRequestDraft.metadata = {
  name: "GitPullRequestDraft",
  category: "stroke/codingDevelopment",
  tags: ["git", "pull", "request", "draft", "icon"],
  description:
    "GitPullRequestDraft icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitPullRequestDraft;
