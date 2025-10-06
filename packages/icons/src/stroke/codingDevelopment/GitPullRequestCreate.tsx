import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitPullRequestCreate: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitPullRequestCreate(
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
        d="M6 9C7.657 9 9 7.657 9 6 9 4.343 7.657 3 6 3 4.343 3 3 4.343 3 6 3 7.657 4.343 9 6 9ZM6 9V21M13 6H16C16.53 6 17.039 6.211 17.414 6.586 17.789 6.961 18 7.47 18 8V11M18 15V21M21 18H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitPullRequestCreate.displayName = "GitPullRequestCreate";

GitPullRequestCreate.metadata = {
  name: "GitPullRequestCreate",
  category: "stroke/codingDevelopment",
  tags: ["git", "pull", "request", "create", "icon"],
  description:
    "GitPullRequestCreate icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitPullRequestCreate;
