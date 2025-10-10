import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Repeat1: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Repeat1(
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
    ...props
  },
  forwardedRef,
) {
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
        d="M17 2L21 6L17 10"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 11V10C3 8.939 3.421 7.922 4.172 7.172 4.922 6.421 5.939 6 7 6H21M7 22 3 18 7 14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 13V14C21 15.061 20.579 16.078 19.828 16.828 19.078 17.579 18.061 18 17 18H3M11 10H12V14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Repeat1.displayName = "Repeat1";

Repeat1.metadata = {
  name: "Repeat1",
  category: "stroke/multimedia",
  tags: ["repeat", "icon"],
  description: "Repeat1 icon from stroke/multimedia category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Repeat1;
