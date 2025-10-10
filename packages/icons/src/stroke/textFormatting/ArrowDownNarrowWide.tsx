import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowDownNarrowWideProps extends IconProps {
  type?: "stroke";
}

export const ArrowDownNarrowWide: IconComponent<ArrowDownNarrowWideProps> =
  React.forwardRef<SVGSVGElement, ArrowDownNarrowWideProps>(
    function ArrowDownNarrowWide(
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
              d="M3 16 7 20 11 16M7 20V4M11 4H15M11 8H18M11 12H21"
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
              d="M3 16 7 20 11 16M7 20V4M11 4H15M11 8H18M11 12H21"
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
              d="M3 16 7 20 11 16M7 20V4M11 4H15M11 8H18M11 12H21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowDownNarrowWide doesn't support ${type}`);
      return null;
    },
  );

ArrowDownNarrowWide.displayName = "ArrowDownNarrowWide";

ArrowDownNarrowWide.metadata = {
  name: "ArrowDownNarrowWide",
  category: "stroke/textFormatting",
  tags: ["arrow", "down", "narrow", "wide", "icon"],
  description: "ArrowDownNarrowWide icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDownNarrowWide;
