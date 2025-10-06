import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SearchCode: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SearchCode(
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
        d="M13 13.5 15 11 13 8.5M21 21 16.7 16.7M9 8.5 7 11 9 13.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SearchCode.displayName = "SearchCode";

SearchCode.metadata = {
  name: "SearchCode",
  category: "stroke/codingDevelopment",
  tags: ["search", "code", "icon"],
  description: "SearchCode icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SearchCode;
