import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitPullRequestArrow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitPullRequestArrow(
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
        d="M5 9C6.657 9 8 7.657 8 6 8 4.343 6.657 3 5 3 3.343 3 2 4.343 2 6 2 7.657 3.343 9 5 9ZM5 9V21M19 21C20.657 21 22 19.657 22 18 22 16.343 20.657 15 19 15 17.343 15 16 16.343 16 18 16 19.657 17.343 21 19 21ZM15 9 12 6 15 3"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6H17C17.5304 6 18.0391 6.21071 18.4142 6.58579C18.7893 6.96086 19 7.46957 19 8V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitPullRequestArrow.displayName = "GitPullRequestArrow";

GitPullRequestArrow.metadata = {
  name: "GitPullRequestArrow",
  category: "stroke/arrows",
  tags: ["git", "pull", "request", "arrow", "icon"],
  description: "GitPullRequestArrow icon from stroke/arrows category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitPullRequestArrow;
