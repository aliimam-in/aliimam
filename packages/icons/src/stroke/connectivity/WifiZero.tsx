import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const WifiZero: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function WifiZero(
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
        d="M12 20H12.01"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

WifiZero.displayName = "WifiZero";

WifiZero.metadata = {
  name: "WifiZero",
  category: "stroke/connectivity",
  tags: ["wifi", "zero", "icon"],
  description: "WifiZero icon from stroke/connectivity category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default WifiZero;
