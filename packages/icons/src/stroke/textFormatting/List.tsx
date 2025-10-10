import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const List: IconComponent = React.forwardRef<SVGSVGElement, IconProps>(
  function List(
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
          d="M3 5H3.01M3 12H3.01M3 19H3.01M8 5H21M8 12H21M8 19H21"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
);

List.displayName = "List";

List.metadata = {
  name: "List",
  category: "stroke/textFormatting",
  tags: ["list", "icon"],
  description: "List icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default List;
