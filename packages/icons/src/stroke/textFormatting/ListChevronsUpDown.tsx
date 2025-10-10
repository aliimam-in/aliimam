import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ListChevronsUpDownProps extends IconProps {
  type?: "stroke";
}

export const ListChevronsUpDown: IconComponent<ListChevronsUpDownProps> =
  React.forwardRef<SVGSVGElement, ListChevronsUpDownProps>(
    function ListChevronsUpDown(
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
              d="M3 5H11M3 12H11M3 19H11M15 8 18 5 21 8M15 16 18 19 21 16"
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
              d="M3 5H11M3 12H11M3 19H11M15 8 18 5 21 8M15 16 18 19 21 16"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ListChevronsUpDown doesn't support ${type}`);
      return null;
    },
  );

ListChevronsUpDown.displayName = "ListChevronsUpDown";

ListChevronsUpDown.metadata = {
  name: "ListChevronsUpDown",
  category: "stroke/textFormatting",
  tags: ["list", "chevrons", "up", "down", "icon"],
  description: "ListChevronsUpDown icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListChevronsUpDown;
