import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

interface SnowFlakeProps extends IconProps {
  type?: "stroke";
}

export const SnowFlake: IconComponent<SnowFlakeProps> = React.forwardRef<
  SVGSVGElement,
  SnowFlakeProps
>(function SnowFlake(
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
          d="M10 20 8.75 17.5 6 18M10 4 8.75 6.5 6 6M14 20 15.25 17.5 18 18M14 4 15.25 6.5 18 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 21 14 15H10M17 3 14 9 15.5 12M2 12H8.5L10 9M20 10 18.5 12 20 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12H15.5L14 15M4 10 5.5 12 4 14M7 21 10 15 8.5 12M7 3 10 9H14"
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
          d="M10 20 8.75 17.5 6 18M10 4 8.75 6.5 6 6M14 20 15.25 17.5 18 18M14 4 15.25 6.5 18 6"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 21 14 15H10M17 3 14 9 15.5 12M2 12H8.5L10 9M20 10 18.5 12 20 14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 12H15.5L14 15M4 10 5.5 12 4 14M7 21 10 15 8.5 12M7 3 10 9H14"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  console.error(`SnowFlake doesn't support ${type}`);
  return null;
});

SnowFlake.displayName = "SnowFlake";

SnowFlake.metadata = {
  name: "SnowFlake",
  category: "stroke/seasons",
  tags: ["snow", "flake", "icon"],
  description: "SnowFlake icon from stroke/seasons category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SnowFlake;
