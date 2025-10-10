import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface LaptopMinimalCheckProps extends IconProps {
  type?: "stroke";
}

export const LaptopMinimalCheck: IconComponent<LaptopMinimalCheckProps> =
  React.forwardRef<SVGSVGElement, LaptopMinimalCheckProps>(
    function LaptopMinimalCheck(
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
              d="M2 20H22M9 10 11 12 15 8"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 4H5C3.89543 4 3 4.89543 3 6V14C3 15.1046 3.89543 16 5 16H19C20.1046 16 21 15.1046 21 14V6C21 4.89543 20.1046 4 19 4Z"
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
              d="M2 20H22M9 10 11 12 15 8"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 4H5C3.89543 4 3 4.89543 3 6V14C3 15.1046 3.89543 16 5 16H19C20.1046 16 21 15.1046 21 14V6C21 4.89543 20.1046 4 19 4Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`LaptopMinimalCheck doesn't support ${type}`);
      return null;
    },
  );

LaptopMinimalCheck.displayName = "LaptopMinimalCheck";

LaptopMinimalCheck.metadata = {
  name: "LaptopMinimalCheck",
  category: "stroke/notification",
  tags: ["laptop", "minimal", "check", "icon"],
  description: "LaptopMinimalCheck icon from stroke/notification category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default LaptopMinimalCheck;
