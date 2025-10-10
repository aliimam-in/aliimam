import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowDownWideNarrowProps extends IconProps {
  type?: "stroke";
}

export const ArrowDownWideNarrow: IconComponent<ArrowDownWideNarrowProps> =
  React.forwardRef<SVGSVGElement, ArrowDownWideNarrowProps>(
    function ArrowDownWideNarrow(
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
              d="M3 16 7 20 11 16M7 20V4M11 4H21M11 8H18M11 12H15"
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
              d="M3 16 7 20 11 16M7 20V4M11 4H21M11 8H18M11 12H15"
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
              d="M3 16 7 20 11 16M7 20V4M11 4H21M11 8H18M11 12H15"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowDownWideNarrow doesn't support ${type}`);
      return null;
    },
  );

ArrowDownWideNarrow.displayName = "ArrowDownWideNarrow";

ArrowDownWideNarrow.metadata = {
  name: "ArrowDownWideNarrow",
  category: "stroke/textFormatting",
  tags: ["arrow", "down", "wide", "narrow", "icon"],
  description: "ArrowDownWideNarrow icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDownWideNarrow;
