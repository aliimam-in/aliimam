import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SquareArrowOutUpLeftProps extends IconProps {
  type?: "stroke";
}

export const SquareArrowOutUpLeft: IconComponent<SquareArrowOutUpLeftProps> =
  React.forwardRef<SVGSVGElement, SquareArrowOutUpLeftProps>(
    function SquareArrowOutUpLeft(
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
              d="M13 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V13M3 3 12 12M3 9V3H9"
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
              d="M13 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21H5C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V13M3 3 12 12M3 9V3H9"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`SquareArrowOutUpLeft doesn't support ${type}`);
      return null;
    },
  );

SquareArrowOutUpLeft.displayName = "SquareArrowOutUpLeft";

SquareArrowOutUpLeft.metadata = {
  name: "SquareArrowOutUpLeft",
  category: "stroke/navigation",
  tags: ["square", "arrow", "out", "up", "left", "icon"],
  description: "SquareArrowOutUpLeft icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareArrowOutUpLeft;
