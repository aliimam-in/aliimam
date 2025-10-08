import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowUpNarrowWideProps extends IconProps {
  type?: "stroke";
}

export const ArrowUpNarrowWide: IconComponent<ArrowUpNarrowWideProps> =
  React.forwardRef<SVGSVGElement, ArrowUpNarrowWideProps>(
    function ArrowUpNarrowWide(
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
              d="M3 8 7 4 11 8M7 4V20M11 12H15M11 16H18M11 20H21"
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
              d="M3 8 7 4 11 8M7 4V20M11 12H15M11 16H18M11 20H21"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowUpNarrowWide doesn't support ${type}`);
      return null;
    },
  );

ArrowUpNarrowWide.displayName = "ArrowUpNarrowWide";

ArrowUpNarrowWide.metadata = {
  name: "ArrowUpNarrowWide",
  category: "stroke/layout",
  tags: ["arrow", "up", "narrow", "wide", "icon"],
  description: "ArrowUpNarrowWide icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpNarrowWide;
