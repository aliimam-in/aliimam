import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface LayoutDashboardProps extends IconProps {
  type?: "stroke";
}

export const LayoutDashboard: IconComponent<LayoutDashboardProps> =
  React.forwardRef<SVGSVGElement, LayoutDashboardProps>(
    function LayoutDashboard(
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
              d="M9 3H4C3.448 3 3 3.448 3 4V11C3 11.552 3.448 12 4 12H9C9.552 12 10 11.552 10 11V4C10 3.448 9.552 3 9 3ZM20 3H15C14.448 3 14 3.448 14 4V7C14 7.552 14.448 8 15 8H20C20.552 8 21 7.552 21 7V4C21 3.448 20.552 3 20 3ZM20 12H15C14.448 12 14 12.448 14 13V20C14 20.552 14.448 21 15 21H20C20.552 21 21 20.552 21 20V13C21 12.448 20.552 12 20 12ZM9 16H4C3.448 16 3 16.448 3 17V20C3 20.552 3.448 21 4 21H9C9.552 21 10 20.552 10 20V17C10 16.448 9.552 16 9 16Z"
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
              d="M9 3H4C3.448 3 3 3.448 3 4V11C3 11.552 3.448 12 4 12H9C9.552 12 10 11.552 10 11V4C10 3.448 9.552 3 9 3ZM20 3H15C14.448 3 14 3.448 14 4V7C14 7.552 14.448 8 15 8H20C20.552 8 21 7.552 21 7V4C21 3.448 20.552 3 20 3ZM20 12H15C14.448 12 14 12.448 14 13V20C14 20.552 14.448 21 15 21H20C20.552 21 21 20.552 21 20V13C21 12.448 20.552 12 20 12ZM9 16H4C3.448 16 3 16.448 3 17V20C3 20.552 3.448 21 4 21H9C9.552 21 10 20.552 10 20V17C10 16.448 9.552 16 9 16Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`LayoutDashboard doesn't support ${type}`);
      return null;
    },
  );

LayoutDashboard.displayName = "LayoutDashboard";

LayoutDashboard.metadata = {
  name: "LayoutDashboard",
  category: "stroke/layout",
  tags: ["layout", "dashboard", "icon"],
  description: "LayoutDashboard icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LayoutDashboard;
