import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RotateCcwSquareProps extends IconProps {
  type?: "stroke";
}

export const RotateCcwSquare: IconComponent<RotateCcwSquareProps> =
  React.forwardRef<SVGSVGElement, RotateCcwSquareProps>(
    function RotateCcwSquare(
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
              d="M20 9V7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5H12"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 2 12 5 15 8M20 13V18C20 18.53 19.789 19.039 19.414 19.414 19.039 19.789 18.53 20 18 20H6C5.47 20 4.961 19.789 4.586 19.414 4.211 19.039 4 18.53 4 18V7C4 6.47 4.211 5.961 4.586 5.586 4.961 5.211 5.47 5 6 5H8"
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
              d="M20 9V7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5H12"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 2 12 5 15 8M20 13V18C20 18.53 19.789 19.039 19.414 19.414 19.039 19.789 18.53 20 18 20H6C5.47 20 4.961 19.789 4.586 19.414 4.211 19.039 4 18.53 4 18V7C4 6.47 4.211 5.961 4.586 5.586 4.961 5.211 5.47 5 6 5H8"
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
              d="M20 9V7C20 6.46957 19.7893 5.96086 19.4142 5.58579C19.0391 5.21071 18.5304 5 18 5H12"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 2 12 5 15 8M20 13V18C20 18.53 19.789 19.039 19.414 19.414 19.039 19.789 18.53 20 18 20H6C5.47 20 4.961 19.789 4.586 19.414 4.211 19.039 4 18.53 4 18V7C4 6.47 4.211 5.961 4.586 5.586 4.961 5.211 5.47 5 6 5H8"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`RotateCcwSquare doesn't support ${type}`);
      return null;
    },
  );

RotateCcwSquare.displayName = "RotateCcwSquare";

RotateCcwSquare.metadata = {
  name: "RotateCcwSquare",
  category: "stroke/layout",
  tags: ["rotate", "ccw", "square", "icon"],
  description: "RotateCcwSquare icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RotateCcwSquare;
