import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface FlipVertical2Props extends IconProps {
  type?: "stroke";
}

export const FlipVertical2: IconComponent<FlipVertical2Props> =
  React.forwardRef<SVGSVGElement, FlipVertical2Props>(function FlipVertical2(
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
            d="M17 3 12 8 7 3H17ZM17 21 12 16 7 21H17ZM4 12H2M10 12H8M16 12H14M22 12H20"
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
            d="M17 3 12 8 7 3H17ZM17 21 12 16 7 21H17ZM4 12H2M10 12H8M16 12H14M22 12H20"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`FlipVertical2 doesn't support ${type}`);
    return null;
  });

FlipVertical2.displayName = "FlipVertical2";

FlipVertical2.metadata = {
  name: "FlipVertical2",
  category: "stroke/photography",
  tags: ["flip", "vertical", "icon"],
  description: "FlipVertical2 icon from stroke/photography category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default FlipVertical2;
