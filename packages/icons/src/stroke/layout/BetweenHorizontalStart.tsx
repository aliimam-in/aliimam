import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BetweenHorizontalStartProps extends IconProps {
  type?: "stroke";
}

export const BetweenHorizontalStart: IconComponent<BetweenHorizontalStartProps> =
  React.forwardRef<SVGSVGElement, BetweenHorizontalStartProps>(
    function BetweenHorizontalStart(
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
              d="M20 3H9C8.448 3 8 3.448 8 4V9C8 9.552 8.448 10 9 10H20C20.552 10 21 9.552 21 9V4C21 3.448 20.552 3 20 3ZM2 9 5 12 2 15M20 14H9C8.448 14 8 14.448 8 15V20C8 20.552 8.448 21 9 21H20C20.552 21 21 20.552 21 20V15C21 14.448 20.552 14 20 14Z"
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
              d="M20 3H9C8.448 3 8 3.448 8 4V9C8 9.552 8.448 10 9 10H20C20.552 10 21 9.552 21 9V4C21 3.448 20.552 3 20 3ZM2 9 5 12 2 15M20 14H9C8.448 14 8 14.448 8 15V20C8 20.552 8.448 21 9 21H20C20.552 21 21 20.552 21 20V15C21 14.448 20.552 14 20 14Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`BetweenHorizontalStart doesn't support ${type}`);
      return null;
    },
  );

BetweenHorizontalStart.displayName = "BetweenHorizontalStart";

BetweenHorizontalStart.metadata = {
  name: "BetweenHorizontalStart",
  category: "stroke/layout",
  tags: ["between", "horizontal", "start", "icon"],
  description: "BetweenHorizontalStart icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BetweenHorizontalStart;
