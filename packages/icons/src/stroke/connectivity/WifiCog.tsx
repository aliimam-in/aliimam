import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WifiCog: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WifiCog(
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
        d="M14.305 19.53 15.228 19.148M15.228 16.852 14.305 16.469M16.852 15.228 16.469 14.305M16.852 20.772 16.469 21.696M19.148 15.228 19.531 14.305M19.53 21.696 19.148 20.772M2 7.82C4.75 5.36 8.31 4 12 4 15.69 4 19.25 5.36 22 7.82M20.772 16.852 21.696 16.469M20.772 19.148 21.696 19.531M5 11.858C6.491 10.398 8.401 9.44 10.464 9.12 12.526 8.8 14.637 9.133 16.5 10.073M8.5 15.429C9.166 14.776 10.002 14.322 10.913 14.119M18 21C19.657 21 21 19.657 21 18 21 16.343 19.657 15 18 15 16.343 15 15 16.343 15 18 15 19.657 16.343 21 18 21Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WifiCog.displayName = "WifiCog";

WifiCog.metadata = {
  name: "WifiCog",
  category: "stroke/connectivity",
  tags: ["wifi", "cog", "icon"],
  description: "WifiCog icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WifiCog;
