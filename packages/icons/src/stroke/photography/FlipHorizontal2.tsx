import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FlipHorizontal2Props extends IconProps {
  type?: "stroke";
}

export const FlipHorizontal2: IconComponent<FlipHorizontal2Props> =
  React.forwardRef<SVGSVGElement, FlipHorizontal2Props>(
    function FlipHorizontal2(
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
              d="M3 7 8 12 3 17V7ZM21 7 16 12 21 17V7ZM12 20V22M12 14V16M12 8V10M12 2V4"
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
              d="M3 7 8 12 3 17V7ZM21 7 16 12 21 17V7ZM12 20V22M12 14V16M12 8V10M12 2V4"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`FlipHorizontal2 doesn't support ${type}`);
      return null;
    },
  );

FlipHorizontal2.displayName = "FlipHorizontal2";

FlipHorizontal2.metadata = {
  name: "FlipHorizontal2",
  category: "stroke/photography",
  tags: ["flip", "horizontal", "icon"],
  description: "FlipHorizontal2 icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlipHorizontal2;
