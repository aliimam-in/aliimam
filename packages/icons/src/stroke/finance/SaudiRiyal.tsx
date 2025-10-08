import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SaudiRiyal: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SaudiRiyal(
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
        d="M20 19.5 14.5 20.7M14.5 4V15.22C14.5 15.372 14.535 15.522 14.601 15.658 14.668 15.795 14.765 15.914 14.885 16.008 15.004 16.101 15.144 16.166 15.292 16.198 15.441 16.23 15.595 16.227 15.742 16.19L20 15.2M2.978 19.351 8.527 17.988C8.96 17.87 9.341 17.61 9.608 17.249 9.875 16.889 10.013 16.449 10 16V2M20 10 4 13.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SaudiRiyal.displayName = "SaudiRiyal";

SaudiRiyal.metadata = {
  name: "SaudiRiyal",
  category: "stroke/finance",
  tags: ["saudi", "riyal", "icon"],
  description: "SaudiRiyal icon from stroke/finance category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SaudiRiyal;
