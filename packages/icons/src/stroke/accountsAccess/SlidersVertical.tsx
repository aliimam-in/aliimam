import * as React from "react";
import type { IconProps, IconMetadata, IconComponent } from "../../types";

export const SlidersVertical: IconComponent = React.forwardRef<
  SVGSVGElement,
  IconProps
>(function SlidersVertical(
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
        d="M10 8H14M12 21V12M12 8V3M17 16H21M19 12V3M19 21V16M3 14H7M5 10V3M5 21V14"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

SlidersVertical.displayName = "SlidersVertical";

SlidersVertical.metadata = {
  name: "SlidersVertical",
  category: "stroke/accountsAccess",
  tags: ["sliders", "vertical", "icon"],
  description: "SlidersVertical icon from stroke/accountsAccess category",
  type: ["stroke", "icon"],
} as IconMetadata;

export default SlidersVertical;
