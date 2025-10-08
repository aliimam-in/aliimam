import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DecimalsArrowLeftProps extends IconProps {
  type?: "stroke";
}

export const DecimalsArrowLeft: IconComponent<DecimalsArrowLeftProps> =
  React.forwardRef<SVGSVGElement, DecimalsArrowLeftProps>(
    function DecimalsArrowLeft(
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
              d="M13 21 10 18 13 15M20 18H10M3 11H3.01M11 5.5C11 4.119 9.881 3 8.5 3 7.119 3 6 4.119 6 5.5V8.5C6 9.881 7.119 11 8.5 11 9.881 11 11 9.881 11 8.5V5.5Z"
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
              d="M13 21 10 18 13 15M20 18H10M3 11H3.01M11 5.5C11 4.119 9.881 3 8.5 3 7.119 3 6 4.119 6 5.5V8.5C6 9.881 7.119 11 8.5 11 9.881 11 11 9.881 11 8.5V5.5Z"
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
              d="M13 21 10 18 13 15M20 18H10M3 11H3.01M11 5.5C11 4.119 9.881 3 8.5 3 7.119 3 6 4.119 6 5.5V8.5C6 9.881 7.119 11 8.5 11 9.881 11 11 9.881 11 8.5V5.5Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`DecimalsArrowLeft doesn't support ${type}`);
      return null;
    },
  );

DecimalsArrowLeft.displayName = "DecimalsArrowLeft";

DecimalsArrowLeft.metadata = {
  name: "DecimalsArrowLeft",
  category: "stroke/mathematics",
  tags: ["decimals", "arrow", "left", "icon"],
  description: "DecimalsArrowLeft icon from stroke/mathematics category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DecimalsArrowLeft;
