import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ListChevronsDownUpProps extends IconProps {
  type?: "stroke";
}

export const ListChevronsDownUp: IconComponent<ListChevronsDownUpProps> =
  React.forwardRef<SVGSVGElement, ListChevronsDownUpProps>(
    function ListChevronsDownUp(
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
              d="M3 5H11M3 12H11M3 19H11M15 5 18 8 21 5M15 19 18 16 21 19"
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
              d="M3 5H11M3 12H11M3 19H11M15 5 18 8 21 5M15 19 18 16 21 19"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ListChevronsDownUp doesn't support ${type}`);
      return null;
    },
  );

ListChevronsDownUp.displayName = "ListChevronsDownUp";

ListChevronsDownUp.metadata = {
  name: "ListChevronsDownUp",
  category: "stroke/textFormatting",
  tags: ["list", "chevrons", "down", "up", "icon"],
  description: "ListChevronsDownUp icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ListChevronsDownUp;
