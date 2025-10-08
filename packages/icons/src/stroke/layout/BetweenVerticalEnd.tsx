import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BetweenVerticalEndProps extends IconProps {
  type?: "stroke";
}

export const BetweenVerticalEnd: IconComponent<BetweenVerticalEndProps> =
  React.forwardRef<SVGSVGElement, BetweenVerticalEndProps>(
    function BetweenVerticalEnd(
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
              d="M9 3H4C3.448 3 3 3.448 3 4V15C3 15.552 3.448 16 4 16H9C9.552 16 10 15.552 10 15V4C10 3.448 9.552 3 9 3ZM9 22 12 19 15 22M20 3H15C14.448 3 14 3.448 14 4V15C14 15.552 14.448 16 15 16H20C20.552 16 21 15.552 21 15V4C21 3.448 20.552 3 20 3Z"
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
              d="M9 3H4C3.448 3 3 3.448 3 4V15C3 15.552 3.448 16 4 16H9C9.552 16 10 15.552 10 15V4C10 3.448 9.552 3 9 3ZM9 22 12 19 15 22M20 3H15C14.448 3 14 3.448 14 4V15C14 15.552 14.448 16 15 16H20C20.552 16 21 15.552 21 15V4C21 3.448 20.552 3 20 3Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`BetweenVerticalEnd doesn't support ${type}`);
      return null;
    },
  );

BetweenVerticalEnd.displayName = "BetweenVerticalEnd";

BetweenVerticalEnd.metadata = {
  name: "BetweenVerticalEnd",
  category: "stroke/layout",
  tags: ["between", "vertical", "end", "icon"],
  description: "BetweenVerticalEnd icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BetweenVerticalEnd;
