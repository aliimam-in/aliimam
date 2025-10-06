import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowRightToLineProps extends IconProps {
  type?: "stroke";
}

export const ArrowRightToLine: IconComponent<ArrowRightToLineProps> =
  React.forwardRef<SVGSVGElement, ArrowRightToLineProps>(
    function ArrowRightToLine(
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
              d="M17 12H3M11 18 17 12 11 6M21 5V19"
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
              d="M17 12H3M11 18 17 12 11 6M21 5V19"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowRightToLine doesn't support ${type}`);
      return null;
    },
  );

ArrowRightToLine.displayName = "ArrowRightToLine";

ArrowRightToLine.metadata = {
  name: "ArrowRightToLine",
  category: "stroke/codingDevelopment",
  tags: ["arrow", "right", "to", "line", "icon"],
  description: "ArrowRightToLine icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowRightToLine;
