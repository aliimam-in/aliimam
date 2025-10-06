import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WifiLow: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WifiLow(
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
        d="M12 20H12.01M8.5 16.429C9.435 15.513 10.691 15 12 15 13.309 15 14.565 15.513 15.5 16.429"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WifiLow.displayName = "WifiLow";

WifiLow.metadata = {
  name: "WifiLow",
  category: "stroke/connectivity",
  tags: ["wifi", "low", "icon"],
  description: "WifiLow icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WifiLow;
