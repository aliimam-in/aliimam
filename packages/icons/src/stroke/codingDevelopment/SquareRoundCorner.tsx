import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SquareRoundCornerProps extends IconProps {
  type?: "stroke";
}

export const SquareRoundCorner: IconComponent<SquareRoundCornerProps> =
  React.forwardRef<SVGSVGElement, SquareRoundCornerProps>(
    function SquareRoundCorner(
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
              d="M21 11C21 8.878 20.157 6.843 18.657 5.343 17.157 3.843 15.122 3 13 3M21 15V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H9"
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
              d="M21 11C21 8.878 20.157 6.843 18.657 5.343 17.157 3.843 15.122 3 13 3M21 15V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H9"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`SquareRoundCorner doesn't support ${type}`);
      return null;
    },
  );

SquareRoundCorner.displayName = "SquareRoundCorner";

SquareRoundCorner.metadata = {
  name: "SquareRoundCorner",
  category: "stroke/codingDevelopment",
  tags: ["square", "round", "corner", "icon"],
  description: "SquareRoundCorner icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareRoundCorner;
