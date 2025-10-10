import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TentTree: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TentTree(
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
        d="M4 6C5.105 6 6 5.105 6 4 6 2.895 5.105 2 4 2 2.895 2 2 2.895 2 4 2 5.105 2.895 6 4 6ZM14 5 17 2 20 5M14 10 17 7 20 10M17 14V2M17 14H7L2 22H22L17 14ZM8 14V22M9 14 14 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TentTree.displayName = "TentTree";

TentTree.metadata = {
  name: "TentTree",
  category: "stroke/nature",
  tags: ["tent", "tree", "icon"],
  description: "TentTree icon from stroke/nature category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TentTree;
