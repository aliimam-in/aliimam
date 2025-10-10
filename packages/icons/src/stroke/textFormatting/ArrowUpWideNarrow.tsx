import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowUpWideNarrowProps extends IconProps {
  type?: "stroke";
}

export const ArrowUpWideNarrow: IconComponent<ArrowUpWideNarrowProps> =
  React.forwardRef<SVGSVGElement, ArrowUpWideNarrowProps>(
    function ArrowUpWideNarrow(
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
              d="M3 8 7 4 11 8M7 4V20M11 12H21M11 16H18M11 20H15"
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
              d="M3 8 7 4 11 8M7 4V20M11 12H21M11 16H18M11 20H15"
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
              d="M3 8 7 4 11 8M7 4V20M11 12H21M11 16H18M11 20H15"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowUpWideNarrow doesn't support ${type}`);
      return null;
    },
  );

ArrowUpWideNarrow.displayName = "ArrowUpWideNarrow";

ArrowUpWideNarrow.metadata = {
  name: "ArrowUpWideNarrow",
  category: "stroke/textFormatting",
  tags: ["arrow", "up", "wide", "narrow", "icon"],
  description: "ArrowUpWideNarrow icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpWideNarrow;
