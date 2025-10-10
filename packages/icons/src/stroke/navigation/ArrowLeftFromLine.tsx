import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowLeftFromLineProps extends IconProps {
  type?: "stroke";
}

export const ArrowLeftFromLine: IconComponent<ArrowLeftFromLineProps> =
  React.forwardRef<SVGSVGElement, ArrowLeftFromLineProps>(
    function ArrowLeftFromLine(
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
              d="M9 6 3 12 9 18M3 12H17M21 19V5"
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
              d="M9 6 3 12 9 18M3 12H17M21 19V5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`ArrowLeftFromLine doesn't support ${type}`);
      return null;
    },
  );

ArrowLeftFromLine.displayName = "ArrowLeftFromLine";

ArrowLeftFromLine.metadata = {
  name: "ArrowLeftFromLine",
  category: "stroke/navigation",
  tags: ["arrow", "left", "from", "line", "icon"],
  description: "ArrowLeftFromLine icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowLeftFromLine;
