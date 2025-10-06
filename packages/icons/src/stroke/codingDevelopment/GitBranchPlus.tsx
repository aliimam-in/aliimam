import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const GitBranchPlus: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function GitBranchPlus(
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
        d="M6 3V15M18 9C18.796 9 19.559 8.684 20.121 8.121 20.684 7.559 21 6.796 21 6 21 5.204 20.684 4.441 20.121 3.879 19.559 3.316 18.796 3 18 3 17.204 3 16.441 3.316 15.879 3.879 15.316 4.441 15 5.204 15 6 15 6.796 15.316 7.559 15.879 8.121 16.441 8.684 17.204 9 18 9ZM6 21C6.796 21 7.559 20.684 8.121 20.121 8.684 19.559 9 18.796 9 18 9 17.204 8.684 16.441 8.121 15.879 7.559 15.316 6.796 15 6 15 5.204 15 4.441 15.316 3.879 15.879 3.316 16.441 3 17.204 3 18 3 18.796 3.316 19.559 3.879 20.121 4.441 20.684 5.204 21 6 21ZM15 6C12.613 6 10.324 6.948 8.636 8.636 6.948 10.324 6 12.613 6 15M18 15V21M21 18H15"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

GitBranchPlus.displayName = "GitBranchPlus";

GitBranchPlus.metadata = {
  name: "GitBranchPlus",
  category: "stroke/codingDevelopment",
  tags: ["git", "branch", "plus", "icon"],
  description: "GitBranchPlus icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default GitBranchPlus;
