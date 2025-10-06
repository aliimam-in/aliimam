import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface TrendingDownProps extends IconProps {
  type?: "stroke";
}

export const TrendingDown: IconComponent<TrendingDownProps> = React.forwardRef<
  SVGSVGElement,
  TrendingDownProps
>(function TrendingDown(
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
          d="M16 17H22V11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 17L13.5 8.5L8.5 13.5L2 7"
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
          d="M16 17H22V11"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 17L13.5 8.5L8.5 13.5L2 7"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`TrendingDown doesn't support ${type}`);
  return null;
});

TrendingDown.displayName = "TrendingDown";

TrendingDown.metadata = {
  name: "TrendingDown",
  category: "stroke/charts",
  tags: ["trending", "down", "icon"],
  description: "TrendingDown icon from stroke/charts category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default TrendingDown;
