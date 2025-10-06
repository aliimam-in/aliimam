import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitCommitVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitCommitVertical(
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
        d="M12 3V9M12 15C13.657 15 15 13.657 15 12 15 10.343 13.657 9 12 9 10.343 9 9 10.343 9 12 9 13.657 10.343 15 12 15ZM12 15V21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitCommitVertical.displayName = "GitCommitVertical";

GitCommitVertical.metadata = {
  name: "GitCommitVertical",
  category: "stroke/codingDevelopment",
  tags: ["git", "commit", "vertical", "icon"],
  description: "GitCommitVertical icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitCommitVertical;
