import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitFork: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitFork(
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
        d="M12 21C13.657 21 15 19.657 15 18 15 16.343 13.657 15 12 15 10.343 15 9 16.343 9 18 9 19.657 10.343 21 12 21ZM6 9C7.657 9 9 7.657 9 6 9 4.343 7.657 3 6 3 4.343 3 3 4.343 3 6 3 7.657 4.343 9 6 9ZM18 9C19.657 9 21 7.657 21 6 21 4.343 19.657 3 18 3 16.343 3 15 4.343 15 6 15 7.657 16.343 9 18 9ZM18 9V11C18 11.6 17.6 12 17 12H7C6.4 12 6 11.6 6 11V9M12 12V15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitFork.displayName = "GitFork";

GitFork.metadata = {
  name: "GitFork",
  category: "stroke/codingDevelopment",
  tags: ["git", "fork", "icon"],
  description: "GitFork icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitFork;
