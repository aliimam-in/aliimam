import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface DecimalsArrowRightProps extends IconProps {
  type?: "stroke";
}

export const DecimalsArrowRight: IconComponent<DecimalsArrowRightProps> =
  React.forwardRef<SVGSVGElement, DecimalsArrowRightProps>(
    function DecimalsArrowRight(
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
              d="M10 18H20M17 21 20 18 17 15M3 11H3.01M20 5.5C20 4.119 18.881 3 17.5 3 16.119 3 15 4.119 15 5.5V8.5C15 9.881 16.119 11 17.5 11 18.881 11 20 9.881 20 8.5V5.5ZM11 5.5C11 4.119 9.881 3 8.5 3 7.119 3 6 4.119 6 5.5V8.5C6 9.881 7.119 11 8.5 11 9.881 11 11 9.881 11 8.5V5.5Z"
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
              d="M10 18H20M17 21 20 18 17 15M3 11H3.01M20 5.5C20 4.119 18.881 3 17.5 3 16.119 3 15 4.119 15 5.5V8.5C15 9.881 16.119 11 17.5 11 18.881 11 20 9.881 20 8.5V5.5ZM11 5.5C11 4.119 9.881 3 8.5 3 7.119 3 6 4.119 6 5.5V8.5C6 9.881 7.119 11 8.5 11 9.881 11 11 9.881 11 8.5V5.5Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`DecimalsArrowRight doesn't support ${type}`);
      return null;
    },
  );

DecimalsArrowRight.displayName = "DecimalsArrowRight";

DecimalsArrowRight.metadata = {
  name: "DecimalsArrowRight",
  category: "stroke/design",
  tags: ["decimals", "arrow", "right", "icon"],
  description: "DecimalsArrowRight icon from stroke/design category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default DecimalsArrowRight;
