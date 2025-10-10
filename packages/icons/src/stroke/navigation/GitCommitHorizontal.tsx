import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface GitCommitHorizontalProps extends IconProps {
  type?: "stroke";
}

export const GitCommitHorizontal: IconComponent<GitCommitHorizontalProps> =
  React.forwardRef<SVGSVGElement, GitCommitHorizontalProps>(
    function GitCommitHorizontal(
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
        type = "stroke",
        ...props
      },
      forwardedRef,
    ) {
      if (type === "stroke") {
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
              d="M12 15C13.657 15 15 13.657 15 12 15 10.343 13.657 9 12 9 10.343 9 9 10.343 9 12 9 13.657 10.343 15 12 15ZM3 12H9M15 12H21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      if (type === "stroke") {
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
              d="M12 15C13.657 15 15 13.657 15 12 15 10.343 13.657 9 12 9 10.343 9 9 10.343 9 12 9 13.657 10.343 15 12 15ZM3 12H9M15 12H21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`GitCommitHorizontal doesn't support ${type}`);
      return null;
    },
  );

GitCommitHorizontal.displayName = "GitCommitHorizontal";

GitCommitHorizontal.metadata = {
  name: "GitCommitHorizontal",
  category: "stroke/navigation",
  tags: ["git", "commit", "horizontal", "icon"],
  description: "GitCommitHorizontal icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitCommitHorizontal;
