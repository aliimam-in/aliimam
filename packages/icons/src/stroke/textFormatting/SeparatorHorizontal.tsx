import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SeparatorHorizontalProps extends IconProps {
  type?: "stroke";
}

export const SeparatorHorizontal: IconComponent<SeparatorHorizontalProps> =
  React.forwardRef<SVGSVGElement, SeparatorHorizontalProps>(
    function SeparatorHorizontal(
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
              d="M16 16 12 20 8 16M3 12H21M8 8 12 4 16 8"
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
              d="M16 16 12 20 8 16M3 12H21M8 8 12 4 16 8"
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
              d="M16 16 12 20 8 16M3 12H21M8 8 12 4 16 8"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }

      console.error(`SeparatorHorizontal doesn't support ${type}`);
      return null;
    },
  );

SeparatorHorizontal.displayName = "SeparatorHorizontal";

SeparatorHorizontal.metadata = {
  name: "SeparatorHorizontal",
  category: "stroke/textFormatting",
  tags: ["separator", "horizontal", "icon"],
  description: "SeparatorHorizontal icon from stroke/textFormatting category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SeparatorHorizontal;
