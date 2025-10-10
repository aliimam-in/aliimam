import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const TextSearch: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function TextSearch(
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
        d="M21 5H3M10 12H3M10 19H3M17 18C18.657 18 20 16.657 20 15 20 13.343 18.657 12 17 12 15.343 12 14 13.343 14 15 14 16.657 15.343 18 17 18ZM21 19 19.1 17.1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

TextSearch.displayName = "TextSearch";

TextSearch.metadata = {
  name: "TextSearch",
  category: "stroke/textFormatting",
  tags: ["text", "search", "icon"],
  description: "TextSearch icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TextSearch;
