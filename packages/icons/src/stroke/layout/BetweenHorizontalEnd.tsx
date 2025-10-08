import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface BetweenHorizontalEndProps extends IconProps {
  type?: "stroke";
}

export const BetweenHorizontalEnd: IconComponent<BetweenHorizontalEndProps> =
  React.forwardRef<SVGSVGElement, BetweenHorizontalEndProps>(
    function BetweenHorizontalEnd(
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
              d="M15 3H4C3.448 3 3 3.448 3 4V9C3 9.552 3.448 10 4 10H15C15.552 10 16 9.552 16 9V4C16 3.448 15.552 3 15 3ZM22 15 19 12 22 9M15 14H4C3.448 14 3 14.448 3 15V20C3 20.552 3.448 21 4 21H15C15.552 21 16 20.552 16 20V15C16 14.448 15.552 14 15 14Z"
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
              d="M15 3H4C3.448 3 3 3.448 3 4V9C3 9.552 3.448 10 4 10H15C15.552 10 16 9.552 16 9V4C16 3.448 15.552 3 15 3ZM22 15 19 12 22 9M15 14H4C3.448 14 3 14.448 3 15V20C3 20.552 3.448 21 4 21H15C15.552 21 16 20.552 16 20V15C16 14.448 15.552 14 15 14Z"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`BetweenHorizontalEnd doesn't support ${type}`);
      return null;
    },
  );

BetweenHorizontalEnd.displayName = "BetweenHorizontalEnd";

BetweenHorizontalEnd.metadata = {
  name: "BetweenHorizontalEnd",
  category: "stroke/layout",
  tags: ["between", "horizontal", "end", "icon"],
  description: "BetweenHorizontalEnd icon from stroke/layout category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default BetweenHorizontalEnd;
