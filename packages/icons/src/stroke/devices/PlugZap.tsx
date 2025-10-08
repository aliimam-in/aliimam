import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const PlugZap: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function PlugZap(
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
        d="M6.3 20.3C6.523 20.524 6.788 20.701 7.08 20.822 7.371 20.944 7.684 21.006 8 21.006 8.316 21.006 8.629 20.944 8.92 20.822 9.212 20.701 9.477 20.524 9.7 20.3L12 18 6 12 3.7 14.3C3.476 14.523 3.299 14.788 3.178 15.08 3.056 15.371 2.994 15.684 2.994 16 2.994 16.316 3.056 16.629 3.178 16.92 3.299 17.212 3.476 17.477 3.7 17.7L6.3 20.3ZM2 22 5 19M7.5 13.5 10 11M10.5 16.5 13 14M18 3 14 7H20L16 11"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

PlugZap.displayName = "PlugZap";

PlugZap.metadata = {
  name: "PlugZap",
  category: "stroke/devices",
  tags: ["plug", "zap", "icon"],
  description: "PlugZap icon from stroke/devices category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default PlugZap;
