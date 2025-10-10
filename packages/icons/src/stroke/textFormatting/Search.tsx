import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Search: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function Search(
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
          d="M21 21 16.66 16.66M11 19C15.418 19 19 15.418 19 11 19 6.582 15.418 3 11 3 6.582 3 3 6.582 3 11 3 15.418 6.582 19 11 19Z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

Search.displayName = "Search";

Search.metadata = {
  name: "Search",
  category: "stroke/textFormatting",
  tags: ["search", "icon"],
  description: "Search icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Search;
