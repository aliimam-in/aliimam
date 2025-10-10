import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const Navigation2Off: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function Navigation2Off(
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
        d="M9.31 9.31 5 21 12 17 19 21 17.83 17.83M14.53 8.88 12 2 10.83 5.17M2 2 22 22"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

Navigation2Off.displayName = "Navigation2Off";

Navigation2Off.metadata = {
  name: "Navigation2Off",
  category: "stroke/navigation",
  tags: ["navigation", "off", "icon"],
  description: "Navigation2Off icon from stroke/navigation category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default Navigation2Off;
