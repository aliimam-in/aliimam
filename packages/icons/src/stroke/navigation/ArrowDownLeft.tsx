import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface ArrowDownLeftProps extends IconProps {
  type?: "stroke";
}

export const ArrowDownLeft: IconComponent<ArrowDownLeftProps> =
  React.forwardRef<SVGSVGElement, ArrowDownLeftProps>(function ArrowDownLeft(
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
            d="M17 7 7 17M17 17H7V7"
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
            d="M17 7 7 17M17 17H7V7"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`ArrowDownLeft doesn't support ${type}`);
    return null;
  });

ArrowDownLeft.displayName = "ArrowDownLeft";

ArrowDownLeft.metadata = {
  name: "ArrowDownLeft",
  category: "stroke/navigation",
  tags: ["arrow", "down", "left", "icon"],
  description: "ArrowDownLeft icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default ArrowDownLeft;
