import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ListIndentIncreaseProps extends IconProps {
  type?: "stroke";
}

export const ListIndentIncrease: IconComponent<ListIndentIncreaseProps> =
  React.forwardRef<SVGSVGElement, ListIndentIncreaseProps>(
    function ListIndentIncrease(
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
              d="M21 5H11M21 12H11M21 19H11M3 8 7 12 3 16"
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
              d="M21 5H11M21 12H11M21 19H11M3 8 7 12 3 16"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ListIndentIncrease doesn't support ${type}`);
      return null;
    },
  );

ListIndentIncrease.displayName = "ListIndentIncrease";

ListIndentIncrease.metadata = {
  name: "ListIndentIncrease",
  category: "stroke/textFormatting",
  tags: ["list", "indent", "increase", "icon"],
  description: "ListIndentIncrease icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListIndentIncrease;
