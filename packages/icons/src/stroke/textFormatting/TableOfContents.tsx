import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TableOfContents: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TableOfContents(
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
        d="M16 5H3M16 12H3M16 19H3M21 5H21.01M21 12H21.01M21 19H21.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TableOfContents.displayName = "TableOfContents";

TableOfContents.metadata = {
  name: "TableOfContents",
  category: "stroke/textFormatting",
  tags: ["table", "of", "contents", "icon"],
  description: "TableOfContents icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TableOfContents;
