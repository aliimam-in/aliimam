import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowUpToLineProps extends IconProps {
  type?: "stroke";
}

export const ArrowUpToLine: IconComponent<ArrowUpToLineProps> =
  React.forwardRef<SVGSVGElement, ArrowUpToLineProps>(function ArrowUpToLine(
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
            d="M5 3H19M18 13 12 7 6 13M12 7V21"
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
            d="M5 3H19M18 13 12 7 6 13M12 7V21"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ArrowUpToLine doesn't support ${type}`);
    return null;
  });

ArrowUpToLine.displayName = "ArrowUpToLine";

ArrowUpToLine.metadata = {
  name: "ArrowUpToLine",
  category: "stroke/files",
  tags: ["arrow", "up", "to", "line", "icon"],
  description: "ArrowUpToLine icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowUpToLine;
