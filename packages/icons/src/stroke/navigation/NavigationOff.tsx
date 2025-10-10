import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const NavigationOff: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function NavigationOff(
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
        d="M8.43 8.43 3 11 11 13 13 21 15.57 15.57M17.39 11.73 22 2 12.27 6.61M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

NavigationOff.displayName = "NavigationOff";

NavigationOff.metadata = {
  name: "NavigationOff",
  category: "stroke/navigation",
  tags: ["navigation", "off", "icon"],
  description: "NavigationOff icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default NavigationOff;
