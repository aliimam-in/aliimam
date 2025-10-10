import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowLeftToLineProps extends IconProps {
  type?: "stroke";
}

export const ArrowLeftToLine: IconComponent<ArrowLeftToLineProps> =
  React.forwardRef<SVGSVGElement, ArrowLeftToLineProps>(
    function ArrowLeftToLine(
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
              d="M3 19V5M13 6 7 12 13 18M7 12H21"
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
              d="M3 19V5M13 6 7 12 13 18M7 12H21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowLeftToLine doesn't support ${type}`);
      return null;
    },
  );

ArrowLeftToLine.displayName = "ArrowLeftToLine";

ArrowLeftToLine.metadata = {
  name: "ArrowLeftToLine",
  category: "stroke/navigation",
  tags: ["arrow", "left", "to", "line", "icon"],
  description: "ArrowLeftToLine icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowLeftToLine;
