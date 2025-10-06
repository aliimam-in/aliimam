import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const ListIndentDecrease: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function ListIndentDecrease(
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
        d="M21 5H11M21 12H11M21 19H11M7 8 3 12 7 16"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

ListIndentDecrease.displayName = "ListIndentDecrease";

ListIndentDecrease.metadata = {
  name: "ListIndentDecrease",
  category: "stroke/codingDevelopment",
  tags: ["list", "indent", "decrease", "icon"],
  description: "ListIndentDecrease icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListIndentDecrease;
