import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SquareDashedBottomCodeProps extends IconProps {
  type?: "stroke";
}

export const SquareDashedBottomCode: IconComponent<SquareDashedBottomCodeProps> =
  React.forwardRef<SVGSVGElement, SquareDashedBottomCodeProps>(
    function SquareDashedBottomCode(
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
              d="M10 9.5 8 12 10 14.5M14 21H15M14 9.5 16 12 14 14.5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 21C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21M9 21H10"
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
              d="M10 9.5 8 12 10 14.5M14 21H15M14 9.5 16 12 14 14.5"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 21C4.47 21 3.961 20.789 3.586 20.414 3.211 20.039 3 19.53 3 19V5C3 4.47 3.211 3.961 3.586 3.586 3.961 3.211 4.47 3 5 3H19C19.53 3 20.039 3.211 20.414 3.586 20.789 3.961 21 4.47 21 5V19C21 19.53 20.789 20.039 20.414 20.414 20.039 20.789 19.53 21 19 21M9 21H10"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`SquareDashedBottomCode doesn't support ${type}`);
      return null;
    },
  );

SquareDashedBottomCode.displayName = "SquareDashedBottomCode";

SquareDashedBottomCode.metadata = {
  name: "SquareDashedBottomCode",
  category: "stroke/files",
  tags: ["square", "dashed", "bottom", "code", "icon"],
  description: "SquareDashedBottomCode icon from stroke/files category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SquareDashedBottomCode;
