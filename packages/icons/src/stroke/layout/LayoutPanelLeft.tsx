import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface LayoutPanelLeftProps extends IconProps {
  type?: "stroke";
}

export const LayoutPanelLeft: IconComponent<LayoutPanelLeftProps> =
  React.forwardRef<SVGSVGElement, LayoutPanelLeftProps>(
    function LayoutPanelLeft(
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
              d="M9 3H4C3.448 3 3 3.448 3 4V20C3 20.552 3.448 21 4 21H9C9.552 21 10 20.552 10 20V4C10 3.448 9.552 3 9 3ZM20 3H15C14.448 3 14 3.448 14 4V9C14 9.552 14.448 10 15 10H20C20.552 10 21 9.552 21 9V4C21 3.448 20.552 3 20 3ZM20 14H15C14.448 14 14 14.448 14 15V20C14 20.552 14.448 21 15 21H20C20.552 21 21 20.552 21 20V15C21 14.448 20.552 14 20 14Z"
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
              d="M9 3H4C3.448 3 3 3.448 3 4V20C3 20.552 3.448 21 4 21H9C9.552 21 10 20.552 10 20V4C10 3.448 9.552 3 9 3ZM20 3H15C14.448 3 14 3.448 14 4V9C14 9.552 14.448 10 15 10H20C20.552 10 21 9.552 21 9V4C21 3.448 20.552 3 20 3ZM20 14H15C14.448 14 14 14.448 14 15V20C14 20.552 14.448 21 15 21H20C20.552 21 21 20.552 21 20V15C21 14.448 20.552 14 20 14Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`LayoutPanelLeft doesn't support ${type}`);
      return null;
    },
  );

LayoutPanelLeft.displayName = "LayoutPanelLeft";

LayoutPanelLeft.metadata = {
  name: "LayoutPanelLeft",
  category: "stroke/layout",
  tags: ["layout", "panel", "left", "icon"],
  description: "LayoutPanelLeft icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LayoutPanelLeft;
