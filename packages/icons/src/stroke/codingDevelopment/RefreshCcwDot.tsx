import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface RefreshCcwDotProps extends IconProps {
  type?: "stroke";
}

export const RefreshCcwDot: IconComponent<RefreshCcwDotProps> =
  React.forwardRef<SVGSVGElement, RefreshCcwDotProps>(function RefreshCcwDot(
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
            d="M21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.48395 3.00947 7.06897 3.99122 5.26 5.74L3 8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 3V8H8M3 12C3 14.387 3.948 16.676 5.636 18.364 7.324 20.052 9.613 21 12 21 14.516 20.991 16.931 20.009 18.74 18.26L21 16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 16H21V21M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13Z"
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
            d="M21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.48395 3.00947 7.06897 3.99122 5.26 5.74L3 8"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 3V8H8M3 12C3 14.387 3.948 16.676 5.636 18.364 7.324 20.052 9.613 21 12 21 14.516 20.991 16.931 20.009 18.74 18.26L21 16"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 16H21V21M12 13C12.552 13 13 12.552 13 12 13 11.448 12.552 11 12 11 11.448 11 11 11.448 11 12 11 12.552 11.448 13 12 13Z"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    }

    console.error(`RefreshCcwDot doesn't support ${type}`);
    return null;
  });

RefreshCcwDot.displayName = "RefreshCcwDot";

RefreshCcwDot.metadata = {
  name: "RefreshCcwDot",
  category: "stroke/codingDevelopment",
  tags: ["refresh", "ccw", "dot", "icon"],
  description: "RefreshCcwDot icon from stroke/codingDevelopment category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default RefreshCcwDot;
